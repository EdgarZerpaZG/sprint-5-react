import { useState } from 'react'
import styles from './../../../../_App.module.scss'
import mobileStyles from './mobile.module.scss'
import Menu from '/icon-hamburger.svg'
import Close from '/icon-close.svg'
import BookmarkWhite from '/logo-bookmark-white.svg'
import Facebook from '/icon-facebook.svg'
import Twitter from '/icon-twitter.svg'

export default function MobileNav() {

const [open, setOpen] = useState(false)

  return (
    <>
        <div id="menu-mobile-btn" className={`${styles["d-none"]} ${styles["d-md-block"]} ${styles["h-100"]}`}>
            <div className={`${mobileStyles["menu-mobile-box"]} ${styles["h-100"]} ${styles["d-flex"]} ${styles["justify-content-center"]} ${styles["align-items-center"]}`}>
                <img
                    className={`${styles["img-fluid"]}`}
                    src={Menu}
                    alt="Open Menu BookMarks"
                    onClick={() => setOpen(true)}
                />
            </div>
        </div>
        <div id="menu-mobile" className={`${mobileStyles["menu-mobile"]} ${
          open ? mobileStyles["menu-open"] : mobileStyles["menu-closed"]
        } ${styles["d-none"]} ${styles["d-md-block"]}`}>
            <div id="menu-mobile-close" className={`${mobileStyles["btn-close-box"]}`}>
                <img
                    className={`${mobileStyles["btn-close"]} ${styles["img-fluid"]}`}
                    src={Close}
                    alt="Close Menu"
                    onClick={() => setOpen(false)}
                />
            </div>
            <div className={`${mobileStyles["menu-mobile-logo"]}`}>
                <img className={`${styles["img-fluid"]}`} src={BookmarkWhite} alt="Bookmark"/>
            </div>
            <div className={`${mobileStyles["menu-mobile-content"]}`}>
                <div className={`${styles["h-100"]} ${styles["w-100"]}`}>
                    <div className={`${styles["col-12"]} ${styles["h-100"]}`}>
                        <div className={`${mobileStyles["menu-mobile-list"]}`}>
                            <ul className={`${mobileStyles["header-menu-mobile"]} ${mobileStyles["text-uppercase"]}`}>
                                <li className={`${mobileStyles["menu-item"]}`}>Features</li>
                                <li className={`${mobileStyles["menu-item"]}`}>Pricing</li>
                                <li className={`${mobileStyles["menu-item"]}`}>Contact</li>
                                <li className={`${mobileStyles["menu-item"]}`}>
                                    <div className={`${mobileStyles["menu-mobile-login"]}`}>Login</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={`${styles["col-12"]}`}>
                        <div className={`${mobileStyles["menu-mobile-icons"]}`}>
                            <img className={`${styles["img-fluid"]}`} src={Facebook} alt="Logo Facebook"/>
                            <img className={`${styles["img-fluid"]}`} src={Twitter} alt="Logo Twitter"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}