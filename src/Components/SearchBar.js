import React from "react";

class SearchBar extends React.Component {
	constructor() {
		super();
		this.state = {
			searchBar: "",
		};
	}
	handleSearch = (event) => {
		const { value } = event.target;
		this.setState({ searchBar: value });
	};

	handleSubmit = (event) => {
		const { updateVideos } = this.props;
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
				updateVideos(obj.items);
			});
		this.setState({ searchBar: '' });
	} ;

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
						/>
						<button className="search-button">Search</button>
					</label>
				</form>
                <div>

                </div>
			</main>
		);
	}
}

export default SearchBar;
