// #01
// 前回のコミットでやっていることを復習
// トリガーになる要素に動きの初動の位置を与えるためには、
// スクリーンで見渡せる範囲に限定された親要素であることが必須。
// 見渡すことができない範囲にある終了のトリガーはendTriggerで指定できる。
// 頭が悪いのでうまく説明できない。とりあえずサンプルの動きを見てイメージできるようにする。
ScrollTrigger.create({
  trigger: '.pin-item.red',
  start: 'top 45%',
  endTrigger: '#container',
  end: 'bottom 60%',
  pin: true,
  // markers: true
})

// #02
// 普通のpin　その1
// 親要素の範囲内で動作をする。
ScrollTrigger.create({
  trigger: '#blue',
  start: 'top top',
  // 親要素の上辺から60%の地点でpinする。
  end: 'bottom 60%',
  pin: '.pin-item.blue',
  // markers: true
})

// 普通のpin　その2
ScrollTrigger.create({
  trigger: '#yellow',
  start: 'top 60%',
  // 親要素の上辺から300pxの地点でpinする。
  // なお、内容要素をposition: absoluteで作成している場合に
  // 上半分がオーバーする。サンプルを参照してイメージできるように。
  end: '+=300',
  pin: '.pin-item.yellow',
  // markers: true
})