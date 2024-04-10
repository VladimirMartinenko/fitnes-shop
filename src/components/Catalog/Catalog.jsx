import React from 'react'
import rectangle from '../img/Rectangle 6.png'
import style from './Catalog.module.scss'

const Catalog = () => {
  return (
    <div className={style.main_container}>
      <div className={style.container_text}>
        <p className={style.main_text}>
          Ми знаємо, що сподобається вашим “великим” друзям!
        </p>
        <p className={style.text}>
          Обирай подарунок своїм друзями бодібілдерам із нашою новою колекцію
          термобілизни “Big warm”
        </p>
        <button className={style.button}>До каталогу</button>
      </div>
      <img src={rectangle} alt='' className={style.img} />
    </div>
  )
}

export default Catalog
