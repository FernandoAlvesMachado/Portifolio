import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Importe os estilos corretos do Swiper

export default class Carrossel extends React.Component {
  render() {
    return (
      <Swiper className='swiper-container'>
        <SwiperSlide className='slide-item'>
          <img src={require('../Images/Capas06.png')} alt='imagem 01' />
        </SwiperSlide>
        <SwiperSlide className='slide-item'>
          <img src={require('../Images/Capas06.png')} alt='imagem 02' />
        </SwiperSlide>
        <SwiperSlide className='slide-item'>
          <img src={require('../Images/Capas06.png')} alt='imagem 03' />
        </SwiperSlide>
      </Swiper>
    );
  }
}
