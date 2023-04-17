import styled from 'styled-components'
import Logo from '../../assets/LOGO.svg'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
`

function Footer() {
    return (
        <FooterContainer>
            <img src={Logo} alt="logo de kasa" />
            <p>
                © 2020 Kasa. All rights reserved
            </p>
        </FooterContainer>
    )
}

export default Footer