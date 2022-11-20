import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Intro from '../../components/Intro';
import Card from '../../components/Card';
import Tabular from '../../components/Tabular';
import LoadingIndicator from '../../components/LoadingIndicator';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './index.css';


const Trade = () => {
	const { user } = useParams();
	const [popular, setPopular] = useState([{}]);
	const [orders, setOrders] = useState([{}]);
	const [matches, setMatches] = useState([{}]);
	const [loading, setLoading] = useState(true);

	const [type, setType] = useState();
	const [side, setSide] = useState();
	const [security, setSecurity] = useState();
	const [price, setPrice] = useState();
	const [qty, setQty] = useState();

	const fetchPopular = () => {
		setLoading(true);
		axios.get(`https://bloomberg-backend.herokuapp.com/listPopular`)
			.then((response) => setPopular(response.data))
			.then(setLoading(false))
			.catch((error) => console.error(error));
	}

	useEffect(() => {
		const interval = setInterval(fetchPopular, 1000)
		return () => {
			clearInterval(interval)
		}
	}, [])

	const fetchOrders = () => {
		setLoading(true);
		axios.get(`https://bloomberg-backend.herokuapp.com/listOrders/${user}`)
			.then((response) => setOrders(response.data))
			.then(setLoading(false))
			.catch((error) => console.error(error));
	}

	const fetchMatches = () => {
		setLoading(true);
		axios.get(`https://bloomberg-backend.herokuapp.com/listMatches/${user}`)
			.then((response) => setMatches(response.data))
			.then(setLoading(false))
			.catch((error) => console.error(error));
	}

	useEffect(() => {
		fetchOrders();
		fetchMatches();
	}, []);

	const submitOrder = () => {
		axios.post(`https://bloomberg-backend.herokuapp.com/${type.toLowerCase()}`, {type: type, side: side, security: security, price: price, qty: qty, user: user})
			.then((response) => console.log(response.status))
			.catch((error) => console.error(error));
	}
	
	return (
		<div className='trade'>
			<Intro>
				<h1>Welcome to your dashboard, {user}!</h1>
				<p>Here you can see an overview of your orders, match history, and the most popular trades right now!</p>
			</Intro>

			<Card>
				<strong>Most <span className='callout'>Popular</span> Stonks!</strong>
				{loading && <LoadingIndicator />}
				{!loading && <Tabular data={popular} />}
			</Card>

			<Card>
				<strong>Your Orders</strong>
				{loading && <LoadingIndicator />}
				{!loading && <Tabular data={orders} />}
			</Card>

			<Card>
				<strong>Your Match History</strong>
				{loading && <LoadingIndicator />}
				{!loading && <Tabular data={matches} />}
			</Card>

			<Card>
				<strong>Make an Order</strong>
				<Form.Label>Type</Form.Label>
				<Form.Select aria-label="Type" onChange={e => setType(e.target.value)}>
					<option>Select type</option>
					<option value="ADD">Add</option>
					<option value="DEL">Delete</option>
				</Form.Select>
				<Form.Label>Side</Form.Label>
				<Form.Select aria-label="Side" onChange={e => setSide(e.target.value)}>
					<option>Select side</option>
					<option value="BUY">Buy</option>
					<option value="SELL">Sell</option>
				</Form.Select>
				<Form.Label>Security</Form.Label>
				<Form.Control type="text" placeholder="Enter security name" value={security} onChange={e => setSecurity(e.target.value)}/>
				<Form.Label>Price</Form.Label>
				<Form.Control type="number" placeholder="Enter price" value={price} onChange={e => setPrice(e.target.value)}/>
				<Form.Label>Quantity</Form.Label>
				<Form.Control type="number" placeholder="Enter quantity" value={qty} onChange={e => setQty(e.target.value)} step={1}/>
				<Button className='submit' variant='primary' onClick={submitOrder}>
					Submit
				</Button>
			</Card>
		</div>
	);
}

export default Trade;
