class Main {
  #observers = [];

  constructor() {
    // this.hero = new HeroSlider(".swiper");
    this.sides = document.querySelectorAll(".side");
    this.#init();
  }

  #init() {
    Pace.on("done", this.#scrollInit.bind(this));
  }

  destroy() {
    this.#observers.forEach((so) => so.destroy());
  }

  #scrollInit() {
    this.#observers.push(
      new ScrollObserver("#main-content", this.#sideAnimation.bind(this), {
        once: false,
        rootMargin: "-300px 0px",
      }),
      new ScrollObserver(".swiper", this.#toggleSlideAnimation.bind(this), {
        once: false,
      }),
      new ScrollObserver(".cover-slide", this.#inviewAnimation),
      new ScrollObserver(".appear", this.#inviewAnimation),
      new ScrollObserver(".tween-animate-title", this.#textAnimation),
    );
    console.log(this.#observers);
  }

  #toggleSlideAnimation(el, inview) {
    if (inview) {
      this.hero.start();
    } else {
      this.hero.stop();
    }
  }

  #textAnimation(el, inview) {
    if (inview) {
      const ta = new TweenTextAnimation(el);
      ta.animate();
    }
  }

  #sideAnimation(el, inview) {
    if (inview) {
      this.sides.forEach((side) => side.classList.add("inview"));
    } else {
      this.sides.forEach((side) => side.classList.remove("inview"));
    }
  }

  #inviewAnimation(el, inview) {
    if (inview) {
      el.classList.add("inview");
    } else {
      el.classList.remove("inview");
    }
  }
}

const main = new Main();
