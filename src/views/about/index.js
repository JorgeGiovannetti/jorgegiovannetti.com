import React, { Component, Fragment } from "react";
import GioNavbar from "../../components/gionavbar";
import { Button, Typography } from "antd";
import { Row } from "antd";
import { gold } from "@ant-design/colors";
import GioProfilePic from "./GioProfilePicSmall.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLinkedin,
	faSpotify,
	faGithub
} from "@fortawesome/free-brands-svg-icons";

class AboutPage extends Component {
	render() {
		return (
			<Fragment>
				<GioNavbar></GioNavbar>
				<div
					align="middle"
					style={{
						display: "flex",
						flexDirection: "column"
					}}
				>
					<Row>
						<Typography>
							<h1 style={{ color: gold.primary }}>Jorge Giovannetti</h1>
						</Typography>
					</Row>
					<Row>
						<Typography>
							<h2 style={{ fontStyle: "italic" }}>Dev</h2>
						</Typography>
					</Row>
					<Row>
						<img
							src={GioProfilePic}
							style={{ borderRadius: "50%", width: "150px" }}
							alt="Profile"
						/>
					</Row>
					<Row>
						<div>
							2nd year CS student @ Tec de Monterrey. My main areas of interest
							include computer graphics, artificial intelligence, UX, and web
							development.
						</div>
					</Row>
					<Row style={{ marginTop: "10px", marginBottom: "10px" }}>
						<Button
							type="primary"
							href="https://drive.google.com/file/d/1gANwTHqRcKbsLY0w4doSW7wEBnkEyWAH/view?usp=drive_open"
							rel="noopener"
							target="_blank"
						>
							View Resume
						</Button>
					</Row>
					<Row
						style={{
							display: "flex",
							justifyContent: "space-around"
						}}
					>
						<Button
							type="primary"
							href="https://www.linkedin.com/in/jorgegiovannetti/"
							rel="noopener"
							target="_blank"
						>
							<FontAwesomeIcon
								icon={faLinkedin}
								style={{ marginRight: "3px" }}
							/>
							LinkedIn
						</Button>
						<Button
							type="primary"
							href="https://open.spotify.com/artist/3wcBGxsP5MCM5jUPQNoXWC"
							rel="noopener"
							target="_blank"
						>
							<FontAwesomeIcon
								icon={faSpotify}
								style={{ marginRight: "3px" }}
							/>
							Spotify
						</Button>
						<Button
							type="primary"
							variant="dark"
							href="https://github.com/JorgeGiovannetti"
							target="_blank"
							rel="noopener"
						>
							<FontAwesomeIcon icon={faGithub} style={{ marginRight: "3px" }} />
							Github
						</Button>
					</Row>
				</div>
			</Fragment>
		);
	}
}

export default AboutPage;
