import navStyles from './nav.module.css'
function Nav() {

  return (
    <>
      <nav>
          <div className={navStyles.navbar}>
              <ul className={navStyles.list}>
                  <li className={navStyles['list-item']}>Features</li>
                  <li className={navStyles['list-item']}>Pricing</li>
                  <li className={navStyles['list-item']}>Contact</li>
                  <li className={navStyles['list-item']}>Login</li>
              </ul>
          </div>
      </nav>
    </>
  )
}

export default Nav