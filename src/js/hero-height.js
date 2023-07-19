function getCalcString(el, calcString) {
  const reductions = document.querySelectorAll("[data-hero-height-reduce]");
  const additions = document.querySelectorAll("[data-hero-height-add]");

  reductions.forEach(function(el, i) {
    calcString += ` - ${el.offsetHeight}px`;
  });
  
  additions.forEach(function(el, i) {
    calcString += ` + ${el.offsetHeight}px`;
  });

  return calcString;

}

function setCalcString(el, calcString) {
  el.style.setProperty('min-height', `calc(${calcString})`);
}

function HeroHeight(el) {
  let calcString = el.dataset.heroHeight;

  setCalcString(el, getCalcString(el, calcString));

  window.addEventListener("load", function() {
    setCalcString(el, getCalcString(el, calcString));
  });

  // window.addEventListener("resize", function() {
  //   setCalcString(el, getCalcString(el, calcString));
  // });

}

export function bindHeroHeight() {
  return [...document.querySelectorAll("[data-hero-height]")].map((el) => HeroHeight(el));
}
