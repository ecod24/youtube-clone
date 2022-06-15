import React from "react";

class Home extends React.Component {
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
		event.preventDefault();
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
						/>
						<button className="search-button">Search</button>
					</label>
				</form>
			</main>
		);
	}
}

export default Home;
