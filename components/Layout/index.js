import React, { useState } from 'react'
import styles from '../../styles/Layout.module.css'
import Footer from '../Footer'
import HomeComponent from '../Home'
import MobileNavbar from '../MobileNavbar'
import Navbar from '../Navbar'
import ScrollButton from '../ScrollButton'

const Layout = ({ home, children }) => {

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const toggleOpen = () => {
    setIsMobileNavOpen(prev => {
      return !prev
    })
  }

  return (
    <div className={styles.outerWrapper}>
      <Navbar toggleOpen={toggleOpen} isMobileNavOpen={isMobileNavOpen}/>
      <MobileNavbar toggleOpen={toggleOpen} isMobileNavOpen={isMobileNavOpen}/>
      {home && <HomeComponent />}
      <div className={styles.innerWrapper}>
        {children}
      </div>
      <ScrollButton />
      <Footer />
    </div>
  )
}

export default Layout