class ImageSlider {
  constructor(el) {
    this.el = el;
    this.frames = [...el.querySelectorAll(':scope > div')];
    this.current = 0;
    this.isAnimating = false;
    this.wasInView = false;
    this.loopTimer = null;

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
      this.start();
    }
  }

  onScroll() {
    const bounding = this.el.getBoundingClientRect();
    const fullyOut = bounding.bottom <= 0 || bounding.top >= window.innerHeight;

    if (fullyOut && this.wasInView) {
      this.wasInView = false;
      this.stop();
      this.reset();
    }
  }

  reset() {
    this.current = 0;
    this.frames.forEach((frame, i) => {
      frame.style.transition = 'none';
      frame.style.transform = i === 0 ? 'translateX(0%)' : 'translateX(100%)';
    });
  }

  start() {
    this.scheduleNext();
  }

  stop() {
    clearTimeout(this.loopTimer);
    this.loopTimer = null;
    this.isAnimating = false;
  }

  scheduleNext() {
    this.loopTimer = setTimeout(() => this.slideNext(), 500);
  }

  slideNext() {
    const next = (this.current + 1) % this.frames.length;

    this.frames[next].style.transition = 'none';
    this.frames[next].style.transform = 'translateX(100%)';

    this.frames[next].getBoundingClientRect();

    this.frames[next].style.transition = 'transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1)';
    this.frames[next].style.transform = 'translateX(0%)';

    this.frames[this.current].style.transition = 'transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1)';
    this.frames[this.current].style.transform = 'translateX(-100%)';

    this.current = next;

    this.loopTimer = setTimeout(() => this.scheduleNext(), 300);
  }
}

export function bindImageSlider() {
  return [...document.querySelectorAll('[data-image-slider]')].map(
    (el) => new ImageSlider(el)
  );
}