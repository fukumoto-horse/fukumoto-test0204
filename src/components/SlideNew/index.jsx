import React, { useEffect } from "react";
import * as style from "./style.module.css";
import img01 from "/src/images/top/code1.jpg";
import img02 from "/src/images/top/code2.jpg";
import img03 from "/src/images/top/img01.jpg";
import img04 from "/src/images/top/img02.jpg";

const ScrollSlider = () => {
  useEffect(() => {
    const stickySections = [...document.querySelectorAll(`.${style.sticky_wrap}`)];
    const handleScroll = () => {
      stickySections.forEach((section) => {
        const offsetTop = section.parentElement.offsetTop;
        const scrollSection = section.querySelector(`.${style.horizontal_scroll}`);
        let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
        percentage = Math.max(0, Math.min(300, percentage));
        scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;

        // ★ 拡大アニメーション処理
        const slides = scrollSection.querySelectorAll(`.${style.scroll_contents}`);
        slides.forEach((slide) => {
          const rect = slide.getBoundingClientRect();
          const center = rect.left + rect.width / 2;
          const distanceToCenter = Math.abs(window.innerWidth / 2 - center);
          const scale = Math.max(0.7, 1 - distanceToCenter / (window.innerWidth / 2) * 0.1);
          slide.style.transform = `scale(${scale})`;
        });
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const slide = [
    { img: img01, text: "style01" },
    { img: img02, text: "style02" },
    { img: img03, text: "style03" },
    { img: img04, text: "style04" },
  ];

  return (
    <div className={style.scroll_container}>
      <div className={style.sticky_wrap}>
        <div className={style.horizontal_scroll}>
          {slide.map((slide, index) => (
            <div key={index} className={style.scroll_contents}>
              <figure>
                <img src={slide.img} alt={`Slide ${index + 1}`} className={style.image} />
              </figure>
              <p className={style.imagetext}>{slide.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollSlider;
