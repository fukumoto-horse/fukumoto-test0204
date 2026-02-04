import { Link } from "gatsby"
import React from "react"
import * as style from "./style.module.css"
import "../../styles/base.css"


const Component = () => {
  return (
    <>
      <footer className={style.footer}>
        <div className={"content"}>
          <div className={style.footerTop}>
            {/* <Link to="/" className={style.footer_logo}>
              <img
                src={logo}
                alt={siteMetaData.title}
                style={{ objectFit: "contain" }}
              />
            </Link> */}
              <nav className={style.nav}>
                <ul className={style.nav_list}>
                  <li className={style.nav_item}>
                    <Link to="/">ホーム</Link>
                  </li>
                </ul>
              </nav>
          </div>
          {/* <div className={style.phone_number}>
            <a
              className={style.phone_number_link}
              href={`tel:+81${data.phoneNumber}`}
            >
              TEL: <span>{data.phoneNumber}</span>
            </a>
          </div> */}

        
        </div>
      </footer>
    </>
  )
}

export default Component
