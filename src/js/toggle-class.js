function ToggleClass(el) {
  const target = document.querySelector(el.dataset.target);
  const classes = el.dataset.toggleClass.split(" ");
  const fixed = el.hasAttribute("data-toggle-fixed");
  const anchor = el.dataset.toggleAnchor;
  
  el.addEventListener("click", function() {

    classes.forEach(function(x) {
      target.classList.toggle(x);
    });

    if (fixed) {
      document.querySelector("body").classList.toggle("overflow-hidden");
      document.querySelector("body").classList.toggle("fixed");
    }


    if (anchor) {
      let anchorEl = document.querySelector(anchor);
      anchorEl.scrollIntoView({
          behavior: "instant",
          block: "start",
        });
    }
    
  });
}

export function bindToggleClass() {
  return [...document.querySelectorAll("[data-toggle-class]")].map((el) => ToggleClass(el));
}
