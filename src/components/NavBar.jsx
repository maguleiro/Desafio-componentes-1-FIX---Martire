
/*
const NavBar = ({ name })=>{
	const displayName = name.toUpperCase();
	return (<nav className="nav">
				<div class="nav__menu">
					<a href="index.html" class="nav__logo">{displayName}</a>
					<a href="productos.html" className="nav__item">Productos</a>
					<a href="regalos.html" className="nav__item">Contacto</a>
					<a href="contacto.html" className="nav__item">Nosotros</a>
					<a href="nosotros.html" className="nav__item">Mas...</a>
				</div>	
		</nav>
		);
};
*/

import React, {Component} from 'react';

class NavBar extends Component {
	constructor(props){
		super(props);
	}
	render(){
		const displayName = this.props.name.toUpperCase();
		return(
		<nav className="nav">
				<div class="nav__menu">
					<a href="index.html" class="nav__logo">{displayName}</a>
					<a href="productos.html" className="nav__item">Productos</a>
					<a href="regalos.html" className="nav__item">Contacto</a>
					<a href="contacto.html" className="nav__item">Nosotros</a>
					<a href="nosotros.html" className="nav__item">Mas...</a>
				</div>	
		</nav> );
	}
}

export default NavBar;