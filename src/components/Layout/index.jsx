import * as React from "react"
import Footer from "../Footer"
import Header from "../Header"
import * as style from "./style.module.css"
import "../../styles/base.css"
import CustomCursor from "../CustomCursor"
import SmoothScroll from "../SmoothScroll"
const Layout = ({ children }) => {
  return (
    <>
      <CustomCursor />
      <SmoothScroll /> 
      <Header />
      <main className={style.main}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
