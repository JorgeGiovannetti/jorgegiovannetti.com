import React, { Component, Fragment, Suspense } from "react";
import { Row, Col, PageHeader, Typography, Skeleton } from "antd";
import GioProfilePic from "./components/GioProfilePic";
import { Button } from "antd";
import {
	faLinkedin,
	faSpotify,
	faGithub
} from "@fortawesome/free-brands-svg-icons";
import { SpotifyButton, SocialIcon } from "./elements";

const WorkExperience = React.lazy(() => import("./components/WorkExperience"));
const Projects = React.lazy(() => import("./components/Projects"));
const { Title, Paragraph } = Typography;

class AboutPage extends Component {
	render() {
		return (
			<Fragment>
				<div
					style={{
						minHeight: "100vh",
						padding: "5% 10px 10px 5%"
					}}
				>
					<Title style={{ marginLeft: "5%", fontSize: "50px" }}>
						Jorge Giovannetti
					</Title>
					<div style={{ marginLeft: "5%" }}>
						<Row type="flex">
							<Col span={18}>
								<PageHeader title="About Me"></PageHeader>
								<Paragraph style={{ fontSize: "18px" }}>
									2nd year CS student @ Tec de Monterrey. My main areas of
									interest include computer graphics, artificial intelligence,
									UX, and web development.
								</Paragraph>
								<Row type="flex">
									<Button
										href="https://drive.google.com/file/d/1gANwTHqRcKbsLY0w4doSW7wEBnkEyWAH/view?usp=drive_open"
										rel="noopener"
										target="_blank"
									>
										Resume
									</Button>
								</Row>
							</Col>
							<Col span={6}>
								<GioProfilePic></GioProfilePic>
							</Col>
						</Row>
						<Row type="flex" style={{ marginTop: "5px" }}>
							<Button
								href="https://www.linkedin.com/in/jorgegiovannetti/"
								rel="noopener"
								target="_blank"
							>
								<SocialIcon icon={faLinkedin} />
								LinkedIn
							</Button>
							<SpotifyButton
								href="https://open.spotify.com/artist/3wcBGxsP5MCM5jUPQNoXWC"
								rel="noopener"
								target="_blank"
							>
								<SocialIcon icon={faSpotify} />
								Spotify
							</SpotifyButton>
							<Button
								variant="dark"
								href="https://github.com/JorgeGiovannetti"
								target="_blank"
								rel="noopener"
							>
								<SocialIcon icon={faGithub} />
								Github
							</Button>
						</Row>
					</div>
					<PageHeader title="Work Experience"></PageHeader>
					<Suspense fallback={<Skeleton active />}>
						<WorkExperience></WorkExperience>
					</Suspense>
					<PageHeader title="Recent Projects"></PageHeader>
					<Suspense fallback={<Skeleton active />}>
						<Projects></Projects>
					</Suspense>
				</div>
			</Fragment>
		);
	}
}

export default AboutPage;
