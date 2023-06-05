import {Component} from 'react'

import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  LoginContainer,
  LoginContentContainer,
  Form,
  ImageContainer,
  Image,
  Heading,
  Input,
  Label,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {userId: '', pin: '', errorMSg: '', showErrorMsg: false}

  onFetchSuccess = token => {
    Cookies.set('jwt_token', token, {expires: 30})
    this.setState({userId: '', pin: '', errorMSg: '', showErrorMsg: false})
    const {history} = this.props
    history.replace('/')
  }

  onFetchFailure = msg => {
    this.setState({userId: '', pin: '', errorMSg: msg, showErrorMsg: true})
  }

  onChangeUserId = event => {
    this.setState({userId: event.target.value})
  }

  onChangePin = event => {
    this.setState({pin: event.target.value})
  }

  onLogin = async event => {
    event.preventDefault()
    const {userId, pin} = this.state
    const url = 'https://apis.ccbp.in/ebank/login'
    const userDetails = {
      user_id: userId,
      pin,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      this.onFetchSuccess(data.jwt_token)
    } else {
      const data = await response.json()
      this.onFetchFailure(data.error_msg)
    }
  }

  render() {
    const {userId, pin, errorMSg, showErrorMsg} = this.state
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginContainer>
        <LoginContentContainer>
          <ImageContainer>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
              alt="website login"
            />
          </ImageContainer>

          <Form onSubmit={this.onLogin}>
            <Heading>Welcome Back!</Heading>
            <Label htmlFor="userId">User ID</Label>
            <Input
              type="text"
              placeholder="Enter User ID"
              value={userId}
              onChange={this.onChangeUserId}
              id="userId"
            />
            <Label htmlFor="pin">PIN</Label>
            <Input
              type="password"
              placeholder="Enter PIN"
              value={pin}
              onChange={this.onChangePin}
              id="pin"
            />
            <LoginButton type="submit">Login</LoginButton>
            {showErrorMsg && <ErrorMsg>*{errorMSg}</ErrorMsg>}
          </Form>
        </LoginContentContainer>
      </LoginContainer>
    )
  }
}
export default Login
