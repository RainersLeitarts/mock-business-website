import React from 'react'
import styles from '../../styles/HomeComponent.module.css'
import amp_home from '../../public/images/amp_home.png'
import { Link } from 'react-scroll'
import amp_logo from '../../public/images/amp_logo.png'

const HomeComponent = () => {
  return (
    <div id='home' style={{ backgroundImage: `url(${amp_home.src})` }} className={styles.homeContainer}>
      <div className={styles.homeContentContainer}>
        <div style={{ backgroundImage: `url(${amp_logo.src})` }} className={styles.homeImage} />
        <div className={styles.buttonsContainer}>
          <Link className={styles.link} activeClass={styles.active} spy={true} to="who" smooth={'easeInOutQuart'} offset={-80} duration={500} >ABOUT US</Link>
          <Link className={styles.link} activeClass={styles.active} spy={true} to="contact" smooth={'easeInOutQuart'} offset={-80} duration={500} >CONTACT US</Link>
        </div>
      </div>
      <svg className={`${styles.svg}`} style={{ transform: `scale(${-1}, ${1})` }} width="100%" height="200" viewBox="0 0 100 100" preserveAspectRatio="none" fill={"#0e1721"} version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M 100 100 V 10 L 0 100" />
        <path d="M 30 73 L 100 18 V 10 Z" fill="#0a96d3" strokeWidth="0" />
      </svg>
    </div>
  )
}

export default HomeComponent