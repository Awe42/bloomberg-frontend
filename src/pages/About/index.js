import React from 'react';
import Intro from '../../components/Intro';
import './index.css';

const About = () => {
	return (
		<div className='about'>
			<Intro>
				<h1>About Page</h1>
				<p>Who has an about section in a Hackathon project? 😋</p>
				<p>But for the 4 of us - Dilvan, Sarra, Guowen and Anish - it was our first hackathon at TUM and was a lot of fun.</p>
				<p>And we just wanted to acknowledge the awesomeness of this event! 🤗</p>
				<p>Here's to many more cool ideas and projects (with hopefully less sleeping on campus) 🍾</p>
			</Intro>
		</div>
	);
}

export default About;
