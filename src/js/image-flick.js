function randomNum(a, b, x) {
  let num = Math.floor(Math.random() * (b - a + 1) ) + a;
  if (num != x) {
    return num;
  } else {
    return randomNum(a, b, x);
  }
}

function changeImage(images, speedMin, speedMax) {

  if (window.innerWidth > 767) {
    const interval = setInterval(function() {

      // swap any two images at random
      let rand1 = randomNum(0, images.length-1, -1);
      let rand2 = randomNum(0, images.length-1, rand1);
      let el1 = images[rand1];
      let el2 = images[rand2];
      let pic1 = el1.querySelector('picture');
      let pic2 = el2.querySelector('picture');

      el1.appendChild(pic2);
      el2.appendChild(pic1)

      clearInterval(interval);
      changeImage(images, speedMin, speedMax);

    }, randomNum(speedMin, speedMax, 0));
  }


}

function ImageFlick(el) {
  const images = el.querySelectorAll("[data-image-flick-item]");

  changeImage(images, 250, 750);

  window.addEventListener("resize", function() {
    changeImage(images, 250, 750);
  });


}

export function bindImageFlick() {
  return [...document.querySelectorAll("[data-image-flick]")].map((el) => ImageFlick(el));
}
