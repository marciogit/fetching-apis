import React, { useState, useEffect } from 'react';
import { FaRegNewspaper, FaViber, FaMailBulk, FaMapMarked, FaMapMarkerAlt } from "react-icons/fa";
import classNames from 'classnames';
import axios from 'axios';

function ApiWithAxios() {

	const [ loading, setLoading ] = useState(false);
	const [ loadData, setLoadData ] = useState([]);

	useEffect(() => {
		async function LoadData() {
			setLoading(true);
			await axios
			.get('https://randomuser.me/api/?results=5')
			.then((res) => {
				setLoading(false);
				setLoadData(res.data.results);
			}).catch(err => {
				console.log(err);
			})
		}

		LoadData();
	}, []);

	return (
		<>
			<h3>Api with Axios...</h3>

			{loading ? <div>Loading...</div> :
				<>
					{loadData.map((person, i) => (
						<div className="card" key={i}>
							{/* Photo */}
							<div className={classNames('photo', person.name.title === 'Mr' ? "male" : "female")}>
								<img src={person.picture.large} alt=""/>
							</div>

							{/* Details */}
							<div className="details">
								<div className="row">
									<FaRegNewspaper/><p><span className="title">{person.name.title}</span> {person.name.first} {person.name.last}</p>
								</div>

								<div className="row"><FaViber/> {person.phone}</div>
								<div className="row"><FaMailBulk/> {person.email}</div>
								<div className="row"><FaMapMarked/> {person.location.country} <FaMapMarkerAlt/> {person.location.state}</div>
							</div>
						</div>
					))}
				</>
			}
		</>
	)
}

export default ApiWithAxios;
