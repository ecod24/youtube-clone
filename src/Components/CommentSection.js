import React from "react";
import "./CommentSection.css";

class CommentSection extends React.Component {
	constructor() {
		super();
		this.state = {
			commentName: "",
			comment: "",
			comments: [],
		};
	}

	handleComment = (event) => {
		this.setState({ comment: event.target.value });
	};
	handleCommentName = (event) => {
		this.setState({ commentName: event.target.value });
	};
	handleSubmit = (event) => {
		event.preventDefault();
		let commentStr = `${this.state.commentName}: ${this.state.comment}`;
		this.setState({ comments: [...this.state.comments, commentStr] });

		this.setState({ commentName: "" });
		this.setState({ comment: "" });
	};

	render() {
		return (
			<>
				<h3>Comments</h3>
				<form onSubmit={this.handleSubmit}>
					<label>
						Name
						<input
							value={this.commentName}
							type="text"
							id="commentName"
							name="commentName"
							placeholder="Name"
							onChange={this.handleCommentName}
						/>
					</label>
					<br />
					<label>
						Add comment
						<input
							value={this.state.comment}
							type="text"
							id="comments"
							name="comments"
							placeholder="Add a comment..."
							onChange={this.handleComment}
						/>
						<button>Submit</button>
					</label>
				</form>
				<div className="list-comments">
					{this.state.comments.map((comment) => {
						return <p>{comment}</p>;
					})}
				</div>
			</>
		);
	}
}

export default CommentSection;
