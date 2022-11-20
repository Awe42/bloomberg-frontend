import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Feats from '../../components/Feats';
import Intro from '../../components/Intro';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './index.css';


const Home = () => {
	const [user, setUser] = useState('');
	const navigate = useNavigate();
	
	return (
		<div>
			<section className='section'>
				<Feats />
			</section>
			<section className='login section'>
				<Intro>
				<h1>Login or Register</h1>
				<p>If you're a returning user, please enter your username.</p>
				<p>Otherwise, please choose a new one!</p>
				<Form.Control className='username' type='text' placeholder='Username' value={user} onChange={(e) => setUser(e.target.value)} />
				<Button variant='primary' onClick={() => navigate(`/trade/${user}`)}>
					Submit
				</Button>
				</Intro>
			</section>
		</div>
	);
}

export default Home;
