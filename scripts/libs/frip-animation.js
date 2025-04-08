gsap.defaults({
  ease: "none",
  duration: 2,
});

const tl = gsap.timeline();
tl.from(".call-to-action", { xPercent: 100 });
tl.from(".case-studies", { xPercent: -100 });
tl.from(".contact", { yPercent: -100 });

ScrollTrigger.create({
  animation: tl,
  trigger: ".frip-container",
  start: "top top",
  end: `+=${gsap.utils.toArray(".panel").length}000`,
  scrub: true,
  pin: true,
  anticipatePin: 1,
});