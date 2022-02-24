import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Slider from './slider.js'
import img from '../assest/stock.jpg'
import Info from './info'
import Rules from './rules'
import Contact from './contact'
import Slide from './Slide'
import SlideOne from './Slideone'
export default function Home() {

  const [info, setInfo] = useState(true)
  const [rules, setRules] = useState(false)
  const [contact, setContact] = useState(false)
  const changeInfo = () => {
    setInfo(true)
    setRules(false)
    setContact(false)
  }
  const changeRules = () => {
    setInfo(false)
    setRules(true)
    setContact(false)
  }
  const changeContact = () => {
    setInfo(false)
    setRules(false)
    setContact(true)
  }
  return (
    <div>
      <Slider />
    </div >
  )
}
