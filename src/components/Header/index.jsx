import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import * as style from "./style.module.css";
// import json from "/src/siteData.json"
// import { getPathFromTemplateType } from "/src/utils/getPathFromTemplateType"
import logo from "/src/images/logo.png";
import FadeIn from "/src/components/FadeIn";
import shop from "/src/images/shop.png";
import inst from "/src/images/instagram.png";
import img01 from "/src/images/top/code1.jpg";
import img02 from "/src/images/top/code2.jpg";
import img03 from "/src/images/top/img01.jpg";
import img04 from "/src/images/top/img02.jpg";
import img05 from "/src/images/roots02.jpg";
import img06 from "/src/images/roots02.jpg";

const Component = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const [hoverId, setHoverId] = useState("1");

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setIsScrolled(window.scrollY > 50);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <header className={style.header}>
      <div className={style.header_inner}>
        <h1>
          <Link to="/" className={style.logo}>
            <img src={logo} alt="Roots" />
          </Link>
        </h1>

        {/* 二本線ボタン */}
        <button
          className={`${style.hamburger} ${isOpen ? style.open : ""}`}
          onClick={toggleMenu}
          aria-label="メニューを開閉"
        >
          <span></span>
          <span></span>
        </button>
      </div>

      {/* スマホメニュー */}
      <div
        className={style.sp_menu}
        style={{
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
          transition: "opacity 0.3s ease, visibility 0.3s ease",
          position: "fixed",
          top: 0,
          right: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "#fff",
          zIndex: 1000, // ハンバーガーより低く
        }}
      >
        <nav className={style.sp_nav}>

          <div className={style.l_nav_wrap}>
            <div className={style.l_nav_outer}>
              <div className={style.l_nav_inner}>
                <div className={style.l_nav_image}>
                  <ul className={style.images}>
                    <li className={hoverId === "1" ? style.show : ""}>
                      <img src={img01} alt="" />
                    </li>
                    <li className={hoverId === "2" ? style.show : ""}>
                      <img src={img02} alt="" />
                    </li>
                    <li className={hoverId === "3" ? style.show : ""}>
                      <img src={img03} alt="" />
                    </li>
                    <li className={hoverId === "4" ? style.show : ""}>
                      <img src={img04} alt="" />
                    </li>
                  </ul>
                </div>

                <div className={style.l_nav_body}>
                  <a className={style.logoinner} href="">
                    <img src={logo} alt="" />
                  </a>
                  <FadeIn>
                    <ul className={style.l_nav_nav}>
                      <li>
                        <a
                          href="/Roots"
                          data-id="2"
                          onMouseEnter={() => setHoverId("2")}
                        >
                          visual
                        </a>
                      </li>

                      <li>
                        <a
                          href="/"
                          data-id="3"
                          onMouseEnter={() => setHoverId("3")}
                        >
                          visual2
                        </a>
                      </li>

                      <li>
                        <a
                          href="/"
                          data-id="4"
                          onMouseEnter={() => setHoverId("4")}
                        >
                          visual3
                        </a>
                      </li>
                    </ul>
                  </FadeIn>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Component;
