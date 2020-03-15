import React, { useState, useEffect } from 'react';
import Unsplash from 'unsplash-js';
import axios from 'axios';

function ApiUnsplash() {

	const [ dataUnsplash, setUnsplash ] = useState([]);

	useEffect(() => {

		async function loadData() {
			await fetch('https://api.unsplash.com/photos/?client_id=476ed86a3d2daf9ba170566300a83d4f79936be342152637552c3324d7f1d7c8')
			.then(res => res.json())
			.then(data => {
				setUnsplash(data);
				console.log(data);
			})
		}

		loadData()
	},[]);

	return (
		<>
		{dataUnsplash.map((image, i)=> (
			<div><img src={image.urls.small} alt=""/></div>
		))}
		</>
	)
}

export default ApiUnsplash;
