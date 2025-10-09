import styles from './../../../_App.module.scss'

export default function Form() {
    return (
        <>
            <form className={`${styles["form-group"]}`}>
                <input type="email" name="email" id="form-email" placeholder="Enter your email address" required />
                <button type="button" className={`${styles["btn-red"]}`}>Contact Us</button>
            </form>
        </>
    )
}