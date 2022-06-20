import React from 'react';
import { Link } from 'react-router-dom';
import './Videos.css';

export default function Videos(props) {
	const { vids } = props;
	return (
		<div>
			{vids.map((video) => {
				return (
					<div className="video-list">
						<Link key={video.etag} to={`/videos/${video.id.videoId}`}>
							<div>
								<img
									src={`${video.snippet.thumbnails.default.url}`}
									alt=''
								></img>
							</div>
						</Link>
						<div>
							<Link key={video.etag} to={`/videos/${video.id.videoId}`}>
								<h3>{video.snippet.title}</h3>
							</Link>
							<h5>{video.snippet.channelTitle}</h5>

							<p className="description">{video.snippet.description}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}
