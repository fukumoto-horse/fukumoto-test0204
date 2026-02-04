import React, { useEffect, useRef, useState } from "react";
import Layout from "/src/components/Layout";
import * as style from "./style.module.css";
import "../../styles/base.css";
import ButtomContact from "/src/components/ButtomContact";
import TopVisual from "/src/components/TopVisual";
import FadeIn from "/src/components/FadeIn";

import { motion } from "framer-motion";
import roots01 from "/src/images/roots01.jpg";
import roots02 from "/src/images/roots02.jpg";
import topvideo from "/src/images/movie/free.mp4";
import code01 from "/src/images/top/code1.jpg";
import code02 from "/src/images/top/code2.jpg";
import code03 from "/src/images/top/img01.jpg";
import code04 from "/src/images/top/img02.jpg";
import code05 from "/src/images/top/img03.jpg";
import { figure, img } from "framer-motion/client";

export default function Home() {
  const code = [{ img: code03 }, { img: code04 }, { img: code05 }];

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.4,
        ease: "easeOut",
      },
    },
  };
  return (
    <Layout>
      <TopVisual kv={roots02} />
      <div className={style.vs_bk}>
        <section className={style.Visualsec}>
          <p>
            ここにテキストがはいりますここにテキストがはいります
            <br />
            ここにテキストがはいります
            <br />
            ここにテキストがはいりました
          </p>
        </section>

        <section className={style.codeSec}>
          <div className={style.codeTitle}>
            <div className={style.enBox}>
              <span className={style.en}>Look Book</span>
              <span className={style.en2}>Look Book</span>
            </div>
            <h3>コーデ紹介</h3>
          </div>
          <div className={style.codeOuter}>
            <FadeIn>
              <div className={`${style.codeBox} ${style.codeBox01}`}>
                <figure>
                  <img src={code01} alt="" />
                </figure>
                <FadeIn custom={{ delay: 0.3, x: 70, y: 0 }}>
                  <div className={style.texyBox}>
                    <span className={style.number}>01</span>
                    <h4>Sweatshirt</h4>
                    <p>
                      ここにテキストがはいりますここにテキストがはいります
                      <br />
                      ここにテキストがはいります
                    </p>
                  </div>
                </FadeIn>
                <p className={style.right_en}>
                  Please pour the sun on my forehead Stay cool, open the window
                  <br />
                  and say hi That's how we always say good morning It's a blue
                  <br />
                  morning, ashio and toteto
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className={`${style.codeBox} ${style.codeBox02}`}>
                <figure>
                  <img src={code02} alt="" />
                </figure>
                <FadeIn custom={{ delay: 0.3, x: -70, y: 0 }}>
                  <div className={style.texyBox}>
                    <span className={style.number}>02</span>
                    <h4>Trackjacket</h4>
                    <p>
                      ここにテキストがはいりますここにテキストがはいります
                      <br />
                      ここにテキストがはいります
                    </p>
                  </div>
                </FadeIn>
              </div>
            </FadeIn>

            <div className={style.codeBox03}>
              <p className={style.left_en}>
                It's a blue morning,ashio and tototeto <br />I stroll along the
                bank
              </p>

              <motion.div
                className={style.imgGrid}
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.div
                  className={`${style.gridItem} ${style.gridItem01}`}
                  variants={item}
                >
                  <img src={code03} alt="" />
                  <p className={style.price}>
                    pullover
                    <br />
                    ￥4,000-
                  </p>
                </motion.div>

                <motion.div
                  className={`${style.gridItem} ${style.gridItem02}`}
                  variants={item}
                >
                  <img src={code04} alt="" />
                  <p className={style.price}>
                    zip up
                    <br />
                    ￥3,000-
                  </p>
                </motion.div>

                <motion.div
                  className={`${style.gridItem} ${style.gridItem03}`}
                  variants={item}
                >
                  <img src={code05} alt="" />
                  <p className={style.price}>
                    half zip
                    <br />
                    ￥5,000-
                  </p>
                </motion.div>
              </motion.div>

              <FadeIn custom={{ delay: 0.3, x: 70, y: 0 }}>
                <div className={style.textBox}>
                  <span className={style.number}>03</span>
                  <h4>hoodie</h4>
                  <p>
                    ここにテキストがはいります
                    <br />
                    ここにテキストがはいります
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </div>
      <ButtomContact />
    </Layout>
  );
}
