// // スクロールすると上へ上へと下のコンテンツが重なっていく
// // コツは、endの書き方とpinSpacing: false
// // 中空で止まり続けるアンカーもサンプルとして作っている。

ScrollTrigger.create({
  trigger: 'main',
  start: 'top top',
  end: '52%',
  pin: '.info-anchor',
  markers: true
})

// ScrollTrigger.create({
//   trigger: '#blue',
//   start: 'top top',
//   end: '90%',
//   pin: '#blue',
//   pinSpacing: false,
//   // markers: true
// })

// ScrollTrigger.create({
//   trigger: '#green',
//   start: 'top top',
//   end: '90%',
//   pin: '#green',
//   pinSpacing: false,
//   // markers: true
// })

// ScrollTrigger.create({
//   trigger: '#orange',
//   start: 'top top',
//   end: '+=700',
//   pin: '#orange',
//   pinSpacing: false,
//   // markers: true
// })

ScrollTrigger.create({
  trigger: 'footer',
  start: 'top top',
  pin: 'footer',
  // markers: true
})

// 短くかく

gsap.utils.toArray('section').forEach((sec, idx) => {
  ScrollTrigger.create({
    trigger: sec,
    start: 'top top',
    pin: true,
    pinSpacing: false
  })
})