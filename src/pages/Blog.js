import React from 'react';
import './Blog.scss';
import path from '../blog_files/website-creation.md';

import ReactMarkdown from "react-markdown";

class Blog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {markdown:null}
	}

	componentWillMount() {
		fetch(path).then(response => response.text()).then(text => {
			this.setState({markdown: text})
		});
	}

	render() {
		return (
			<div className="blog-content">
				<ReactMarkdown source={this.state.markdown} />
			</div>
		)
	}
}

export default Blog;