import navStyles from './_nav.module.scss'
import styles from './../../../_App.module.scss'

export default function Nav() {

  return (
    <>
      <div className={`${styles["header-list"]} ${styles["d-block"]} ${styles["d-md-none"]}`}>
        <ul className={navStyles.list}>
            <li className={navStyles.item}>Features</li>
            <li className={navStyles.item}>Pricing</li>
            <li className={navStyles.item}>Contact</li>
            <li className={`${styles["btn-red"]} ${navStyles.item}`}>Login</li>
        </ul>
      </div>
    </>
  )
}