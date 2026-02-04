import React, { useEffect, useRef, useState } from "react";
import Layout from "/src/components/Layout";
import * as style from "./style.module.css";
import "../styles/base.css";
import "../setupJquery";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TopVisual from "/src/components/TopVisual";
import Slider from "/src/components/Slider";
import FadeIn from "/src/components/FadeIn";
import kv from "/src/images/roots02.jpg";
import roots02 from "/src/images/roots02.jpg";
import SlideNew from "/src/components/SlideNew";
import Vertical from "/src/components/Vertical";
import SlowTextAnime from "/src/components/SlowTextAnime";
import Instagram from "/src/components/Instagram";
import ButtomContact from "/src/components/ButtomContact";
import topvideo from "/src/images/movie/free.mp4";
import img01 from "/src/images/top/code1.jpg";
import img02 from "/src/images/top/code2.jpg";
import img03 from "/src/images/top/img01.jpg";
import img04 from "/src/images/roots01.jpg";
import img05 from "/src/images/roots02.jpg";
import img06 from "/src/images/roots02.jpg";

const Page = () => {

  return (
    <Layout>
      <div className={style.topvisual}>
        <div className={style.toptitle}>
          {/* <h2>Roots</h2> */}
          <h2>Title</h2>
        </div>
        <figure className={style.topkv}>
          <img src={kv} className={style.kv} />
        </figure>
      </div>

      <section className={style.Visualsec}>
        <div className={style.photobox}>
          <h2>Visual</h2>
          <p>
            シンプルでありながら高級感があり
            <br />
            男性女性問わず着こなしやすく
            <br />
            他のアイテムとも合わせやすいデザインを追求しています。
          </p>
        </div>
      </section>

      {/* <Slider/> */}
      {/* <div className={style.imgslide}>
        <div className={style.slidesize}>
          <SlideNew />
        </div>
      </div> */}

      <section className={style.verticalSec}>
  <SlowTextAnime triggerClass={style.verticalSec}>
    <ul>
      <li>
        <p>都市の静けさに宿る空気感や、</p>
        <p>日常の形の中に潜む緊張と緩和を掬い取り、</p>
        <p>新しい装いとして再構築すること。</p>
      </li>
      <li>
        <p>まっすぐなもの。</p>
        <p>余白を感じるもの。</p>
        <p>削ぎ落とされたもの。</p>
      </li>
      <li>
        <p>控えめな強さこそ、</p>
        <p>最も個性を放つと信じ、</p>
        <p>盆栽の精神を纏ったミニマルウェアをつくります。</p>
      </li>
    </ul>
  </SlowTextAnime>
</section>


      {/* <section className={style.topSec}>
        <div className={style.videoBox}>
          <video
            src={topvideo}
            autoPlay
            loop
            muted
            playsInline
            id="background-video"
          ></video>
        </div>
        <div className={style.txt}>
        <p>
            「デザイン」と<br />　　　　　　「生地」の<br />　　　　　　　　　　こだわり
          </p>
        </div> */}
      {/* <div className={style.txt2}>
          <p>
            デザインと生地選びはすべて自分で手掛けていますが<br />
            仕上げの工程には熟練の技術を持つ職人が携わり<br />
            細部にまでこだわった仕上がりを実現しています。
          </p>
        </div>
        <div className={style.txt3}>
          <p>
            「Roots」は、これまでの経験を根っこに
            <br />
            そこから新たな花を咲かせるような想いを込めて
            <br />
            立ち上げたブランドです。
          </p>
        </div> */}
      {/* </section> */}
      <Vertical />
      <Instagram />
      <ButtomContact />
    </Layout>
  );
};

export default Page;
