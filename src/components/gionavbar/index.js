import React, { Component } from "react";
import { Menu, Button } from "antd";
import { Link, withRouter } from "react-router-dom";

class GioNavbar extends Component {
	render() {
		const {
			location: { pathname }
		} = this.props;

		return (
			<Menu
				// theme="dark"
				style={{ background: "#0a192f" }}
				onClick={this.handleClick}
				selectedKeys={[pathname]}
				mode="horizontal"
			>
				<Button
					style={{ float: "right" }}
					size="large"
					type="secondary"
					href="https://drive.google.com/file/d/1gANwTHqRcKbsLY0w4doSW7wEBnkEyWAH/view?usp=drive_open"
					rel="noopener"
					target="_blank"
				>
					Resume
				</Button>
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
