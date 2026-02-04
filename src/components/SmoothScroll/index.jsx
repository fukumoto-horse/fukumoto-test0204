import React, { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

const ScrollEffect = () => {
  useEffect(() => {
    // クライアントサイドのみで実行
    if (typeof window !== "undefined") {
      const lenis = new Lenis()

      const raf = time => {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)

      // クリーンアップ
      return () => {
        lenis.destroy()
      }
    }
  }, [])

  return null // UIはレンダリングしない
}

export default ScrollEffect
