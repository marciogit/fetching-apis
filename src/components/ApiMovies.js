import React, { useState, useEffect } from 'react';
import { MdMovie } from 'react-icons/md';
import axios from 'axios';

function ApiMovies() {

	const [ loading, setLoading ] = useState(false);
	const [ myMovie, setMyMovie ] = useState([]);

	const baseURLimg = "https://image.tmdb.org/t/p/w154/";

	useEffect(() => {
		async function loadData() {
			setLoading(true);
			await axios
			.get("https://api.themoviedb.org/3/movie/popular?api_key=a5cd74e00f91e1722f48bd2494ad31b0")
			.then((res) => {
				setLoading(false);
				setMyMovie(res.data.results);
			})
		}

		loadData()
	}, [])

	return (
		<>
			{loading ? <div>loading...</div> :
				<>
					{/* {myMovie.overview} */}
					{myMovie.map((movie, i) => (
						<div key={i} className="movies-card">
							<img src={baseURLimg+movie.poster_path} alt=""/>
							<div>
								<div className="row">
									<div className="title"><MdMovie/>{movie.original_title}</div>
								</div>
								<div className="row"></div>
							</div>
						</div>
					))}
				</>
			}
		</>
	)
}

export default ApiMovies;
