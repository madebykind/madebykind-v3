function ClassOnView(el) {
  const toggleClass = el.dataset.classOnView;
  let bounding = el.getBoundingClientRect();

  if (bounding.top >= 0  && bounding.bottom <= window.innerHeight) {
    el.classList.add(toggleClass);
  } else {
    el.classList.remove(toggleClass);
  }

  document.addEventListener("scroll", function() {
    bounding = el.getBoundingClientRect();

    if (bounding.top >= 0  && bounding.bottom <= window.innerHeight) {
      el.classList.add(toggleClass);
    } else {
      el.classList.remove(toggleClass);
    }

  });
}

export function bindClassOnView() {
  return [...document.querySelectorAll("[data-class-on-view]")].map((el) => ClassOnView(el));
}
