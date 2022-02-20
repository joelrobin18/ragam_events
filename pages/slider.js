import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/slider.module.css'
import { useState } from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import img from '../assest/stock.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Homes() {
  const Data = [
    {
      id: '1',
      image: "/assest/stock.webp"
    },
    {
      id: '2',
      image: "/assest/stock.webp"
    },
    {
      id: '3',
      image: "/assest/stock.webp"
    },
    {
      id: '4',
      image: "/assest/stock.webp"
    },
    {
      id: '5',
      image: "/assest/stock.webp"
    },
    {
      id: '1',
      image: "/assest/stock.webp"
    },
    {
      id: '2',
      image: "/assest/stock.webp"
    },
    {
      id: '3',
      image: "/assest/stock.webp"
    },
    {
      id: '4',
      image: "/assest/stock.webp"
    },
    {
      id: '5',
      image: "/assest/stock.webp"
    }
  ]
  return (
    <div>

      <Swiper
        // install Swiper modules
        loop={true}
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={8}
        navigation
        pagination={{ clickable: true }}
        className={styles.space}
      >
        {
          Data.map((item, index) => {

            return (
              <SwiperSlide key={index}>
                <div className={styles.space}></div>
                <div className={styles.image}>
                  <Image src={img} width={150} height={200} alt="Images" ></Image >
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div >
  )
}
