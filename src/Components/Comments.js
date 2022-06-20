import React from 'react';

class Comments extends React.Component {
	constructor() {
		super();
		this.state = {
			commentName: '',
			comment: '',
		};
	}

	handleComments = (event) => {
		this.setState({ comment: event.target.value });
	};
	handleCommentName = (event) => {
		this.setState({ commentName: event.target.value });
	};
	handleSubmit = (event) => {
		event.preventDefault();
		
		this.setState({ commentName: '' });
		this.setState({ comment: '' });

		// add comment and comment name to end of page
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					<input
						value={this.commentName}
						type='text'
						id='commentName'
						name='commentName'
						placeholder='Name'
						onChange={this.handleCommentName}
					/>
				</label>
				<label>
					<input
						value={this.state.comment}
						type='text'
						id='comments'
						name='comments'
						placeholder='Add a comment...'
						onChange={this.handleComments}
					/>
					<button>Submit</button>
				</label>
			</form>
		);
	}
}

export default Comments;
