import React, { useState } from 'react';
import classNames from 'classnames';
import { Button } from "antd";
import ApiWithAxios from './ApiWithAxios';
import ApiWithFetch from './ApiWithFetch';
import ApiMovies  from './ApiMovies';

// Css
import "antd/dist/antd.css";
import '../css/index.css';

function App() {

	const appNavigation = [
		{ menu: 'Axios', component: <ApiWithAxios/>},
		{ menu: 'Fetch', component: <ApiWithFetch/>},
		{ menu: 'Movies', component: <ApiMovies/>},
		{ menu: 'Firebase', component: <ApiWithFetch/>},
	]

	const [ activeMenu, setActiveMenu ] = useState(2);

	return (
		<div className="App">

			{appNavigation.map((menu, i) => (
				<Button
					onClick={() => setActiveMenu(i)}
					className={classNames('ant-btn-primary', i === activeMenu ? "ant-btn-danger" : "")}>
					{menu.menu}
				</Button>
			))}

			{appNavigation.map((component,i) => (
				<div className={classNames('content', i === activeMenu ? 'show' : "")}>
					{component.component}
				</div>
			))}
		</div>
	);
}

export default App;
