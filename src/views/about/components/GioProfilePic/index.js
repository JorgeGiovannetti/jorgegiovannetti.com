import React, { Component } from "react";
import ProfilePic from "./GioProfilePicSmall.webp";

class GioProfilePic extends Component {
	render() {
		return (
			<img
				src={ProfilePic}
				style={{
					borderRadius: "50%"
				}}
				alt="Profile"
			/>
		);
	}
}

export default GioProfilePic;
