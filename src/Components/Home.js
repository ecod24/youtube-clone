import React from "react";
import Videos from "./Videos";
import { Link } from "react-router-dom";

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

				<section className="hidden">
					Results:
					{this.state.videos.map((video) => {
						return (
							<div>
								<Link to={`/videos/${video.id.videoId}`}>
									{video.snippet.title}
								</Link>
							</div>
						);
					})}
				</section>
			</main>
		);
	}
}

export default Home;
