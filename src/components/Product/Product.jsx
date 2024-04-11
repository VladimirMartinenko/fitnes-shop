import React, { useState } from 'react'
import style from './Product.module.scss'
import foto_product1 from '../img/Rectangle 4 (1).png'
import foto_product2 from '../img/Rectangle 4 (2).png'
import foto_product3 from '../img/Rectangle 4.png'
import SlideNextButton from '../SliderNavButton/SliderNavButton'
import left from '../img/Arrow 1.png'
import right from '../img/Arrow 2.png'
import heart from '../img/24037.svg'
import heart2 from '../img/Vector.svg'
import ProductList from "./ProductList.json"

// Import Swiper styles
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules'

const Product = () => {
  const [items, setItems] = useState([])
  const [value, setValue] = useState([])
 
const img=(id)=>{
  console.log(id);
  console.log(value);
  let j = heart2
  console.log(value.length);
  // if(value.length===0){
  //   j= heart2
  // }else{
  for(let i=0;i<value.length;i++){
    console.log(value[i]);
if (value[i]===id){
  console.log('привет')
  j= heart}
// }else{
//   console.log('пока')
//   j=heart2
// }
}

  // }
  console.log(j)
  return j
}

const valueItem = (id) =>{
  console.log(id)
  if(value.length>0){
  // for(let i=0;i<value.length;i++){
  //   console.log(value[i])
  //   if(id===value[i]){
  //     console.log('равно')
  //     console.log(value)
      let arr =value.filter((value)=> value !== id)
      console.log(arr)
     
      if(arr.length === value.length){
         setValue([id,...value])
      }else{
         setValue(arr)
      }
      // console.log(value)}
      // } 
    }else{
     setValue([id,...value])
  }
}
console.log(value)

  const swiper = useSwiper()
  function addZero (num) {
    return num > 9 ? num : '0' + num
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
        slidesPerView={3}
        spaceBetween={30}
        // freeMode={true}
        // navigation={true}
        modules={[Pagination, Navigation]}
        // className='mySwiper'
        className='clientSwiper container-swiper'
      >
        {/* <SlideNextButton/> */}
        {ProductList.map(product=>(
            <SwiperSlide key={product.id}>
            <img src={require(`../img/${product.foto}.png`)} className={style.img}></img>
            <div className={style.img_container_text}>
              <h1 className={style.img_main_text}>
               {product.name}
              </h1>
              <p className={style.img_text}>{product.information}</p>
              <p className={style.img_text}>{product.color}</p>
              <p className={style.img_price}>{product.price}</p>
            </div>
            <div className={style.container_heart}>
              <img
                // src={for(let i=0;i<=value.length;i++){i === product.id ? heart : heart2}}
                // stc={heart}
                src={img(product.id)}
                onClick={() => {
                 valueItem(product.id);
                  console.log(value)
                //  { src={heart2}}
                }}
                className={style.heart}
              ></img>
            </div>
          </SwiperSlide>
        ))}
      
        {/* <SwiperSlide>
          <img src={foto_product2} className={style.img}></img>
          <div className={style.container_heart}>
            <img
              src={value === true ? heart : heart2}
              onClick={() => {
                setValue(!value)
              }}
              className={style.heart}
            ></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={foto_product3} className={style.img}></img>
          <div className={style.container_heart}>
            <img
              src={value === true ? heart : heart2}
              onClick={() => {
                setValue(!value)
              }}
              className={style.heart}
            ></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={foto_product1} className={style.img}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={foto_product2} className={style.img}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={foto_product3} className={style.img}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={foto_product1} className={style.img}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={foto_product2} className={style.img}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={foto_product3} className={style.img}></img>
        </SwiperSlide> */}
        {/* <div>
        <span className='swiper-button-prev' onClick={() => swiper.slidePrev()}> <img src={right}
          alt="" /></span>
        <span className='swiper_button_next' onClick={() => swiper.slideNext()}><img src={left}
          alt="" /></span>
        </div> */}
        <div className='container'>
          <h1 className={style.container_main_text}>Найгарячіші товари</h1>
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

export default Product
