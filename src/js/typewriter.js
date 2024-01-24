function TypeWriter(el) {
  const letters = el.querySelectorAll("path");
  let bounding = el.getBoundingClientRect();
  let animated = false;
  let i = 0;
  const speed = 100;

  letters.forEach(function(e) {
    e.style.opacity = 0;
  });

  if (bounding.top >= 0  && bounding.bottom <= window.innerHeight) {
    if (!animated) {
      animated = true;
      const interval = setInterval(function() {

        letters[i].style.opacity = 1;
        i++;

        if (i == letters.length) {
          clearInterval(interval);
        }

      }, speed);
    }
  }

  document.addEventListener("scroll", function() {
    bounding = el.getBoundingClientRect();

    if (bounding.top >= 0  && bounding.bottom <= window.innerHeight) {
      if (!animated) {
        animated = true;
        const interval = setInterval(function() {

          letters[i].style.opacity = 1;
          i++;

          if (i == letters.length) {
            clearInterval(interval);
          }

        }, speed);
      }
    }

  });


}


export function bindTypeWriter() {
  return [...document.querySelectorAll("[data-typewriter]")].map((el) => TypeWriter(el));
}