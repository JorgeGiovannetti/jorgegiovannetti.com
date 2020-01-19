import React, { Component, Fragment } from "react";
import GioNavbar from "../../components/gionavbar";
import { Layout } from "antd";

class NotFoundPage extends Component {
	render() {
		return (
			<Fragment>
				<GioNavbar></GioNavbar>
				<Layout>
					<div>Oopsie Woopsie, page not found.</div>
				</Layout>
			</Fragment>
		);
	}
}

export default NotFoundPage;
