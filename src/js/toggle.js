function doToggle(el, toggleGroup, targetEl, focusEl, toggleParent, toggleFixed) {
  const callbackFn = window[el.dataset.toggleCallback];

  // Hide other members of toggle group
  toggleGroup.forEach((item) => {
    if (item !== el) {
      const gTargetId = item.getAttribute("data-target").replace("#", "");
      const gTargetEl = document.getElementById(gTargetId);
      item.classList.remove("active");
      gTargetEl.classList.add("hidden");
    }
  });

  el.classList.toggle("active");
  targetEl.classList.toggle("hidden");

  if (focusEl) {
    if (focusEl === document.activeElement) {
      focusEl.blur();
    } else {
      focusEl.focus();
    }
  }

  if (toggleFixed) {
    document.querySelector("body").classList.toggle("overflow-hidden");
    document.querySelector("body").classList.toggle("fixed");
  }

  if (toggleParent) {
    toggleParent.classList.toggle("active");
  }

  // Callback
  if (typeof callbackFn === "function") {
    callbackFn();
  }
}

function Toggler(el) {
  const targetHash = el.getAttribute("data-target");
  const targetEl = document.querySelector(`${el.getAttribute("data-target")}`);
  const focusEl = document.querySelector(`${el.getAttribute("data-focus")}`);
  const toggleGroupName = el.dataset.toggleGroup;
  const toggleGroup = document.querySelectorAll(`[data-toggle-group="${toggleGroupName}"]`);
  const toggleParentId = el.dataset.toggleParent;
  const toggleFixed = el.hasAttribute("data-toggle-fixed");
  const toggleParent = document.getElementById(toggleParentId);
  const toggleHash = window.location.hash;

  // Only hide if not overriden
  if (!targetEl.hasAttribute("data-toggle-show")) {
    if (targetEl.dataset.toggleShow !== "") {
      targetEl.classList.add("hidden");
    }
  } else {
    el.classList.add("active");
  }

  // check hash
  if (toggleHash && toggleHash === targetHash) {
    doToggle(el, toggleGroup, targetEl, focusEl, toggleParent, toggleFixed);
  }

  el.addEventListener("click", function(e) {
    doToggle(this, toggleGroup, targetEl, focusEl, toggleParent, toggleFixed);
  });
}

export function bindToggles() {
  return [...document.querySelectorAll("[data-toggle]")].map((el) => Toggler(el));
}
