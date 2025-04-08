class Main {
  #observers = [];

  constructor() {
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
      new ScrollObserver(".cover-slide", this.#inviewAnimation),
      new ScrollObserver(".appear", this.#inviewAnimation),
      new ScrollObserver(".tween-animate-title", this.#textAnimation),
    );
    console.log(this.#observers);
  }

  #textAnimation(el, inview) {
    if (inview) {
      const ta = new TweenTextAnimation(el);
      ta.animate();
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
