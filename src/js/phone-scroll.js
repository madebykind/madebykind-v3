const transitionSpeed = '5000ms';

function inView(bounding) {  
  return (bounding.top >= 0  && bounding.bottom <= window.innerHeight);
}

function PhoneScroll(el) {
  const imageContainer = el.querySelector("picture");
  const image = imageContainer.querySelector('img');
  let bounding;



  // on scroll, check if in view
  window.addEventListener("scrollend", function() {
    bounding = el.getBoundingClientRect();

    if (inView(bounding)) {
      console.log('in view');
      imageContainer.style.setProperty('transition-duration', transitionSpeed);
      imageContainer.style.setProperty('top', `-${(image.clientHeight - el.clientHeight)}px`);
    } else {
      console.log('out of view');
      imageContainer.style.removeProperty('transition-duration');
      imageContainer.style.removeProperty('top');
    }

  })


  // reset on resize
  window.addEventListener("resize", function() {
      imageContainer.style.removeProperty('transition-duration');
      imageContainer.style.removeProperty('top');
  });


}


export function bindPhoneScroll() {
  return [...document.querySelectorAll("[data-phone-scroll]")].map((el) => PhoneScroll(el));
}