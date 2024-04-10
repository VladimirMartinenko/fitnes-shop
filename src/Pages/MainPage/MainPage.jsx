import React from 'react';
import Header from '../../components/Header/Header';
import Slider from '../../components/Slider/Slider';
import Catalog from '../../components/Catalog/Catalog';
import style from './MainPage.module.scss'
import Footer from '../../components/Footer/Footer';
import Product from '../../components/Product/Product';
import Shares from '../../components/Shares/Shares';
import Comment from '../../components/Сomment/Comment';

const MainPage = () => {
  return (
    <div className={style.main}>
      <Header/>
      <Slider/>
      <Catalog/>
      <Product/>
      <Shares/>
      <Comment/>
      <Footer/>
    </div>
  );
}

export default MainPage;
