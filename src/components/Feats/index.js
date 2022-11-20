import React from 'react';
import items from '../../assets/features.json';
import Card from '../Card';
import './index.css';

function Item(props) {
	return (
		<Card>
			<div key={ props.title } className='item'>
				<h3>{ props.title }</h3>
				<p>{ props.text }</p>
			</div>
		</Card>
	);
}

const Feats = () => {
	return (
		<div className='features'>
			{ items.map(Item) }
		</div>
	);
}

export default Feats;