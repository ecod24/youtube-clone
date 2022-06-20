import React from "react";
import Videos from "./Videos";
import "./Home.css" 

class Home extends React.Component {
	constructor() {
		super();
		this.state = {};
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
		const { videos } = this.props;
		return (
			<main>
				<section className="videos">
					{
						<div>
							<Videos key="vidz" vids={videos} />
						</div>
					}
				</section>
			</main>
		);
	}
}

export default Home;
