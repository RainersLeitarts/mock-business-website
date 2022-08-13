import Layout from '../components/Layout'
import styles from '../styles/VaccanciesPage.module.css'

const Vaccancie = ({ title, points }) => {
    return (
        <div className={styles.cardContainer}>
            <h3 className={styles.cardTitle}>{title.toString()}</h3>
            <ul>
                {points.map((point, key) => {
                    return <li key={key} className={styles.cardPoint}>{point.toString()}</li>
                })}
            </ul>
        </div>
    )
}

const VaccanciesPage = () => {
    return (
        <Layout >
            <div className={styles.vaccanciesPageContainer}>
                <h1 className={styles.title}>Open vaccancies: </h1>
                <div className={styles.contentContainer}>
                    <Vaccancie
                        title='Curabitur sed lorem in dolor efficitur rutrum.'
                        points={[
                            "Mauris ac risus et libero ullamcorper eleifend.",
                            "Phasellus congue sem egestas elit feugiat, quis varius arcu rhoncus.",
                            "Fusce nec eros ac erat mattis pulvinar sed quis est.",
                            "Integer eget sem placerat, tincidunt lectus eu, venenatis ex."
                        ]}
                    />
                    <Vaccancie
                        title='Lorem ipsum dolor sit amet, consectetur.'
                        points={[
                            "Nullam in mauris tempor leo congue lobortis.",
                            "Quisque dignissim enim vel rutrum feugiat.",
                            "Nam facilisis mi a fermentum dignissim."
                        ]}
                    />
                    <Vaccancie
                        title='Donec semper justo ut ante sagittis cursus.'
                        points={[
                            "Nullam in mauris tempor leo congue lobortis.",
                            "Quisque dignissim enim vel rutrum feugiat.",
                            "Nam facilisis mi a fermentum dignissim."
                        ]}
                    />
                    <Vaccancie
                        title="Nam in leo quis justo feugiat posuere."
                        points={[
                            "Mauris ac risus et libero ullamcorper eleifend.",
                            "Phasellus congue sem egestas elit feugiat, quis varius arcu rhoncus.",
                            "Fusce nec eros ac erat mattis pulvinar sed quis est.",
                            "Integer eget sem placerat, tincidunt lectus eu, venenatis ex."
                        ]}
                    />
                    <Vaccancie
                        title="Cras molestie purus id tortor porta luctus."
                        points={[
                            "Nullam in mauris tempor leo congue lobortis.",
                            "Quisque dignissim enim vel rutrum feugiat.",
                            "Nam facilisis mi a fermentum dignissim."
                        ]}
                    />
                    <Vaccancie
                        title="In tempor ipsum ut nibh iaculis, a interdum odio dictum."
                        points={[
                            "Mauris ac risus et libero ullamcorper eleifend.",
                            "Phasellus congue sem egestas elit feugiat, quis varius arcu rhoncus.",
                            "Fusce nec eros ac erat mattis pulvinar sed quis est.",
                            "Integer eget sem placerat, tincidunt lectus eu, venenatis ex."
                        ]}
                    />
                </div>
                <div className={`${styles.cardContainer} ${styles.margin}`}>
                    <h3 className={styles.cardTitle}>To inquiry, please send us an email with:</h3>
                    <ul>
                        <li className={styles.cardPoint}>Your Full Name</li>
                        <li className={styles.cardPoint}>Contact information</li>
                        <li className={styles.cardPoint}>Introductionary text about You and Your skills</li>
                        <li className={styles.cardPoint}>"Portfolio /[Optional/]"</li>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export default VaccanciesPage