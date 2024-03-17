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
    <>
      <Swiper
       style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
        '--swiper-pagination-bullet-width':'20px',
        '--swiper-pagination-bullet-height':'2px',
        '--swiper-pagination-bullet-border-radius':'0px'
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
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  )
}

export default Slider
