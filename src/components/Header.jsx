import Logo from '../assets/react.svg'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
			<div className="container">
      	<img src={Logo} alt="" />
			<h2>Famímia</h2>
			<nav>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='/professores'>Professores</NavLink>
			</nav>
			</div>
    </header>
  )
}

export default Header
