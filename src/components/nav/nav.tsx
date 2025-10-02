import navStyles from './_nav.module.scss'
function Nav() {

  return (
    <>
      <nav className={navStyles.navbar}>
        <ul className={navStyles.list}>
            <li className={navStyles.item}>Features</li>
            <li className={navStyles.item}>Pricing</li>
            <li className={navStyles.item}>Contact</li>
            <li className={navStyles.login}>Login</li>
        </ul>
      </nav>
    </>
  )
}

export default Nav