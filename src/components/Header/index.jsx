import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/LOGO.svg'


const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
`

function Header() {
    return (
        <HeaderContainer>
            <img src={Logo} alt="logo de kasa" />
            <nav>
                <Link to='/' >Accueil</Link>
                <Link to='/about'>A Propos</Link>
            </nav>
        </HeaderContainer>
    )
}

export default Header