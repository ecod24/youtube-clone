import React from "react";
import Videos from "./Videos";
import "./Home.css" 

class Home extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

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
