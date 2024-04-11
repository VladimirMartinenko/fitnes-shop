import React from 'react'
import style from './Shares.module.scss'

const Shares = () => {
  return (
    <div className={style.conteiner}>
      <div className={style.conteiner_text}>
        <h1 className={style.main_text}>Спіймай всі акції!</h1>
        <p className={style.text}>
          Підписуйся на Email розсилку і отримуй інформацію про всі акції, які
          будуть з`влятись у нашому магазині. А у нас їх багато :D
        </p>
      </div>
      <form className={style.search_form}>
            <input
              id='myInput'
              type='search'
              // value=''
              placeholder="введіть"
              className={style.search_input}
            />
            <button type="submit" className={style.search_button} >
            Підписатись
          </button>
          </form>
    </div>
  )
}

export default Shares
