import React, { useEffect, useRef, useState } from "react";
import * as style from "./style.module.css";
import img01 from "/src/images/top/code1.jpg";
import img02 from "/src/images/top/code2.jpg";
import img03 from "/src/images/roots02.jpg";
import img04 from "/src/images/roots02.jpg";

const imagesGroup1 = [img01, img02, img03, img04];

const Component = () => {
  const scrollRef1 = useRef(null);
  const [progress1, setProgress1] = useState(0);

  const isLockedRef = useRef(false);
  const lockTimeout = useRef(null);

  useEffect(() => {
    const section = scrollRef1.current;
    if (!section) return;

    const scrollContainer = section.querySelector(`.${style.horizontal_scroll}`);
    const images = scrollContainer.querySelectorAll("img");
    const scrollRange = window.innerHeight * imagesGroup1.length;
    const offsetTop = section.offsetTop;

    const handleScroll = () => {
      let y = window.scrollY - offsetTop;
      y = Math.max(0, Math.min(y, scrollRange));

      if (isLockedRef.current) {

        window.scrollTo(0, offsetTop + y);
        return;
      }

      const percent = y / scrollRange;
      scrollContainer.style.transform = `translate3d(${
        -percent * 100 * imagesGroup1.length
      }vw, 0, 0)`;

      setProgress1(percent);

   
      images.forEach((img) => {
        const rect = img.getBoundingClientRect();
        const center = window.innerWidth / 2;
        const distanceFromCenter = Math.abs(rect.left + rect.width / 2 - center);
        const maxDistance = window.innerWidth / 2;
        const ratio = 1 - Math.min(distanceFromCenter / maxDistance, 1);
        const scale = 1 + ratio * 0.1;
        img.style.transform = `scale(${scale})`;
        img.style.transition = "transform 0.2s ease-out";
      });

      // 中央で停止（ロック）演出
      // const currentIndex = Math.min(
      //   imagesGroup1.length - 1,
      //   Math.round(percent * imagesGroup1.length)
      // );
      // const targetImage = scrollContainer.querySelectorAll(`.${style.imageWrapper}`)[currentIndex];
      // if (targetImage) {
      //   const rect = targetImage.getBoundingClientRect();
      //   const center = window.innerWidth / 2;
      //   const diff = Math.abs(rect.left + rect.width / 2 - center);

      //   if (diff < 20 && !isLockedRef.current) {
      //     isLockedRef.current = true;
      //     lockTimeout.current = setTimeout(() => {
      //       isLockedRef.current = false;
      //     }, 800);
      //   }
      // }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(lockTimeout.current);
    };
  }, []);

  return (
    <section className={style.photoSec}>
      <div
        className={style.scroll_container}
        ref={scrollRef1}
        style={{ height: `${imagesGroup1.length * 100}vh` }}
      >
        <div className={style.sticky_wrap}>
          <div className={style.dotIndicator}>
            {imagesGroup1.map((_, i) => (
              <span
                key={i}
                className={`${style.dot} ${
                  Math.floor(progress1 * imagesGroup1.length + 0.6) === i
                    ? style.active
                    : ""
                }`}
              />
            ))}
          </div>
          <div
            className={style.horizontal_scroll}
            style={{ width: `${imagesGroup1.length * 100}vw` }}
          >
            {imagesGroup1.map((img, index) => (
              <div key={index} className={style.imageWrapper}>
                <img src={img} alt={`group1-img-${index + 1}`} />
                <p className={style.imageText}>実績 {index + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component;