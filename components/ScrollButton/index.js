import { useEffect, useState } from 'react'
import styles from '../../styles/ScrollButton.module.css'
import amp_logo from '../../public/images/amp_logo.png'

const ScrollButton = () => {
    const [scroll, setScroll] = useState(0)

    if (typeof window !== "undefined") {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY)
        })
    }

    return (
        <div style={{backgroundImage: `url(${amp_logo.src})`}} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`${styles.scrollButtonContainer} ${scroll < 750 && styles.hidden}`} />
    )
}

export default ScrollButton