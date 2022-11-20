import React from 'react';
import Nav from '../Nav';
import './index.css';


const Hero = () => {

	return (
		<header className='hero'>
			<Nav />
			<div className='titles'>
				<h1>Stonks 🗠</h1>
				<h3>Your Trading Platform</h3>
			</div>
		</header>
	);
}

export default Hero;