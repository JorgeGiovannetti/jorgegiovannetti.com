import React, { Component, Fragment } from "react";
import { Layout } from "antd";

class NotFoundPage extends Component {
	render() {
		return (
			<Fragment>
				<Layout>
					<div>Oopsie Woopsie, page not found.</div>
				</Layout>
			</Fragment>
		);
	}
}

export default NotFoundPage;
