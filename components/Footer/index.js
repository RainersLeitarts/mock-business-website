import style from '../../styles/Footer.module.css'
import amp_logo from '../../public/images/amp_logo.png'

const Footer = () => {
    return (
        <div className={style.footerContainer}>
            <div className={style.footerContentContainer}>
                <div className={style.contactsContainer}>
                    <h3 className={style.sectionTitle}>Contacts:</h3>
                    <p className={style.sectionText}>Phone Nr.: +123 45679123</p>
                    <p className={style.sectionText}>E-mail: sample@amp.com</p>
                </div>
                <div className={style.companyInfoContainer}>
                    <h3 className={style.sectionTitle}>Information:</h3>
                    <p className={style.sectionText}>Company name: SIA AMP</p>
                    <p className={style.sectionText}>Registration Nr.: 1233455678</p>
                    <p className={style.sectionText}>European Union VAT Nr.: LV1233455678</p>
                </div>
                <div className={style.locationContainer}>
                    <h3 className={style.sectionTitle}>Location:</h3>
                    <p className={style.sectionText}>Country: Latvia</p>
                    <p className={style.sectionText}>City: Riga</p>
                    <p className={style.sectionText}>Street: Ganibu dambis</p>
                    <p className={style.sectionText}>Postcode: LV-1234</p>
                </div>
                <div style={{ backgroundImage: `url(${amp_logo.src})` }} className={style.logo} />
            </div>
            <p className={style.credits}>
                Made with
                <span style={{ color: 'red' }} className={style.credits}> ♥ </span>
                by
                <a href='https://rewo.dev/' target={'_blank'} rel="noreferrer" className={style.rewodev}> rewo.dev</a>
            </p>
        </div>
    )
}

export default Footer