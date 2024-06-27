function ToggleClass(el) {
  const target = document.querySelector(el.dataset.target);
  const classes = el.dataset.toggleClass.split(" ");
  const fixed = el.hasAttribute("data-toggle-fixed");
  const setScroll = el.dataset.toggleSetScroll;
  const resetScroll = el.dataset.toggleResetScroll;
  let scrollPosition;
  
  el.addEventListener("click", function(e) {
    e.preventDefault();

    classes.forEach(function(x) {
      target.classList.toggle(x);
    });

    if (fixed) {

      if (typeof setScroll !== "undefined") {
        scrollPosition = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
        document.querySelector("body").setAttribute('data-scroll-position', scrollPosition);
      }

      document.querySelector("body").classList.toggle("overflow-hidden");
      document.querySelector("body").classList.toggle("fixed");

      if (typeof resetScroll !== "undefined") {
        window.scrollTo({
          top: document.querySelector("body").dataset.scrollPosition,
          left: 0,
          behavior: "instant",
        });
      }
    }


    
  });
}

export function bindToggleClass() {
  return [...document.querySelectorAll("[data-toggle-class]")].map((el) => ToggleClass(el));
}
