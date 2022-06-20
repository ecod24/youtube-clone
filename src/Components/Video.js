import YouTube from "react-youtube";
import { useParams } from "react-router-dom";
// import Comments from './Components/Comments'

function Video() {
	const { id } = useParams();
	
	return (
		<div className="video-card">
			<div className="videos">
				<div>
					<p>{/*video title */}</p>
					<YouTube videoId={id} />
					<p> {/*video description*/}</p>
				</div>
				{/* <Comments /> */}
			</div>
		</div>


	);

}


export default Video;
