import React, { Component } from "react";
import { Menu } from "antd";
import { Link, withRouter } from "react-router-dom";

class GioNavbar extends Component {
	render() {
		const {
			location: { pathname }
		} = this.props;

		return (
			<Menu
				theme="dark"
				onClick={this.handleClick}
				selectedKeys={[pathname]}
				mode="horizontal"
			>
				<Menu.Item key="/portfolio" style={{ float: "right" }}>
					<Link to="/portfolio">Portfolio</Link>
				</Menu.Item>
				<Menu.Item key="/" style={{ float: "right" }}>
					<Link to="/">About Me</Link>
				</Menu.Item>
			</Menu>
		);
	}
}

export default withRouter(GioNavbar);
