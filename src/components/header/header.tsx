import Nav from '../nav/nav'
import Logo from '../logo/logo'
import logoStyles from '../logo/_logo.module.scss'
import headerStyles from './_header.module.scss'
import BookMark from '/logo-bookmark.svg'

function Header() {
  return (
    <>
      <header className={headerStyles['header img']}>
        <div className={logoStyles['logo-box']}>
          <Logo src={BookMark} style={logoStyles.logo} alt="Logo Bookmarks" />
        </div>
        <Nav />
      </header>
    </>
  )
}
export default Header