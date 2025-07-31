function SlideShow(el) {
  const slides = el.querySelectorAll("[data-slide-show-el]");
  let bounding;
  let width;
  let height;
  let i = 0;

  el.classList.add('relative');

  slides.forEach(function(e, index) {
    if (index > 0) {
      e.classList.add(...['absolute','inset-0', 'transition-all', 'duration-500', 'ease-in-out', 'opacity-0', 'z-0']);  
    } else {
      e.classList.add(...['absolute','inset-0', 'transition-all', 'duration-500', 'ease-in-out', 'z-10']);  
    }
  });

  setInterval(function() {
    i++;
    if (i == slides.length) {
      i = 0;
    }
    slides.forEach(function(e) {
      e.classList.add('opacity-0');
    });

    slides[i].classList.remove('opacity-0');

  }, 2000);

}


export function bindSlideShow() {
  return [...document.querySelectorAll("[data-slide-show]")].map((el) => SlideShow(el));
}