import { Component } from "react";
import YouTube from "react-youtube";

class Videos extends Component {
	constructor() {
		super();
		this.state = {
			id: "",
		};
	}
	componentDidMount() {
		this.getVideo();
	}
	getVideo = () => {
		const { searchQuery } = this.props;
		fetch(
			`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=test&key=${process.env.REACT_APP_API_KEY}`
		)
			.then((response) => {
				return response.json();
			})
			.then((obj) => {
				// console.log(obj);
				this.setState({ id: obj.items[0].id.videoId });
			});
	};
	render() {
		return (
			<div className="video-card">
				<div className="videos">
					<div>
						<YouTube videoId={this.state.id} opts={{ height: "690", width: "1040" }} />
					</div>
				</div>
			</div>
		);
	}
}

export default Videos;
