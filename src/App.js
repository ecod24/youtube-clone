import "./App.css";
import NavBar from "./Components/NavBar";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Videos from "./Components/Videos";

class App extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="App">
				<header>
					<NavBar />

					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/videos/:id" element={<Videos />} />
						{/* <Route path="/search/:id" element={<Search />} /> */}
					</Routes>
				</header>
			</div>
		);
	}
}
export default App;
