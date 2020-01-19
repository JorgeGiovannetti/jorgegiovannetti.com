import React, { Component, Fragment } from "react";
import GioNavbar from "../../components/gionavbar";
import { Button } from "antd";
import { Row } from "antd";
import { Layout } from "antd";
import { Icon } from "antd";
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
				<Layout type="flex" align="middle">
					<Row>
						<Icon></Icon>
					</Row>
					<Row>
						<Button
							type="primary"
							href="https://drive.google.com/file/d/1gANwTHqRcKbsLY0w4doSW7wEBnkEyWAH/view?usp=drive_open"
							rel="noopener"
							target="_blank"
						>
							View Resume
						</Button>
					</Row>
					<Row>
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
						>
							<FontAwesomeIcon icon={faGithub} style={{ marginRight: "3px" }} />
							Github
						</Button>
					</Row>
				</Layout>
			</Fragment>
		);
	}
}

export default AboutPage;
