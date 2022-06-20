import YouTube from "react-youtube";
import withParams from "./WithParams";
import React, { Component } from "react";

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
			<div>
				{" "}
				<YouTube videoId={id} />
			</div>
		);
	}
}

export default withParams(Video);
