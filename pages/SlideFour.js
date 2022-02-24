import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Slider from './slider.js'
import img from '../assest/stock.jpg'
import Info from './info'
import Rules from './rules'
import Contact from './contact'

export default function Slide() {

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
      <div className={styles.container}>
        <div className={styles.title}>
          <div className={styles.header}>
            <h1>&lt;&ensp;Slide Three &gt; </h1>
          </div>
          <div className={styles.content}>
            <div className={styles.info}>
              <ul className={styles.ul}>
                <div className={styles.li} onClick={changeInfo}>
                  <li >Info</li>
                </div>
                <div className={styles.li} onClick={changeRules}>
                  <li className={styles.li} >Rules</li>
                </div>
                <div className={styles.li} onClick={changeContact}>
                  <li className={styles.li} >Contact</li>
                </div>
              </ul>
            </div>
            <div className={styles.main}>
              {info && <Info />}
              {rules && <Rules />}
              {contact && <Contact />}
              <div className={styles.button_container}>

                <p className={styles.button}>
                  REGISITER</p>
              </div>
            </div>
          </div >

        </div >
        <div className={styles.lec3}>
          <Image src={img} alt="Not Sure" height="600"/>
        </div>
      </div >
    </div >
  )
}