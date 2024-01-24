function SlideShow(el) {
  const slides = el.querySelectorAll("[data-slide-show-el]");
  let bounding;
  let width;
  let height;
  let i = 0;

  slides.forEach(function(e, index) {
    if (index > 0) {
      e.classList.remove('hidden');
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

  }, 2000);

}


export function bindSlideShow() {
  return [...document.querySelectorAll("[data-slide-show]")].map((el) => SlideShow(el));
}