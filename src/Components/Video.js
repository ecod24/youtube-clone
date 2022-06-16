import { Component } from "react";
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";
// import Comments from './Components/Comments'

function Video() {
	const { id } = useParams();
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		id: "",
	// 	};
	// }
	// componentDidMount() {
	// 	this.getVideo();
	// }
	// getVideo = () => {
	// 	const { searchQuery } = this.props;
	// 	fetch(
	// 		`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=test&key=${process.env.REACT_APP_API_KEY}`
	// 	)
	// 		.then((response) => {
	// 			return response.json();
	// 		})
	// 		.then((obj) => {
	// 			// console.log(obj);
	// 			this.setState({ id: obj.items[0].id.videoId });
	// 		});
	// };
	// render() {
	return (
		<div className="video-card">
			<div className="videos">
				<div>
<<<<<<< HEAD:src/Components/Videos.js
					<YouTube videoId={id} opts={{ height: "690", width: "1040" }} />
					
=======
					<p>{/*video title */}</p>
					<YouTube videoId={id} />
					<p> {/*video description*/}</p>
>>>>>>> a46f93ba048a5478af84b17ec4e0568390e04b0a:src/Components/Video.js
				</div>
				{/* <Comments /> */}
			</div>
		</div>


	);

}
//opts={{ height: "690", width: "1040" }}
// }

export default Video;
