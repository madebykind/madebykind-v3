function SlideShow(el) {
  const slides = el.querySelectorAll("[data-slide-show-el]");
  let bounding;
  let width;
  let height;
  let i = 0;

  slides.forEach(function(e, index) {
    if (index > 0) {
      e.style.position = "absolute";
      e.style.top = 0;
      e.style.left = 0;
    }
  });

  bounding = slides[0].getBoundingClientRect()
  width = bounding.width;
  height = bounding.height;

  el.style.width = width + "px";
  el.style.height = height + "px";


  setInterval(function() {
    i++;
    if (i == slides.length) {
      i = 0;
    }
    slides.forEach(function(e) {
      e.style.opacity = 0;
    });

    slides[i].style.opacity = 1;

  }, 2000);

}


export function bindSlideShow() {
  return [...document.querySelectorAll("[data-slide-show]")].map((el) => SlideShow(el));
}