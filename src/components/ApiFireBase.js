import React, { useState, useEffect } from 'react';
import { DB_CONFIG } 		from '../config/db'
import * as firebase 		from 'firebase'
firebase.initializeApp(DB_CONFIG);

function ApiFireBase() {

	const [ menu, setMenu ] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const data = await firebase
			.firestore()
			.collection("current_week")
			.get()

			setMenu(data.docs.map(doc => doc.data()));
		}

		fetchData();
	}, [])

	return (
		<>
			<p>{menu.map((item, i)=> (
				<div className="card">
				<span>{item.day}</span> /
				<span>{item.regular}</span> /
				<span>{item.vegetarian}</span> /
				<span>{item.salad}</span>
				<span>{item.dessert}</span>
				<span>{item.holiday}</span>
				</div>
			))}</p>
		</>
	)
}

export default ApiFireBase;
