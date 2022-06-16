import React from 'react';
import Videos from './Videos';
import { Link } from 'react-router-dom';

class Home extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	updateVideos = (videos) => {
		this.setState({ videos: [...videos] });
	};

	render() {
		const { videos } = this.props;
		return (
			<main>
				<section className='videos'>
					{videos.map((video) => {
						return (
							<div>
								<Link to={`/videos/${video.id.videoId}`}>
									<h4>{video.snippet.title}</h4>
									<p>{video.snippet.channelTitle}</p>
									{/* figure out html problems in video links */}
									{console.log(video.snippet.title)}
									<img
										src={`${video.snippet.thumbnails.default.url}`}
										alt=''
									></img>
								</Link>
							</div>
						);
					})}
				</section>
			</main>
		);
	}
}

export default Home;
