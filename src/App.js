import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import React from 'react';

class App extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div>
				<NavBar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='About' element={<About />} />
				</Routes>
			</div>
		);
	}
}

export default App;
