import { Link } from 'react-router-dom'
import Logo from '../../assets/LOGO.svg'


function Header() {
    return (
        <header className='HeaderContainer'>
            <img src={Logo} alt="logo de kasa" />
            <nav>
                <Link to='/Kasa' >Accueil</Link>
                <Link to='/about'>A Propos</Link>
            </nav>
        </header>
    )
}

export default Header