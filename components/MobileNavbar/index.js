import { Link } from 'react-scroll'
import styles from '../../styles/MobileNavbar.module.css'
import { useRouter } from 'next/router';

const MobileNavbar = ({ toggleOpen, isMobileNavOpen }) => {
    const router = useRouter();

    const homeClickHandler = (e) => {
        router.pathname !== '/' && router.replace('/')
    }


    return (
        <div onClick={toggleOpen} className={`${styles.mobileNavContainer} ${isMobileNavOpen && styles.open}`}>
            <Link onClick={() => {
                router.replace('/')
                toggleOpen()
                homeClickHandler()
            }}className={styles.link} activeClass={styles.active} spy={true} to="home" smooth={'easeInOutQuart'} offset={-80} duration={500} >HOME</Link>
            {router.pathname !== '/vaccancies' && <Link onClick={toggleOpen} className={styles.link} activeClass={styles.active} spy={true} to="who" smooth={'easeInOutQuart'} offset={-80} duration={500} >WHO WE ARE</Link>}
            {router.pathname !== '/vaccancies' && <Link onClick={toggleOpen} className={styles.link} activeClass={styles.active} spy={true} to="vaccancies" smooth={'easeInOutQuart'} offset={-80} duration={500} >VACCANCIES</Link>}
            {router.pathname !== '/vaccancies' && <Link onClick={toggleOpen} className={styles.link} activeClass={styles.active} spy={true} to="automotive" smooth={'easeInOutQuart'} offset={-80} duration={500} >AUTOMOTIVE</Link>}
            {router.pathname !== '/vaccancies' && <Link onClick={toggleOpen} className={styles.link} activeClass={styles.active} spy={true} to="contact" smooth={'easeInOutQuart'} offset={-80} duration={500} >CONTACT US</Link>}
        </div>
    )

}

export default MobileNavbar