const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

function inView(bounding) {  
  return (bounding.top >= 0  && bounding.bottom <= window.innerHeight);
}

function PhoneScroll(el) {
  const imageContainer = el.querySelector("picture");
  const image = imageContainer.querySelector('img');
  const loop = el.dataset.scrollLoop !== undefined;
  let transitionSpeed = '5000ms';
  let bounding;
  let interval;
  let i = 0;

  if (!isReduced) {
    if (el.dataset.scrollSpeed !== undefined) {
      transitionSpeed = el.dataset.scrollSpeed + "ms";
    }

    // on scroll, check if in view
    window.addEventListener("scrollend", function() {
      bounding = el.getBoundingClientRect();

      if (inView(bounding)) {
        imageContainer.style.setProperty('transition-duration', transitionSpeed);
        imageContainer.style.setProperty('top', `-${(image.clientHeight - el.clientHeight)}px`);

        if (loop) {
          clearInterval(interval);

          interval = setInterval(function() {
            if (i % 2) {
              imageContainer.style.setProperty('top', `-${(image.clientHeight - el.clientHeight)}px`);
            } else {
              imageContainer.style.setProperty('top', '0px');
            }

            i++;
          }, parseInt(transitionSpeed.replace("ms","")) * 3);
        }
      } else {
        imageContainer.style.removeProperty('transition-duration');
        imageContainer.style.removeProperty('top');
        clearInterval(interval);
      }

    });


    // reset on resize
    window.addEventListener("resize", function() {
      imageContainer.style.removeProperty('transition-duration');
      imageContainer.style.removeProperty('top');
      clearInterval(interval);
    });
  }


}


export function bindPhoneScroll() {
  return [...document.querySelectorAll("[data-phone-scroll]")].map((el) => PhoneScroll(el));
}