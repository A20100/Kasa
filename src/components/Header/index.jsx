import { NavLink } from 'react-router-dom'
import Logo from '../../assets/LOGO.svg'


function Header() {
    return (
        <header className='HeaderContainer'>
            <img src={Logo} alt="logo de kasa" />
            <nav>
                <NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to='/' >Accueil</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to='/about'>A Propos</NavLink>
            </nav>
        </header>
    )
}

export default Header