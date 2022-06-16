import YouTube from "react-youtube";
import { useParams } from "react-router-dom";

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
					<p>{/*video title */}</p>
					<YouTube videoId={id} />
					<p> {/*video description*/}</p>
				</div>
			</div>
		</div>
	);
}
//opts={{ height: "690", width: "1040" }}
// }

export default Video;
