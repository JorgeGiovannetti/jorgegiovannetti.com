import React, { Component, Fragment } from "react";
import GioNavbar from "../../components/gionavbar";
class PortfolioPage extends Component {
	render() {
		return (
			<Fragment>
				<style>{"body { background-color: #f0f0f0 }"}</style>
				<GioNavbar></GioNavbar>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center"
					}}
				>
					<h1>Projects</h1>
					<h2 style={{ color: "#b9541d" }}>Under Construction</h2>
				</div>
			</Fragment>
		);
	}
}

export default PortfolioPage;
