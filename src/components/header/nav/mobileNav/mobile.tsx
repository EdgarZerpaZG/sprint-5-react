import styles from './../../../../_App.module.scss'
import navStyles from './../_nav.module.scss'

export default function MobileNav() {
  return (
    <>
        <div id="menu-mobile-btn" className={`${navStyles["header-list-mobile"]} ${styles["d-none"]} ${styles["d-md-block"]} ${styles["h-100"]}`}>
            <div className="menu-mobile-box h-100 d-flex justify-content-center align-items-center">
                <img className="img-fluid" src="img/icon-hamburger.svg" alt="Bookmark"/>
            </div>
        </div>
        <div id="menu-mobile" className={`${navStyles["menu-mobile"]} ${styles["d-none"]} ${styles["d-md-block"]}`}>
            <div id="menu-mobile-close" className="btn-close-box">
                <img className="img-fluid btn-close" src="img/icon-close.svg" alt="Bookmark"/>
            </div>
            <div className="menu-mobile-logo">
                <img className="img-fluid" src="img/logo-bookmark-white.svg" alt="Bookmark"/>
            </div>
            <div className="menu-mobile-content">
                <div className="h-100 w-100">
                    <div className="col-12 h-100">
                        <div className="menu-mobile-list">
                            <ul className="header-menu-mobile text-uppercase">
                                <li className="menu-item">Features</li>
                                <li className="menu-item">Pricing</li>
                                <li className="menu-item">Contact</li>
                                <li className="menu-item">
                                    <div className="menu-mobile-login">Login</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="menu-mobile-icons">
                            <img className="img-fluid" src="img/icon-facebook.svg" alt="Logo Facebook"/>
                            <img className="img-fluid" src="img/icon-twitter.svg" alt="Logo Twitter"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}