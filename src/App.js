import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import React from 'react';
import { Route, Routes} from "react-router-dom"
import Home from './Components/Home'
import About from "./Components/About"

class App extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className='App'>
				<header>
					<img src={logo} className='App-logo' alt='logo' />
					<NavBar />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
					</Routes>
				</header>
			</div>
		);
	}
}

export default App;
