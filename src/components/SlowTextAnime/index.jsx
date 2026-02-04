import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextAnime = ({ children, triggerClass, stagger = 0.06, duration = 1.4 }) => {
  const wrapRef = useRef(null);
  const splitRef = useRef(null);

  useEffect(() => {
    const el = wrapRef.current;

    // SplitType
    splitRef.current = new SplitType(el.querySelectorAll("p"), {
      types: "chars",
    });

    // GSAP
    gsap.from(splitRef.current.chars, {
      opacity: 0,
      y: 4,
      duration,
      ease: "power1.out",
      stagger,
      scrollTrigger: {
        trigger: triggerClass ? `.${triggerClass}` : el,
        start: "top 80%",
        once: true,
      },
    });

    return () => {
      splitRef.current?.revert();
    };
  }, []);

  return <div ref={wrapRef}>{children}</div>;
};

export default TextAnime;
