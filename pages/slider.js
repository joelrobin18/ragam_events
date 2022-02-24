import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/slider.module.css'
import { useState } from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import img from '../assest/stock1.jpg'
import Slide from './Slide'
import SlideOne from './Slideone'
import SlideThree from './SlideThree'
import SlideTwo from './SlideTwo'
import SlideFour from './SlideFour'
import SlideFive from './SlideFive'
import SlideSix from './SlideSix'
import SlideSeven from './SlideSeven'
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
const [show1,setShow1]=useState(true)
const [show2,setShow2]=useState(false)
const [show3,setShow3]=useState(false)
const [show4,setShow4]=useState(false)
const [show5,setShow5]=useState(false)
const [show6,setShow6]=useState(false)
const [show7,setShow7]=useState(false)
const [show8,setShow8]=useState(false)

  const Show1 =()=>{
    setActive('1');
    setShow1(true)
    setShow2(false)
    setShow3(false)
    setShow4(false)
    setShow5(false)
    setShow6(false)
    setShow7(false)
    setShow8(false)
  }
  const Show2 =()=>{
    setActive('2');
    setShow1(false)
    setShow2(true)
    setShow3(false)
    setShow4(false)
    setShow5(false)
    setShow6(false)
    setShow7(false)
    setShow8(false)
  }
  const Show3 =()=>{
    setActive('3');
    setShow1(false)
    setShow2(false)
    setShow3(true)
    setShow4(false)
    setShow5(false)
    setShow6(false)
    setShow7(false)
    setShow8(false)
  }
  const Show4 =()=>{
    setActive('4');
    setShow1(false)
    setShow2(false)
    setShow3(false)
    setShow4(true)
    setShow5(false)
    setShow6(false)
    setShow7(false)
    setShow8(false)
  }
  const Show5 =()=>{
    setActive('5');
    setShow1(false)
    setShow2(false)
    setShow3(false)
    setShow4(false)
    setShow5(true)
    setShow6(false)
    setShow7(false)
    setShow8(false)
  }
  const Show6 =()=>{
    setActive('6');;  setShow1(false);  setShow2(false);  setShow3(false);  setShow4(false);  setShow5(false);  setShow6(true);  setShow7(false) ;  setShow8(false)
  }
  const Show7 =()=>{
    setActive('7'); ; setShow1(false) ; setShow2(false) ; setShow3(false) ; setShow4(false) ; setShow5(false) ; setShow6(false) ; setShow7(true) ; setShow8(false)
  }
  const Show8 =()=>{
    setActive('8'); setShow1(false) ;setShow2(false) ;setShow3(false) ;setShow4(false) ;setShow5(false) ;setShow6(false) ;setShow7(false) ;setShow8(true)
  }
  return (
    <>
  {show1 && <Slide />} 
   {show2 && <SlideOne />}
   {show3 && <SlideTwo />}
   {show4 && <SlideThree />}
   {show5 && <SlideFour />}
   {show6 && <SlideFive />}
   {show7 && <SlideSix />}
   {show8 && <SlideSeven />}
    <div className={styles.padding}>

      <Swiper
        // install Swiper modules
        loop={true}
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        className={styles.activen}
      >
       
<SwiperSlide className={active==='1'?styles.active:''}>
  <a href="#" onClick={Show1}>
    <div className={styles.paddingnum }>
 <Image src={img} layout="responsive" height="100" width="240"/>
  </div>
    </a>
</SwiperSlide>

<SwiperSlide className={active==='2'?styles.active:''} >
    <a href="#" onClick={Show2}>
    <div className={styles.paddingnum }>
 <Image src={img} layout="responsive" height="100" width="240"/>
  </div>
    </a>
</SwiperSlide>

<SwiperSlide  className={active==='3'?styles.active:''}>
   <a href="#" onClick={Show3}>
    <div className={styles.paddingnum }>
 <Image src={img} layout="responsive" height="100" width="240"/>
  </div>
    </a>
  </SwiperSlide>

<SwiperSlide  className={active==='4'?styles.active:''}>
  <a href="#" onClick={Show4}>
    <div className={styles.paddingnum }>
 <Image src={img} layout="responsive" height="100" width="240"/>
  </div>
    </a>
</SwiperSlide>

<SwiperSlide  className={active==='5'?styles.active:''}>
   <a href="#" onClick={Show5}>
    <div className={styles.paddingnum }>
 <Image src={img} layout="responsive" height="100" width="240"/>
  </div>
    </a>
</SwiperSlide>

<SwiperSlide  className={active==='6'?styles.active:''}>
  <a href="#" onClick={Show6}>
    <div className={styles.paddingnum }>
 <Image src={img} layout="responsive" height="100" width="240"/>
  </div>
    </a>
</SwiperSlide>

<SwiperSlide  className={active==='7'?styles.active:''}>
  <a href="#" onClick={Show7}>
    <div className={styles.paddingnum }>
 <Image src={img} layout="responsive" height="100" width="240"/>
  </div>
    </a>
</SwiperSlide>

<SwiperSlide  className={active==='8'?styles.active:''}>
  <a href="#" onClick={Show8}>
    <div className={styles.paddingnum }>
 <Image src={img} layout="responsive" height="100" width="240"/>
  </div>
    </a>
</SwiperSlide>

      </Swiper>
    </div >
    </>
  )
}
