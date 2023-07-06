function HeroHeight(el) {
  let calcString = el.dataset.heroHeight;
  const reductions = document.querySelectorAll("[data-hero-height-reduce]");
  const additions = document.querySelectorAll("[data-hero-height-add]");


  reductions.forEach(function(el, i) {
    
    calcString += ` - ${el.offsetHeight}px`;
  });
  
  additions.forEach(function(el, i) {
    calcString += ` + ${el.offsetHeight}px`;
  });

  el.style.setProperty('height', `calc(${calcString})`);

}

export function bindHeroHeight() {
  return [...document.querySelectorAll("[data-hero-height]")].map((el) => HeroHeight(el));
}
