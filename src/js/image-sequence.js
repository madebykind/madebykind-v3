// ImageSequence.js

const randomDuration = () => Math.floor(Math.random() * 74) + 50;

class ImageSequence {
  constructor(el) {
    this.el = el;
    this.frames = [...el.querySelectorAll(':scope > div')];
    this.isAnimating = false;
    this.wasInView = false;

    if (this.frames.length < 2) return;

    this.observer = new MutationObserver(() => this.onClassChange());
    this.observer.observe(this.el, { attributes: true, attributeFilter: ['class'] });

    document.addEventListener('scroll', () => this.onScroll());

    this.reset();
  }

  onClassChange() {
    const isInView = this.el.classList.contains(this.el.dataset.classOnView);

    if (isInView && !this.wasInView) {
      this.wasInView = true;
      if (!this.isAnimating) this.animate();
    }
  }

  onScroll() {
    const bounding = this.el.getBoundingClientRect();
    const fullyOut = bounding.bottom <= 0 || bounding.top >= window.innerHeight;

    if (fullyOut && this.wasInView) {
      this.wasInView = false;
      this.reset();
    }
  }

  reset() {
    this.isAnimating = false;
    this.frames.forEach((frame, i) => {
      frame.style.opacity = i === 0 ? '1' : '0';
    });
  }

  animate() {
    this.isAnimating = true;

    const sequence = [
      { index: 0, duration: 500 },
      ...this.frames.slice(1).map((_, i) => ({
        index: i + 1,
        duration: i < this.frames.length - 2 ? randomDuration() : null,
      })),
    ];

    let delay = 0;

    sequence.forEach(({ index, duration }) => {
      setTimeout(() => {
        this.frames.forEach((frame, i) => {
          frame.style.opacity = i === index ? '1' : '0';
        });

        if (index === this.frames.length - 1) {
          this.isAnimating = false;
        }
      }, delay);

      if (duration !== null) delay += duration;
    });
  }
}

export function bindImageSequence() {
  return [...document.querySelectorAll('[data-image-sequence]')].map(
    (el) => new ImageSequence(el)
  );
}