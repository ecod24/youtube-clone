import './App.css';
import NavBar from './Components/NavBar';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Videos from './Components/Videos';
import SearchBar from "./Components/SearchBar"

class App extends React.Component {
	constructor() {
		super();
		this.state = {
      videos: [],
    };
	}

  updateVideos = (videos) => {
    this.setState({videos:[...videos]})
}

	render() {
		return (
			<div className='App'>
				<header>
					<NavBar />
          <SearchBar updateVideos={this.updateVideos} />
					<Routes>
						<Route path='/' element={<Home videos={this.state.videos}/>} />
						<Route path='/about' element={<About />} />
						<Route path='/videos/:id' element={<Videos />} />
					</Routes>
				</header>
			</div>
		);
	}
}
export default App;
