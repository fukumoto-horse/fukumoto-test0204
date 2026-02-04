import React, { useEffect, useRef, useState } from "react";
import * as style from "./style.module.css";
import FadeIn from "/src/components/FadeIn";
import MainButton from "/src/components/MainButton";
import img04 from "/src/images/roots01.jpg";
import logo from "/src/images/logo.png";
import topvideo from "/src/images/movie/free.mp4";
const Component = ({}) => {
  const sectionRefs = useRef([]);
  const [activeSections, setActiveSections] = useState([]);
  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <section ref={addToRefs} className={style.secondSec}>
      <div className={style.leftOuter}>
        <div className={style.leftFlex}>
          {/* <figure>
            <img src={img04} alt="" />
          </figure>
          <FadeIn>
            <h3>
              <span>価格は説明</span>
              <span className={style.text2}>作品は証明</span>
            </h3>
          </FadeIn> */}
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
        </div>
      </div>
      <div className={style.rightOuter}>
        {/* <figure>
          <img src={img04} alt="" />
        </figure> */}
        <h3>
          <span>テキストテキスト</span>
          <span className={style.text2}>テキストテキストテキスト</span>
        </h3>
        <div className={style.textBox}>
          <p>
            派手さより“完成度”。
            <br />
            選び抜いた黒と白だけで組み立てたストリートスタイルは、
            <br />
            余計な装飾を捨て、シルエットと質感の美しさだけを残した。
            <br />
            静かに主張し、強く魅せる。
            <br />
            モノクロストリートの本質をまとう、そんなブランド。
          </p>
          <div className={style.BtnBox}>
            <MainButton
              link="/"
              text="ご購入はこちら"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </div>
        <img src={logo} alt="" />
      </div>
    </section>
  );
};

export default Component;
