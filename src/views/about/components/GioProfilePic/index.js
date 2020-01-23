import React, { Component } from "react";
import ProfilePic from "./GioProfilePic200px.webp";

class GioProfilePic extends Component {
	render() {
		return (
			<img
				src={ProfilePic}
				style={{
					borderRadius: "50%"
					// maxHeight: "200px"
				}}
				alt="Profile"
			/>
		);
	}
}

export default GioProfilePic;
