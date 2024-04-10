import React from 'react'
import style from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container_main}>
        <div className={style.container_menu}>
          <h1 className={style.h1}>Контакт - центр</h1>
          <div className={style.container_text}>
            <a href='098 900 09 09' className={style.text}>
              098 900 09 09
            </a>
            <p className={style.text}>Пн - Пт 09:00 - 21:00 </p>
            <p className={style.text}>Пн - Пт 09:00 - 21:00 </p>
          </div>
        </div>

        <div className={style.container_menu}>
          <h1 className={style.h1}>Покупцям</h1>
          <div className={style.container_text}>
            <a href='#' className={style.text}>
              Оплата і доставка
            </a>
            <a href='#' className={style.text}>
              Повернення
            </a>
            <a href='#' className={style.text}>
              Питання та відповіді
            </a>
          </div>
        </div>
        <div className={style.container_menu}>
          <h1 className={style.h1}>Особистий кабінет</h1>
          <div className={style.container_text}>
            <a href='#' className={style.text}>
              Мої дані
            </a>
            <a href='#' className={style.text}>
              Історія замовлень
            </a>
            <a href='#' className={style.text}>
              Улюблені
            </a>
            <a href='#' className={style.text}>
              Розсилки
            </a>
          </div>
        </div>
        <div className={style.container_menu}>
          <h1 className={style.h1}>Про компанію</h1>
          <div className={style.container_text}>
            <a href='#' className={style.text}>
              Про нас
            </a>
            <a href='#' className={style.text}>
              Новини
            </a>
            <a href='#' className={style.text}>
              Стати партнером
            </a>
            <a href='#' className={style.text}>
              Угода користувача
            </a>
          </div>
        </div>
      </div>
      <div className={style.container_nav}>
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
        <p className={style.nav_text}>© 2022 — 2023 IGNAT. Усі права захищені.</p>
      </div>
    </footer>
  )
}

export default Footer
