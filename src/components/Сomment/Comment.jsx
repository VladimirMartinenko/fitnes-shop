import React from 'react'
import style from './Comment.module.scss'
import Mask from '../img/Mask.png'
import left from '../img/Arrow 1.png'
import right from '../img/Arrow 2.png'
import starIcon from '../img/Icon.png'
import starIconEmpty from '../img/Icon (1).png'
import comment from './comment.json'

// Import Swiper styles
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules'

const Comment = () => {
  const swiper = useSwiper()
  function addZero (num) {
    return num > 9 ? num : '0' + num
  }
  const star = (index,star) => {
    if(index<=star){
      return starIcon
    }else{
      return starIconEmpty
    }
  }

  return (
    <div className={style.container_main}>
      <Swiper
        style={
          {
            // '--swiper-navigation-color': '#fff',
            // '--swiper-pagination-color': '#fff',
            // '--swiper-pagination-bullet-width':'20px',
            // '--swiper-pagination-bullet-height':'2px',
            // '--swiper-pagination-bullet-border-radius':'0px',
            // '--swiper-button-prev- top':'2px',
            // '--swiper-button-next-align-items':'start',
          }
        }
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        pagination={{
          el: '.swiper-pagination',
          type: 'fraction',
          formatFractionCurrent: addZero,
          formatFractionTotal: addZero
        }}
        slidesPerView={4}
        spaceBetween={20}
        // freeMode={true}
        // navigation={true}
        modules={[Pagination, Navigation]}
        // className='mySwiper'
        className='clientSwiper container-swiper'
      >
        {/* <SlideNextButton/> */}
        {comment.map(comment => (
          <SwiperSlide>
            <div className={style.container}>
              <div className={style.container_name}>
                <img
                  src={require(`../img/${comment.foto}.png`)}
                  className={style.img}
                ></img>
                <div className={style.position_rating_name}>
                  <span className={style.rating}>{[1,2,3,4,5,6].map((index) =>(<img key={index} src={star(index,comment.star)} className={style.img}></img>))}</span>
                  <h1 className={style.name}>{comment.name}</h1>
                </div>
              </div>
              <p className={style.text}>{comment.text}</p>
            </div>
          </SwiperSlide>
        ))}
        <div className='container'>
          <h1 className={style.container_main_text}>Відгуки наших клієнтів</h1>
          <div className='swiper-pagination swiper-pagination-correct'></div>
          <div className='swiper-button'>
            <div className='swiper-button-next swiper-button-next-img'></div>
            <div className='swiper-button-prev swiper-button-prev-img'></div>
          </div>
        </div>
      </Swiper>
    </div>
  )
}

export default Comment
