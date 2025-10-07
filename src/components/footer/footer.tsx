import styles from './../../_App.module.scss'
import stylesFooter from './footer.module.scss'

function Footer() {
    return (
        <>
            <footer>
                <div className={`${stylesFooter["footer-one"]} ${styles["position-relative"]} ${styles["py-5"]} ${styles["px-2"]} ${styles["text-center"]}`}>
                    <p className={`${styles["mb-3"]} ${styles["text-uppercase"]}`}>35.000+ already joined</p>
                    <h3 className={`${styles["mb-3"]}`}>Stay up-to-date with what <br className={`${styles["d-block"]} ${styles["d-md-none"]}`} />we're doing</h3>
                    <form action="" className={`${styles["form-group"]}`}>
                        <input type="email" name="email" id="form-email" placeholder="Enter your email address" required />
                        <button type="button" className={`${styles["btn-red"]}`}>Contact Us</button>
                    </form>
                </div>
                <div className={`${stylesFooter["footer-two"]} ${styles["position-relative"]} ${styles["py-3"]}`}>
                    <div className={`${styles["container"]}`}>
                        <div className={`${styles["row"]}`}>
                            <div className={`${styles["col-12"]} ${styles["col-md-4"]}`}>
                                <div className={`${styles["footer-logo"]}`}>
                                    <a href="#">
                                        <img className={`${styles["img-fluid"]}`} src="img/logo-bookmark-white.svg" alt="Bookmark" />
                                    </a>
                                </div>
                            </div>
                            <div className={`${styles["col-12"]} ${styles["col-md-4"]}`}>
                                <div className={`${styles["footer-list"]}`}>
                                    <ul className={`${styles["footer-menu"]} ${styles["text-uppercase"]}`}>
                                        <li className={`${styles["menu-item"]}`}>Features</li>
                                        <li className={`${styles["menu-item"]}`}>Pricing</li>
                                        <li className={`${styles["menu-item"]}`}>Contact</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={`${styles["col-12"]} ${styles["col-md-4"]}`}>
                                <div className={`${styles["footer-icons"]}`}>
                                    <a href="#">
                                        <img className={`${styles["img-fluid"]}`} src="img/icon-facebook.svg" alt="Logo Facebook" />
                                    </a>
                                    <a href="#">
                                        <img className={`${styles["img-fluid"]}`} src="img/icon-twitter.svg" alt="Logo Twitter" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer