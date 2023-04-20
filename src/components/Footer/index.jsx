//import styled from 'styled-components'
import Logo from '../../assets/logo_footer.png'

/*const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 75px;
`*/

export default function Footer() {
    return (
        <footer className='footer-wrapper'>
            <img src={Logo} alt="logo de kasa" />
            <p>
                © 2020 Kasa. All rights reserved
            </p>
        </footer>
    )
}