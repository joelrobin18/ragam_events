import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/slider.module.css'
import { useState } from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import img from '../assest/stock1.jpg'

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

  const [active,setActive]=useState('1')
  return (
    <div className={styles.padding}>

      <Swiper
        // install Swiper modules
        loop={true}
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={8}
        navigation
        pagination={{ clickable: true }}
        className={styles.activen}
      >
       
<SwiperSlide className={active==='1'?styles.active:''}>
  <a href="#" onClick={()=>setActive('1')}>
    <div className={styles.paddingnum }>
 <Image src={img} height="150" width="200"/>
  </div>
    </a>
</SwiperSlide>

<SwiperSlide className={active==='2'?styles.active:''} >
    <a href="#" onClick={()=>setActive('2')}>
    <div className={styles.paddingnum }>
 <Image src={img} height="150" width="200"/>
  </div>
    </a>
</SwiperSlide>

<SwiperSlide  className={active==='3'?styles.active:''}>
   <a href="#" onClick={()=>setActive('3')}>
    <div className={styles.paddingnum }>
 <Image src={img} height="150" width="200"/>
  </div>
    </a>
  </SwiperSlide>

<SwiperSlide  className={active==='4'?styles.active:''}>
  <a href="#" onClick={()=>setActive('4')}>
    <div className={styles.paddingnum }>
 <Image src={img} height="150" width="200"/>
  </div>
    </a>
</SwiperSlide>

<SwiperSlide  className={active==='5'?styles.active:''}>
   <a href="#" onClick={()=>setActive('5')}>
    <div className={styles.paddingnum }>
 <Image src={img} height="150" width="200"/>
  </div>
    </a>
</SwiperSlide>

<SwiperSlide  className={active==='6'?styles.active:''}>
  <a href="#" onClick={()=>setActive('6')}>
    <div className={styles.paddingnum }>
 <Image src={img} height="150" width="200"/>
  </div>
    </a>
</SwiperSlide>

<SwiperSlide  className={active==='7'?styles.active:''}>
  <a href="#" onClick={()=>setActive('7')}>
    <div className={styles.paddingnum }>
 <Image src={img} height="150" width="200"/>
  </div>
    </a>
</SwiperSlide>

<SwiperSlide  className={active==='8'?styles.active:''}>
  <a href="#" onClick={()=>setActive('8')}>
    <div className={styles.paddingnum }>
 <Image src={img} height="150" width="200"/>
  </div>
    </a>
</SwiperSlide>

      </Swiper>
    </div >
  )
}
