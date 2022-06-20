import YouTube from "react-youtube";

// import Comments from './Components/Comments'
//https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=2Q_ZzBGPdqE&key=[YOUR_API_KEY]'
// import Videos from "./Videos";
import withParams from "./WithParams";

import React, { Component } from "react";

function Video() {
	const { id } = useParams();
	
	return (
		<div className="video-card">
			<div className="videos">
				<div>
					{/*STATE INFO TO PUT TITLE HERE STATE IS AFK HERE WHEN I RENDER WHY WTF*/}
					{/* {this.state.info.items[0].snippet.title} */}
				</div>
				<YouTube videoId={id} />
				</div>
			</div>
		);
	
}

export default withParams(Video);
