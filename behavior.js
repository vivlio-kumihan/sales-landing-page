// // // #1
// // // 要素#yellowへアニメーションをかける。
// // // 枠内の端まで3秒かけて転がる。
// // gsap.to('#yellow', {
// //   x: 550,
// //   rotation: 360,
// //   duration: 3
// // })

// // // #2
// // // スクロールしたら転がる。
// // // 要素#yellowに対して、
// // // スクロールをして要素#yellowがスクリーンに
// // // かかったタイミングをきっかけにアニメーションをする。
// // gsap.to('#yellow', {
// //   scrollTrigger: '#yellow',
// //   x: 550,
// //   rotation: 360,
// //   duration: 3
// // })

// // // #3
// // // toggleActionsを設置する。
// // // 属性値は、#2と同じ動きを指定している。
// // gsap.to('#yellow', {
// //   scrollTrigger: {
// //     trigger: '#yellow',
// //     toggleActions: 'play none none none'
// //   },
// //   x: 550,
// //   rotation: 360,
// //   duration: 3
// // })

// // #4
// // 属性値は、
// //   play
// //   pause
// //   resume
// //   reverse
// //   restart
// //   reset
// //   complete
// //   none

// // // restart
// // // 要素がスクリーンへ現れてplay。
// // // 要素をスクリーン『下』へ追いやってから。（『上へ』は作動しない。）
// // // 再度スクリーン内に入れると始めからアニメーションを再開する。
// // gsap.to('#yellow', {
// //   scrollTrigger: {
// //     trigger: '#yellow',
// //     toggleActions: 'restart none none none'
// //   },
// //   x: 550,
// //   rotation: 360,
// //   duration: 3
// // })

// // // pause
// // // playさせている状態から、スクリーン『上へ』追いやって一旦停止。
// // // スクリーン『下へ』戻して再度登場させると最初から動いて再開。
// // gsap.to('#yellow', {
// //   scrollTrigger: {
// //     trigger: '#yellow',
// //     toggleActions: 'restart pause none none'
// //   },
// //   x: 550,
// //   rotation: 360,
// //   duration: 3
// // })

// // // resume
// // // playさせている状態から、スクリーン『上へ』追いやって一旦停止。
// // // スクリーン内に戻すとアニメーションを再開する。
// // // スクリーン『下へ』追いやって最初から。
// // gsap.to('#yellow', {
// //   scrollTrigger: {
// //     trigger: '#yellow',
// //     toggleActions: 'restart pause resume none'
// //   },
// //   x: 550,
// //   rotation: 360,
// //   duration: 3
// // })

// // // reverse
// // // playさせている状態から、スクリーン『上へ』追いやって一旦停止。
// // // スクリーン内に戻すと元の位置まで戻る。
// // // スクリーン『下へ』追いやって最初から。
// // gsap.to('#yellow', {
// //   scrollTrigger: {
// //     trigger: '#yellow',
// //     toggleActions: 'restart pause reverse none'
// //   },
// //   x: 550,
// //   rotation: 360,
// //   duration: 3
// // })

// // // pause
// // // アニメーションを完結させてスクリーン『上へ』追いやる。
// // // スクリーン内に戻すと元の位置へ戻っていくアニメーションを開始する。
// // // ただし、組み合わせを違えたら効果はない。要注意。
// // gsap.to('#yellow', {
// //   scrollTrigger: {
// //     trigger: '#yellow',
// //     toggleActions: 'restart pause reverse pause'
// //   },
// //   x: 550,
// //   rotation: 360,
// //   duration: 3
// // })

// // // #5
// // // startとデフォルトの隠れend
// // gsap.to('#yellow', {
// //   scrollTrigger: {
// //     trigger: '#yellow',
// //     start: 'top center',
// //     // // defaultで効いているendの値は、
// //     // // end: 'bottom top',

// //     // // endのスイッチが入ったら一旦停止
// //     // toggleActions: 'restart pause none none',

// //     // // endのスイッチが入ったら一旦停止、
// //     // // endをスイッチ・バックしたら残りの動作を終了までやる。
// //     // toggleActions: 'restart pause resume none',

// //     // startのスイッチを入れたら動き出し、
// //     // startをスイッチバックしたら一旦停止、
// //     // 再度startのスイッチを入れたら最初から動作をやり直す。
// //     // endのスイッチが入ったら一旦停止、
// //     // endをスイッチ・バックしたら元に戻る動作を再開する。
// //     toggleActions: 'restart pause reverse pause',
// //     markers: true
// //   },
// //   x: 550,
// //   rotation: 360,
// //   duration: 3
// // })

// // // #6
// // // start, end, endTrigger, end
// // // 上の動作の理屈がわかったら、endトリガーの位置を変えることで
// // // アニメーションの仕掛け方が柔軟になるという話。
// // gsap.to('#blue', {
// //   scrollTrigger: {
// //     trigger: '#green',
// //     start: 'top 10%',
// //     endTrigger: '#yellow',
// //     end: 'top 70%',
// //     toggleActions: 'restart pause resume pause',
// //     markers: true
// //   },
// //   x: 550,
// //   rotation: 360,
// //   duration: 3
// // })

// // // #7
// // // scrub
// // // 属性値のデフォルトは真偽値、true
// // // 秒数を入れると余韻のある動きをする。
// // gsap.to('#blue', {
// //   scrollTrigger: {
// //     trigger: '#blue',
// //     start: 'top center',
// //     end: 'top 300px',
// //     // 属性値に時間を与えたら余韻で2秒間動く。
// //     scrub: 2,
// //     markers: true
// //   },
// //   x: 550,
// //   rotation: 360,
// //   duration: 3
// // })

// #8
// scrubで影追いの効果を作ってみる。
// HTMLの構造をpositionでやったが失敗。
// wrapperで囲み、positionで構造を作る。
gsap.to('#inner', {
  scrollTrigger: {
    trigger: '#inner',
    start: 'top center',
    // scroll-startよりscroll-endが上に設定するのが肝
    end: 'bottom 200px',
    scrub: true,
    pin: 1,
    markers: true
  },
  x: 550,
  rotation: 360,
  duration: 3,
})

gsap.to('#shadow', {
  scrollTrigger: {
    trigger: '#inner',
    start: 'top center',
    end: 'bottom 200px',
    scrub: 2,
    markers: true
  },
  x: 550,
  rotation: 360,
  duration: 3,
})

// // // #9
// // // timelineを入れてみる。
// // const tl = gsap.timeline({
// //   scrollTrigger: {
// //     trigger: '#purple',
// //     start: 'top center',
// //     end: 'bottom 200px',
// //     scrub: true,
// //     markers: true
// //   }
// // })

// // tl.to('#purple', {
// //   x: 550,
// //   rotation: 360,
// //   duration: 3 })
// //   .to('#purple', { y: 200 })
// //   .to('#purple', { x: 0, rotation: -180, backgroundColor: 'red' })
// //   .to('#purple', { y: 0 })