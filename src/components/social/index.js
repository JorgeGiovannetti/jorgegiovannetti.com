import React, { Fragment, Component } from "react";
import { SocialIcon } from "./elements";

class Social extends Component {
	render() {
		return (
			<Fragment>
				<div
					style={{
						display: "inline-block",
						marginBottom: "10px"
					}}
				>
					<SocialIcon
						style={{ marginLeft: "15px" }}
						url="https://github.com/JorgeGiovannetti"
						target="_blank"
						rel="noopener"
						bgColor="24292e"
					/>
					<SocialIcon
						url="https://www.linkedin.com/in/jorgegiovannetti/"
						target="_blank"
						rel="noopener"
					/>
					<SocialIcon
						url="https://open.spotify.com/artist/3wcBGxsP5MCM5jUPQNoXWC"
						target="_blank"
						rel="noopener"
					/>
				</div>
			</Fragment>
		);
	}
}
export default Social;
