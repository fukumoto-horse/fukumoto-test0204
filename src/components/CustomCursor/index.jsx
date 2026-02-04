import React, { useEffect, useRef } from "react"
import * as style from "./style.module.css"


const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;

    const speed = 0.1; // 追従速度。0.1〜0.2くらいが自然

    const animate = () => {
      posX += (mouseX - posX) * speed;
      posY += (mouseY - posY) * speed;

      follower.style.transform = `translate(${posX}px, ${posY}px)`;
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;

      requestAnimationFrame(animate);
    };

    const mouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", mouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <>
      <div ref={followerRef} className={style.cursor_follower}/>
      <div ref={cursorRef} className={style.cursor_dot} />
    </>
  );
};

export default CustomCursor;
