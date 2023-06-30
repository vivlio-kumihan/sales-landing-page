const tlOne = gsap.timeline({
  defaults: {
    duration: 1,
    x: 600,
    ease: 'power4.inOut'
  }
})
const tlTwo = gsap.timeline({
  defaults: {
    duration: 1,
    x: 600,
    ease: 'power4.inOut'
  }
})

////////////////////////////////////////////////////////////

// // '+=1'
// // 設定する値に注意する。意味が違うので。
// // box.twoは、box.oneの動きが完了し『1秒経ってから』動く。
// // box.three, fourは、box.twoが終了してから動く。これ重要。
// tlOne.to('.box.one', {})
//   .to('.box.two', {}, '+=1')
//   .to('.box.three', {})
//   .to('.box.four', {})

// // '<2' === '+=1'
// // box.twoは、box.oneの動きが開始して『2秒経ってから』動く。
// // box.three, fourは、box.twoが終わってから動く。
// tlOne.to('.box.one', {})
//   .to('.box.two', {}, '<2')

// tlTwo.to('.box.three', {})
//   .to('.box.four', {}, '+=1')
//   .to('.box.five', {})
//   .to('.box.six', {})

////////////////////////////////////////////////////////////

// // '-=0.5'
// // box.twoは、box.oneの動きが完了する『0.5秒前から』動く。
// // box.three, fourは、box.twoが終わってから動く。
// tlOne.to('.box.one', {})
//   .to('.box.two', {}, '-=0.5')
//   .to('.box.three', {})
//   .to('.box.four', {})

// // '>-0.5' === '-=0.5'
// // box.twoは、box.oneの動きが完了する『0.5秒前から』動く。
// // box.three, fourは、box.twoが終わってから動く。
// tlOne.to('.box.one', {})
//   .to('.box.two', {}, '>-0.8')

// tlTwo.to('.box.three', {})
//   .to('.box.four', {}, '-=0.8')
//   .to('.box.five', {})
//   .to('.box.six', {})

////////////////////////////////////////////////////////////

// // 疑問？
// // パーセンテージに基づく複合文字列。
// // プレフィックス "+=" または "-=" の直後に続く場合、
// // パーセンテージは挿入されるアニメーションの総時間に基づく。

// // "<"または">"の直後に続く場合、
// // 直前のアニメーションの合計継続時間に基づく。
// // 注意：合計の継続時間には、リピート／ヨーヨーも含まれる。

// // と公式に書いてあったが違いがないのは何故か？

// tlOne.to('.box.one', { delay: 2 })
//   .to('.box.two', {}, '>80%')

// tlTwo.to('.box.three', { delay: 2 })
//   .to('.box.four', {}, '+=80%')
//   .to('.box.five', {})
//   .to('.box.six', {})

////////////////////////////////////////////////////////////

// ラベル機能
// 任意の名称のラベルに属性値を入れるだけ。
tlOne
  .to('.box.one', {})
  .to('.box.two', {}, 'thisLabel')
  .to('.box.three', {})
  .to('.box.four', {})
  .to('.box.five', {})
  .to('.box.six', {}, 'thisLabel+=0.5')