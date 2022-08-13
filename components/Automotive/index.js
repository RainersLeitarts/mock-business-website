import styles from '../../styles/Automotive.module.css'
import auto_1 from '../../public/images/auto_1.png'
import auto_2 from '../../public/images/auto_2.png'
import auto_3 from '../../public/images/auto_3.png'
import auto_4 from '../../public/images/auto_4.png'
import auto_5 from '../../public/images/auto_5.png'
import auto_6 from '../../public/images/auto_6.png'
import cc_logo from '../../public/images/cc_logo.png'
import ig_dark from '../../public/images/ig_dark.png'
import fb_dark from '../../public/images/fb_dark.png'
import yt_dark from '../../public/images/yt_dark.png'

const Automotive = () => {
  return (
    <div id='automotive' className={styles.automotiveContainer}>
        <div className={styles.imagesContainer}>
            <div style={{backgroundImage: `url(${auto_1.src})`}} className={styles.imageContainer} />
            <div style={{backgroundImage: `url(${auto_2.src})`}} className={styles.imageContainer} />
            <div style={{backgroundImage: `url(${auto_3.src})`}} className={styles.imageContainer} />
            <div style={{backgroundImage: `url(${auto_4.src})`}} className={styles.imageContainer} />
            <div style={{backgroundImage: `url(${auto_5.src})`}} className={styles.imageContainer} />
            <div style={{backgroundImage: `url(${auto_6.src})`}} className={styles.imageContainer} />
        </div>
        <div className={styles.infoContainer}>
            <div style={{backgroundImage: `url(${cc_logo.src})`}} className={styles.kmLogo}/>
            <h1 className={styles.title}>AMP AUTOMOTIVE</h1>
            <p className={styles.text}>Our inovative city logistics project focused on smart vehicles. Check out our progress, achievements and roadmap in on our socials.</p>
            <div className={styles.socialsContainer}>
                <a style={{backgroundImage: `url(${ig_dark.src})`}} href='https://www.instagram.com' target={'_blank'} rel="noreferrer" className={styles.socialsIcon}/>
                <a style={{backgroundImage: `url(${yt_dark.src})`}} href='https://www.youtube.com' target={'_blank'} className={styles.socialsIcon}/>
                <a style={{backgroundImage: `url(${fb_dark.src})`}} href='https://www.facebook.com' target={'_blank'} rel="noreferrer" className={styles.socialsIcon}/>
            </div>
        </div>
    </div>
  )
}

export default Automotive