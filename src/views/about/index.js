import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "react-bootstrap/image";
import GioNavbar from "../../components/gionavbar";
import {
	faLinkedin,
	faSpotify,
	faGithub
} from "@fortawesome/free-brands-svg-icons";
import { Container, GioRow, GioButton, BodyText } from "./elements";
class AboutPage extends Component {
	render() {
		return (
			<Fragment>
				<style>{"body { background-color: #f0f0f0 }"}</style>
				<GioNavbar></GioNavbar>
				<Container>
					<GioRow style={{ flexDirection: "column" }}>
						<h1 style={{ fontWeight: "600" }}>Jorge Giovannetti</h1>
						<h3
							style={{
								color: "#ffc107",
								fontStyle: "italic",
								fontWeight: "600"
							}}
						>
							Programmer and musician
						</h3>
					</GioRow>
					<GioRow style={{ flexDirection: "column" }}>
						<Image
							style={{ height: "auto", width: "150px", marginBottom: "7px" }}
							src={require("./GioProfilePic.jpg")}
							roundedCircle
						/>
						<h2>About Me</h2>
						<BodyText>
							I'm a 2nd year computer science student at Tecnológico de
							Monterrey with a passion for music production and learning. My
							main areas of interest include computer graphics, artificial
							intelligence, UX, and web development.
						</BodyText>
					</GioRow>
					<GioRow>
						<GioButton
							variant="warning"
							href="https://drive.google.com/file/d/1gANwTHqRcKbsLY0w4doSW7wEBnkEyWAH/view?usp=drive_open"
							target="_blank"
						>
							View resume
						</GioButton>
					</GioRow>
					<GioRow>
						<GioButton
							variant="primary"
							href="https://www.linkedin.com/in/jorgegiovannetti/"
							target="_blank"
						>
							<FontAwesomeIcon
								icon={faLinkedin}
								style={{ marginRight: "3px" }}
							/>
							LinkedIn
						</GioButton>
						<GioButton
							variant="success"
							href="https://open.spotify.com/artist/3wcBGxsP5MCM5jUPQNoXWC"
							target="_blank"
						>
							<FontAwesomeIcon
								icon={faSpotify}
								style={{ marginRight: "3px" }}
							/>
							Spotify
						</GioButton>
						<GioButton
							variant="dark"
							href="https://github.com/JorgeGiovannetti"
							target="_blank"
						>
							<FontAwesomeIcon icon={faGithub} style={{ marginRight: "3px" }} />
							Github
						</GioButton>
					</GioRow>
				</Container>
			</Fragment>
		);
	}
}

export default AboutPage;
