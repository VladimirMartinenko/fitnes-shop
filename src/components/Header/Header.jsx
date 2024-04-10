import React from 'react'
import style from './Header.module.scss'
import logo from '../img/Logo1.png'
import serch from '../img/Vector.png'
import basket from '../img/bag.png'
import heart from '../img/heart.png'

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.nav_top}>
        <div className={style.nav_top_left}>
          <a href='098 900 09 09' className={style.nav_top_a}>
            098 900 09 09
          </a>
          <a href='#' className={style.nav_top_a}>
            Допомога
          </a>
        </div>
        <div className={style.nav_right}>
          <a href='#' className={style.nav_top_a}>
            Увійти
          </a>
          <span className={style.nav_top_a}> / </span>
          <a href='#' className={style.nav_top_a}>
            Зареєструватися
          </a>
        </div>
      </div>
      <div className={style.nav_botom}>
        {/* <div className={style.logo}> */}
          <img src={logo} alt='logo' className={style.logo_img} />
        {/* </div> */}
        <nav className={style.nav}>
          <a href='#' className={style.nav_botom_a}>
            новинки
          </a>
          <a href='#' className={style.nav_botom_a}>
            чоловіки
          </a>
          <a href='#' className={style.nav_botom_a}>
            жінки
          </a>
          <a href='#' className={style.nav_botom_a}>
            аксесуари
          </a>
          <a href='#' className={style.nav_botom_a}>
            акції
          </a>
        </nav>
        <div className={style.search}>
          <form className={style.search_form}>
            <input
              id='myInput'
              type='search'
              // value=''
              className={style.search_input}
            />
            <button type="submit" className={style.search_button} >
            {/* <svg > */}
              <img src={serch}
          alt=""
          className={style.search_img} />
            {/* </svg> */}
          </button>
          </form>
          <img src={heart}
          alt=""
          className={style.heart} />
          <img src={basket}
          alt=""
          className={style.basket} />
        </div>
      </div>
    </header>
  )
}

export default Header
