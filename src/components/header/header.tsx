import Nav from '../nav/nav'
import Logo from '../logo/logo'
import BookMark from '/logo-bookmark.svg'

function Header() {
  return (
    <>
      <header>
        <Logo src={BookMark} alt="Logo Bookmarks" />
        <Nav />
      </header>
    </>
  )
}
export default Header