import styles from './../../_App.module.scss'
import stylesFooter from './footer.module.scss'
import ImgFooter from './imgFooter/imgFooter'
import Form from './form/form'
import BookmarksWhite from '/logo-bookmark-white.svg'
import FacebookImg from '/icon-facebook.svg'
import TwitterImg from '/icon-twitter.svg'

export default function Footer() {
    return (
        <>
            <footer>
                <div className={`${stylesFooter["footer-one"]} ${styles["position-relative"]} ${styles["py-5"]} ${styles["px-2"]} ${styles["text-center"]}`}>
                    <p className={`${styles["mb-3"]} ${styles["text-uppercase"]}`}>35.000+ already joined</p>
                    <h3 className={`${styles["mb-3"]}`}>Stay up-to-date with what <br className={`${styles["d-block"]} ${styles["d-md-none"]}`} />we're doing</h3>
                    <Form />
                </div>
                <div className={`${stylesFooter["footer-two"]} ${styles["position-relative"]} ${styles["py-3"]}`}>
                    <div className={`${styles["container"]}`}>
                        <div className={`${styles["row"]}`}>
                            <div className={`${styles["col-12"]} ${styles["col-md-4"]}`}>
                                <div className={`${stylesFooter["footer-logo"]}`}>
                                    <a href="#">
                                        <ImgFooter style={styles["img-fluid"]} src={BookmarksWhite} alt="Bookmarks" />
                                    </a>
                                </div>
                            </div>
                            <div className={`${styles["col-12"]} ${styles["col-md-4"]}`}>
                                <div className={`${stylesFooter["footer-list"]}`}>
                                    <ul className={`${stylesFooter["footer-menu"]} ${styles["text-uppercase"]}`}>
                                        <li className={`${stylesFooter["menu-item"]}`}>Features</li>
                                        <li className={`${stylesFooter["menu-item"]}`}>Pricing</li>
                                        <li className={`${stylesFooter["menu-item"]}`}>Contact</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={`${styles["col-12"]} ${styles["col-md-4"]}`}>
                                <div className={`${stylesFooter["footer-icons"]}`}>
                                    <a href="#">
                                        <ImgFooter style={`${styles["img-fluid"]} ${stylesFooter["footer-img"]}`} src={FacebookImg} alt="Logo Facebook" />
                                    </a>
                                    <a href="#">
                                        <ImgFooter style={`${styles["img-fluid"]} ${stylesFooter["footer-img"]}`} src={TwitterImg} alt="Logo Twitter" />
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