import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import React from 'react';

class App extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	componentDidMount() {
		fetch();
	}
	render() {
		return (
			<div className='App'>
				<header>
					<img src={logo} className='App-logo' alt='logo' />
					<NavBar />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='about' element={<About />} />
					</Routes>
				</header>
			</div>
		);
	}
}

export default App;
