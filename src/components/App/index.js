import React from 'react';
import Loadable from 'react-loadable';
import { Routes, Route } from 'react-router-dom';
import Footer from '../Footer';
import Hero from '../Hero';
import './index.css';

// Route-Split Components
const loading = () => <div>Loading...</div>;
const load = loader => Loadable({ loader, loading });

const Home = load(() => import('../../pages/Home'));
const About = load(() => import('../../pages/About'));
const Trade = load(() => import('../../pages/Trade'));

const App = () => {

	return (
		<div className='app'>
			<Hero />

			<main className='wrapper'>
				<Routes>
					<Route path="/" element={ <Home /> } />
					<Route path="/trade/:user" element={ <Trade /> } />
					<Route path="/about" element={ <About /> } />
				</Routes>
			</main>

			<Footer />
		</div>
	);
}

export default App;
