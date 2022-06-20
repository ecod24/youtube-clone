import YouTube from "react-youtube";

// import Comments from './Components/Comments'
//https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=2Q_ZzBGPdqE&key=[YOUR_API_KEY]'
// import Videos from "./Videos";
import withParams from "./WithParams";

import React, { Component } from "react";

class Video extends Component {
	constructor() {
		super();
		this.state = {
			info: {},
		};
	}
	getYoutubeInfo = () => {};
	async componentDidMount() {
		const { id } = this.props.params;
		await fetch(
			`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${process.env.REACT_APP_API_KEY}`
		)
			.then((response) => response.json())
			.then((object) => {
				console.log("this actually ran");
				this.setState({ info: object });
				console.log(this.state.info);
			})
			.catch((error) => console.log(error, "oh well"));
	}
	render() {
		const { id } = this.props.params;
		return (
			<div>
				{" "}
				<div>
					{/*STATE INFO TO PUT TITLE HERE STATE IS AFK HERE WHEN I RENDER WHY WTF*/}
					{/* {this.state.info.items[0].snippet.title} */}
				</div>
				<YouTube videoId={id} />
			</div>
		);
	}
}

export default withParams(Video);
