let impactInterval;
const imageContainer = document.querySelector("[data-impact-image-container]");

function getImage(index, el) {
  let image = new Image();
  const path = el.dataset["impactImage-"+index]
  image.src = getImageSrc(path);
  console.log(getImageSrc(path));
  image.alt = el.dataset["impactAlt-"+index];
  image.classList.add(...["w-full","h-full","object-cover"]);
  return image;
}

function getImageSrc(path) {
  return path.replace("images", "https://madebykind.imgix.net") + "?w=720&ar=4:3&auto=format&fit=crop";
}

function showImage(index, el) {
  imageContainer.prepend(getImage(index, el));

}

function removeImages() {
  imageContainer.querySelectorAll("img").forEach(function(e) {
    e.remove();
  });
}

function showCaption() {
  imageContainer.querySelector("figcaption").classList.remove('hidden');
}

function hideCaption() {
  imageContainer.querySelector("figcaption").classList.add('hidden');
}

function updateCaptionLogo(el) {
  const caption = el.dataset.impactCaption;
  const logo = el.dataset.impactIcon;
  imageContainer.querySelector("[data-impact-caption]").innerHTML = caption;
  imageContainer.querySelector("[data-impact-icon] use").setAttribute("xlink:href", logo);
  showCaption();
}

function initFlicker(el) {
  const imageCount = parseFloat(el.dataset.impactImagesCount);
  let i = 2

  // show first image
    removeImages();
    showImage(1, el);

    // update caption and logo
    updateCaptionLogo(el);

    // load other images
    for (let x = 2; x <= imageCount; x++) {
      let image = getImage(x, el);
    }
    
    // set interval for other images
    impactInterval = setInterval(function() {
      removeImages();
      showImage(i, el);
      if (i < imageCount) {
        i++;
      } else {
        i = 1;
      }
    }, 750);

}

function ImpactImage(el) {

  // load first image for each
  const firstImage = getImage(1, el);

  // on mouseenter and focus - init the flicker
  el.addEventListener("mouseenter", function(e) {
    initFlicker(el);
  });

  el.addEventListener("focus", function(e) {
    initFlicker(el);
  });

  // on mouseleave and blur, hide image container and stop flicking
  el.addEventListener("mouseleave", function(e) {
    clearInterval(impactInterval);
    removeImages();
    hideCaption();
  });

  el.addEventListener("blur", function(e) {
    clearInterval(impactInterval);
    removeImages();
    hideCaption();
  });

}

export function bindImpactImage() {
  return [...document.querySelectorAll("[data-impact-flicker]")].map((el) => ImpactImage(el));
}
