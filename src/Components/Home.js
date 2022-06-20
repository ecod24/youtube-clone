import React from "react";
import Videos from "./Videos";
import "./Home.css";

function Home(props) {
	const { videos } = props;
	return (
		<main>
			<section className="videos">{<Videos key="vidz" vids={videos} />}</section>
		</main>
	);
}

export default Home;
