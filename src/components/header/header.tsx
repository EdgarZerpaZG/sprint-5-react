import Nav from './nav/nav'
import Logo from './logo/logo'
import logoStyles from './logo/_logo.module.scss'
import styles from './../../_App.module.scss'
import BookMark from '/logo-bookmark.svg'

export default function Header() {
  return (
    <>
      <header className={`${styles["container"]} ${styles['my-3']}`}>
        <div className={`${styles['row']} ${styles['justify-content-between']}`}>
          <div className={`${styles["col-md-6"]}`}>
            <div className={logoStyles['logo-box']}>
              <Logo src={BookMark} style={logoStyles.logo} alt="Logo Bookmarks" />
            </div>
          </div>
          <div className={`${styles["col-md-6"]}`}>
            <Nav />
          </div>
        </div>
      </header>
    </>
  )
}