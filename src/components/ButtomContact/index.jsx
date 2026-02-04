import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "../../styles/base.css";
import "../../setupJquery";
import * as style from "./style.module.css";

const Component = () => {
  useEffect(() => {
    $(".ripple").ripples({
      resolution: 512, // 描画解像度（大きすぎると重くなる）
      dropRadius: 10, // 波紋の半径（大きさ）
      perturbance: 0.009, // 揺れの強さ
    });

    return () => {
      try {
        $(".ripple").ripples("destroy");
      } catch (e) {
        console.warn("Ripples destroy failed:", e);
      }
    };
  }, []);
  return (
    <div className={`ripple ${style.ripple}`}>
      <a href="/">ご購入はこちら</a>
    </div>
  );
};

export default Component;
