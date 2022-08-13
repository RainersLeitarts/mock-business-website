import { useRef, useState } from 'react';
import styles from '../../styles/Contact.module.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        setSuccess(false)
        setError(false)
        setLoading(true)


        emailjs.sendForm('service_2mi9bbf', 'template_thfxxak', form.current, 'pbD0ckihf5vVrHnoW')
            .then((result) => {
                setLoading(false)
                setSuccess(true)
                console.log(result.text);
            }, (error) => {
                setLoading(false)
                setError(error)
            });
    };

    return (
        <form id='contact' ref={form} onSubmit={sendEmail} className={styles.contactContainer}>
            <div className={styles.contactContentContainer}>
                <h1 className={styles.title}>Contact Us!</h1>
                <div className={styles.formTop}>
                    <input name="user_name" placeholder='Name' className={styles.input}></input>
                    <input name="user_surname" placeholder='Surname' className={styles.input}></input>
                </div>
                <input name="user_email" placeholder='E-mail' className={styles.input}></input>
                <textarea name="message" placeholder='Message' className={`${styles.input} ${styles.textarea}`}></textarea>
                <div className={styles.buttonContainer}>
                    <button type="submit" value="Send" className={styles.button}>{loading ? 'Loading...' : 'Send'}</button>
                </div>
                {success && <p className={`${styles.sendMessage} ${styles.success}`}> Message sent! </p>}
                {error && <p className={`${styles.sendMessage} ${styles.error}`}> An error occured, please contact us at connect@arc.lv</p>}
            </div>
        </form>
    )
}

export default Contact