function SnapShow(el) {
  const slides = el.querySelectorAll("[data-slide-show-el]");
  const speed = el.dataset.speed ? el.dataset.speed  : 500;
  let bounding;
  let width;
  let height;
  let i = 0;

  el.classList.add('relative');

  slides.forEach(function(e, index) {
    e.classList.add(...['absolute','inset-0']);
    if (index > 0) {
      e.classList.add(...['hidden']);
    }
  });

  setInterval(function() {
    i++;
    if (i == slides.length) {
      i = 0;
    }
    slides.forEach(function(e) {
      e.classList.add('hidden');
    });

    slides[i].classList.remove('hidden');

  }, speed);

}


export function bindSnapShow() {
  return [...document.querySelectorAll("[data-snap-show]")].map((el) => SnapShow(el));
}