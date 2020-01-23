import React, { Component } from "react";
import ProfilePic from "./GioProfilePic.jpg";

class GioProfilePic extends Component {
	render() {
		return (
			<img
				src={ProfilePic}
				style={{
					borderRadius: "50%",
					maxHeight: "250px"
				}}
				alt="Profile"
			/>
		);
	}
}

export default GioProfilePic;
