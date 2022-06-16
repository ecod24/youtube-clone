import React from "react";
import Video from "./Video";
import { Link } from "react-router-dom";
import "./Videos.css";
import { Route, Routes } from "react-router-dom";

export default function Videos(props) {
	const { vids } = props;
	return (
		<div>
			{vids.map((video) => {
				return (
					<Link to={`/video/${video.id.videoId}`}>
						<section>
							<div>
								<img src={`${video.snippet.thumbnails.default.url}`} alt=""></img>
							</div>
							<div>
								<h3>{video.snippet.title}</h3>
								<h5>{video.snippet.channelTitle}</h5>
							</div>
						</section>
					</Link>
				);
			})}
		</div>
	);
}
