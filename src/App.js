import './App.css';
import NavBar from './Components/NavBar';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Videos from './Components/Videos';
import SearchBar from "./Components/SearchBar"
 import logo from './logo.svg';
 import './App.css';
//import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';


// const App = () => {
    //  return (
    //    <Router>
    //      <div>
    //        <nav>
    //        <Link to="/"id="nav-home"><p><strong>YouTube</strong></p></Link>
    //          <Link to="/" id="nav-home"><p>Home</p></Link>
    //          <Link to="/about" id="nav-about"><p>About Us</p></Link>
    //        </nav>
    //        <Switch>
    //          <Route exact path="/">
    //            <Home />
    //          </Route>
      
    //          <Route path="/about">
    //            <About />
    //          </Route>
    //          <Route path="/videos/:id" component={Videos}>
    //          </Route>
    //        </Switch>
    //      </div>
    //    </Router>
    //  );
    //   }







import "./App.css";
import NavBar from "./Components/NavBar";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Video from "./Components/Video";

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
					{/* <Home/> */}
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/videos/:id" element={<Video />} />
					</Routes>
				</header>
			</div>
		);
	}
}
export default App;
