import styles from '../../styles/Vaccancies.module.css'
import hire from '../../public/images/hire.png'
import Link from 'next/link'

const Vaccancies = () => {
    return (
        <div id='vaccancies' className={styles.vaccanciesWrapper}>
            <div className={styles.infoContainer}>
                <h1 className={styles.title}>We Are Hiring!</h1>
                <div className={styles.offer}>
                    <h3 className={styles.smallTitle} >What do we offer:</h3>
                    <ul className={styles.list}>
                        <li>Comfortable and modern work space</li>
                        <li>Profesional and experienced team members</li>
                        <li>Work in a leading tech company</li>
                        <li>Lots of opportunities to grow</li>
                    </ul>
                </div>
                <Link href='/vaccancies' >
                    <a className={styles.button}>View Vaccancies</a>
                </Link>
            </div>
            <div style={{ backgroundImage: `url(${hire.src})` }} className={styles.image} />
        </div>
    )
}

export default Vaccancies