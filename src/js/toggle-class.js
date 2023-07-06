function ToggleClass(el) {
  const target = document.querySelector(el.dataset.target);
  const classes = el.dataset.toggleClass.split(" ");
  
  el.addEventListener("click", function() {
    classes.forEach(function(x) {
      target.classList.toggle(x);
    });
    
  });
}

export function bindToggleClass() {
  return [...document.querySelectorAll("[data-toggle-class]")].map((el) => ToggleClass(el));
}
