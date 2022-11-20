import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Nav = () => {

	return (
		<nav className='nav'>
			<ul className='links'>
				<li><Link to='/'>Home</Link></li>
				<li><Link to='/about'>About</Link></li>
			</ul>

			<ul>
				<li><a href='https://github.com/Awe42/hackaTUM22/tree/bloomberg' target='_blank' rel='noreferrer' className='link_external'>GitHub</a></li>
			</ul>
		</nav>
	);
}

export default Nav;