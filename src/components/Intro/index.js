import React from 'react';
import './index.css';

const Intro = (props) => {
	return (
		<header className='intro'>
			{ props.children }
		</header>
	);
}

export default Intro;