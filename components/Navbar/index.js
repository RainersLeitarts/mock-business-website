//import Link from 'next/link'
import { Link } from 'react-scroll'
import styles from '../../styles/Navbar.module.css'
import amp_logo from '../../public/images/amp_logo.png'
import { useRouter } from 'next/router';
import { useRef } from 'react';

const Navbar = ({ toggleOpen, isMobileNavOpen }) => {
    const router = useRouter();
    const homeRef = useRef()

    const logoClickHandler = (e) => {
        router.pathname === '/' ?
            homeRef.current.handleClick(e) :
            router.replace('/')
    }

    const homeClickHandler = (e) => {
        router.pathname !== '/' && router.replace('/')
    }

    return (
        <div className={styles.navContainer}>
            <div className={styles.navContentContainer}>
                <div onClick={logoClickHandler} style={{ backgroundImage: `url(${amp_logo.src})` }} className={styles.logoContainer} />
                <div onClick={toggleOpen} className={styles.hamburgerContainer}>
                    <div className={`${styles.hamburger} ${isMobileNavOpen && styles.open}`} />
                </div>
                <div className={styles.linksContainer}>
                    <Link onClick={homeClickHandler} ref={homeRef} className={styles.link} activeClass={styles.active} spy={true} to="home" smooth={'easeInOutQuart'} offset={-80} duration={500} >HOME</Link>
                    {router.pathname !== '/vaccancies' && <Link className={styles.link} activeClass={styles.active} spy={true} to="who" smooth={'easeInOutQuart'} offset={-80} duration={500} >WHO WE ARE</Link>}
                    {router.pathname !== '/vaccancies' && <Link className={styles.link} activeClass={styles.active} spy={true} to="vaccancies" smooth={'easeInOutQuart'} offset={-80} duration={500} >VACCANCIES</Link>}
                    {router.pathname !== '/vaccancies' && <Link className={styles.link} activeClass={styles.active} spy={true} to="automotive" smooth={'easeInOutQuart'} offset={-80} duration={500} >AUTOMOTIVE</Link>}
                    {router.pathname !== '/vaccancies' && <Link className={styles.link} activeClass={styles.active} spy={true} to="contact" smooth={'easeInOutQuart'} offset={-80} duration={500} >CONTACT US</Link>}
                </div>
            </div>
        </div>
    )
}

export default Navbar