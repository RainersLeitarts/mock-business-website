import styles from '../../styles/Spacer.module.css'

const Spacer = ({ x, y, reverse, dark }) => {


    return (
        <div className={`${styles.spacerContainer} ${y === -1 && styles.reverse}`}>
                <svg className={`${styles.svg}`} style={{ transform: `scale(${x}, ${y})` }} width="100%" height="200" viewBox="0 0 100 100" preserveAspectRatio="none" fill={dark ? "#08121c" : reverse ? "#121e2c" : "#0e1721"} version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 100 100 V 10 L 0 100" />
                    <path d="M 30 73 L 100 18 V 10 Z" fill="#0a96d3" strokeWidth="0" />
                </svg> 
        </div>
    )
}

export default Spacer