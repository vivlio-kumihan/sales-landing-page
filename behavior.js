ScrollTrigger.create({
  trigger: ".box",
  // 見た目がわかりやすいので、まずobjectのtopとしておいて、スクリーンの高さの何%の位置かを決める。
  start: "top 75%",
  endTrigger: "footer",
  // ここでくっついて行く位置を決める。
  // footerのtopで、次の値は見ながら適宜決める。
  end: "top 90.5%",
  pin: true,
  pinSpacing: false,
  // markers: true
})

gsap.to('#box', .3, {
  opacity: 1,
  ease: 'power1.inOut',
  scrollTrigger: {
    trigger: '#trigger',
    start: '0 50%',
    markers: true
  }
})