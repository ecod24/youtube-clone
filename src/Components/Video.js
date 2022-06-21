import YouTube from "react-youtube";
import withParams from "./WithParams";
import React, { Component } from "react";
import "./Video.css";
import CommentSection from "./CommentSection";

class Video extends Component {
	constructor() {
		super();
		this.state = {
			info: {},
		};
	}
	render() {
		const { id } = this.props.params;
		return (
			<div className="player">
				{" "}
				<YouTube videoId={id} />
				<br />
				<CommentSection />
			</div>
		);
	}
}
export default withParams(Video);
