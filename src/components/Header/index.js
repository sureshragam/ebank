import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {Navbar, Image, LogoutButton} from './styledComponents'

const Header = props => {
  const onLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/ebank/login')
  }
  return (
    <Navbar>
      <Image
        src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
        alt="website logo"
      />
      <LogoutButton type="button" onClick={onLogout}>
        Logout
      </LogoutButton>
    </Navbar>
  )
}

export default withRouter(Header)
