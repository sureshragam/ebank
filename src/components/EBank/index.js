import {Component} from 'react'
import Header from '../Header'
import {
  EBankContainer,
  EBankContentContainer,
  Heading,
  Image,
} from './styledComponents'

class EBank extends Component {
  render() {
    return (
      <EBankContainer>
        <Header />
        <EBankContentContainer>
          <Heading>Your Flexibility, Our Excellence</Heading>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
            alt="digital card"
          />
        </EBankContentContainer>
      </EBankContainer>
    )
  }
}

export default EBank
