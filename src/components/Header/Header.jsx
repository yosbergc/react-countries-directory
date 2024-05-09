import Logo from '../../assets/svg/Logo.svg'
import './Header.css'
function Header () {
    return <header>
        <img src={Logo} alt='WorldRanks Logo'/>
    </header>
}
export { Header }