import React, { Component } from "react";
import VMEditor from "./VMEditor";
import "./style.css";
export class Container extends Component {
	render() {
		return (
			<div className="container">
				<h1 className="title">VM Editor</h1>
				<div className="editor-container">
					<VMEditor />
				</div>
			</div>
		);
	}
}

export default Container;
