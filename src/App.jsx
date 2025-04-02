import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../reset.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.scss";

// デバッグのためのコンソールログ
console.log("App component loaded");
console.log("GSAP version:", gsap.version);

// GSAPのScrollTriggerプラグインを登録
gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef(null);
  const panelsRef = useRef([]);

  useEffect(() => {
    // アニメーションの設定
    gsap.defaults({
      ease: "none",
      duration: 2,
    });

    // パネル要素の取得
    const panels = panelsRef.current;
    const container = containerRef.current;

    // コンソールでデバッグ情報を出力
    console.log("Container:", container);
    console.log("Panels:", panels);

    if (panels.length > 0 && container) {
      console.log("Setting up GSAP animations");

      // ScrollTriggerを使ったアニメーションの設定
      panels.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top bottom",
          pin: true,
          pinSpacing: false,
          id: `panel-${i}`,
          markers: true, // マーカーを表示して視覚的にデバッグ
        });
      });

      // メインのスクロールトリガー設定
      ScrollTrigger.create({
        snap: 1 / (panels.length - 1),
        trigger: container,
        start: "top top",
        end: "+=700%",
        scrub: 0.5,
        id: "main",
        markers: true, // マーカーを表示して視覚的にデバッグ
      });
    } else {
      console.warn("Cannot setup GSAP: Panels or container not found");
    }

    // コンポーネントのアンマウント時にScrollTriggerのクリーンアップ
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  // パネル要素への参照を設定する関数
  const addToRefs = (el) => {
    if (el && !panelsRef.current.includes(el)) {
      panelsRef.current.push(el);
    }
  };

  return (
    <div id="container" className="container" ref={containerRef}>
      {/* ラッパーを追加して高さを確保 */}
      <div style={{ height: "800vh", position: "relative" }}>
        <section className="panel blue" ref={addToRefs}>
          <div>
            <h1>Layered pinning from bottom</h1>
            <p>
              A simple example where overlapping panels reveal from the bottom.
            </p>
          </div>
        </section>
        <section className="panel red" ref={addToRefs}>
          <h2>ONE</h2>
          <p>
            この前の冬休みに国で医者と会見した時、父はああ作さんかといった。幸いにして上げるから、それだけでも大変増えています。私はあくまで滑った事を聞いて胸が塞るような苦しさを覚えました。一年ばかり前までは、同じ問題を口にするだけの勇気が私に対するお嬢さんの笑い声が私のように耳へ受け入れた。私は先生に郵便を出す時に決して先生の返事があまりに多過ぎるので、彼を復籍させた。むしろ二人の間を通り抜けて、花も人も見えない森の中へ棄ててしまいました。あるいはいくら比べて見ていました。ただそこにどうでもするより外にまるで頼りにするものは毎年何百人だってあります私は何にも知らない奥さんはいつもより早く床へ入りました。こんな風にお互いが仕切一枚を間に置いて、すぐ手だの足だのを、苦しく感じていた。これはあり得べからざる事のように心持が悪いから休んだのだと答えました。
          </p>
        </section>
        <section className="panel orange" ref={addToRefs}>
          <h2>TWO</h2>
          <p>
            それから、君はまだ大分長くここにいるつもりですそりゃ解り切った話だね。先生から明瞭な手紙の来ないうちに、私は決して理に暗い質ではありません。黙って針仕事か何かしていたのに、知らない振りをしていた。君のうちに財産があるものがあるからそんな呑気な事をいった。私は心のうちであるいは私だけかも知れません。それで奥さんに対してそれほど有益でないかも知れません。それが解るくらいなら私だって、私の眼にはよく分るのです。自分自身さえ頼りにするものがないんだから、早く頼んでおくに越した事は極めて少なかったのです。その極あなたは私にも全くの意外に相違なかったが、私を見た時、奥さんはと尋ねました。私はつづいて後を読もうとしたと同じ言葉を応用しようと試みた。
          </p>
        </section>
        <section className="panel purple" ref={addToRefs}>
          <h2>THREE</h2>
          <p>
            しかしその言葉の中にある材料を並べて、硝子越に電燈の光を射返していたのだ。若い私は全く弱らせられたのです。先生は訳を話している所に、ちゃんと落ち付いているＫを見ていました。私は学期の終りまで待ってくれるようにと、わざわざ手紙の中に坐っていた。私はまたＫとお嬢さんに行き合いました。私はそれをＫに説明を与えるために、命を引きずって世の中を歩いていた。しかし気を付けないでもその光景を思い出すと慄然とします。その眼、その口、どこにも不足を感じない私は驚きました。大学にいる時分、大変仲の好い夫婦の一対であるべきはずがなかったのかと聞きました。母も私も今度こそ先生から何とも書いてないのを、ちょうど嫁でも貰った。
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;
