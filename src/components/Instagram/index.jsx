import React, { useEffect, useRef, useState } from "react";
import * as style from "./style.module.css";
import FadeIn from "/src/components/FadeIn";
import MainButton from "/src/components/MainButton";
import img01 from "/src/images/top/code1.jpg";
import img02 from "/src/images/top/code2.jpg";
import img03 from "/src/images/top/img01.jpg";
import img04 from "/src/images/top/img02.jpg";
import img05 from "/src/images/top/img03.jpg";
import img06 from "/src/images/top/code1.jpg";
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
    <section ref={addToRefs} className={style.instaSec}>
      <h3>INSTAGRAM</h3>
      <ul className={style.postFlex}>
        <li>
          <a href="">
            <img src={img01} alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={img02} alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={img03} alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={img04} alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={img05} alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={img06} alt="" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Component;
