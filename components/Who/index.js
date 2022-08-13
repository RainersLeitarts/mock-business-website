import styles from '../../styles/Who.module.css'
import who_1 from '../../public/images/who_1.png'
import who_2 from '../../public/images/who_2.png'
import who_3 from '../../public/images/who_3.png'


const Who = () => {
    return (
        <div id='who' className={styles.whoContainer}>
            <h1 className={styles.title}>Who we are?</h1>
            <p className={styles.text}>AMP, the leading IoT technology company. Our team consists of high grade professionals, that are interested and excited to amp up the world with technology. We have developed many revolutionary and successful IoT products that are used all around the world. </p>
            <div className={styles.itemsContainer}>
                <div style={{backgroundImage: `url(${who_1.src})`}} className={styles.itemContainer}>
                    <div className={styles.imageContainer} />
                    <p className={styles.itemText}>{'Advanced IoT tool and product, professional development from scratch.'}</p>
                </div>
                <div style={{backgroundImage: `url(${who_2.src})`}} className={styles.itemContainer}>
                    <div className={styles.imageContainer} />
                    <p className={styles.itemText}>{'Development and deployment of in house made satellites for communication.'}</p>
                </div>
                <div style={{backgroundImage: `url(${who_3.src})`}} className={styles.itemContainer}>
                    <div className={styles.imageContainer} />
                    <p className={styles.itemText}>{'Network implementation, upkeep and design based on specific requirements.'}</p>
                </div>
            </div>
        </div>
    )
}

export default Who