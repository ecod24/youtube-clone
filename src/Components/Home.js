import React from "react";
import { Link } from "react-router-dom";
import Videos from "./Videos";

class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			searchBar: "",
			videos: [],
		};
	}

	handleSearch = (event) => {
		const { value } = event.target;
		this.setState({ searchBar: value });
	};
	handleSubmit = (event) => {
		event.preventDefault();
		if (!this.state.searchBar) {
			alert("No search results yet! Please submit a search above");
			return;
		}
		fetch(
			`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${this.state.searchBar}&key=${process.env.REACT_APP_API_KEY}`
		)
			.then((response) => response.json())
			.then((obj) => {
				this.setState({ videos: [...obj.items] });
			});
		this.setState({ searchBar: "" });
	};

	render() {
		return (
			<main>
				<form onSubmit={this.handleSubmit}>
					<label>
						<input
							value={this.state.searchBar}
							type="text"
							id="search"
							name="search"
							placeholder="Search..."
							onChange={this.handleSearch}
							autoComplete="no"
						/>
						<button className="search-button">Search</button>
					</label>
				</form>

				<section className="videos">
					{
						<div>
							<Videos vids={this.state.videos} />
						</div>
					}
				</section>
			</main>
		);
	}
}

export default Home;
