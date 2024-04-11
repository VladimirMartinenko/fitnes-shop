import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import foto_main from '../img/f1eafcc65076de7a1d51bc0416146be1.jpeg'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules'
import style from './Slider.module.scss'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules

const Slider = () => {
  return (
    <div className={style.container}>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
          '--swiper-pagination-bullet-width': '20px',
          '--swiper-pagination-bullet-height': '2px',
          '--swiper-pagination-bullet-border-radius': '0px'
        }}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className='mySwiper'
      >
        <SwiperSlide>
          <img src={foto_main} className={style.img}></img>
          <div className={style.container_text_main}>
            <p className={style.text}>Швидше. Вище. Сильніше.</p>
            <p className={style.text2}>Разом із Nike</p>
          </div>
          <div className={style.container_promotion}>
            <div className={style.promotion}>
              <p className={style.text_promotion}>Знижки до 40%</p>
            </div>
            <p className={style.text_promotion2}>Залишився лише тиждень</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={foto_main} className={style.img}></img>
          <div className={style.container_text_main}>
            <p className={style.text}>Швидше. Вище. Сильніше.</p>
            <p className={style.text2}>Разом із Nike</p>
          </div>
          <div className={style.container_promotion}>
            <div className={style.promotion}>
              <p className={style.text_promotion}>Знижки до 40%</p>
            </div>
            <p className={style.text_promotion2}>Залишився лише тиждень</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider
