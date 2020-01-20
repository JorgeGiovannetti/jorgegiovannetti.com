import React, { Component, Fragment, Suspense } from "react";
import { Row, Layout, Typography } from "antd";
// import GioNavbar from "../../components/gionavbar";
// import { Button } from "antd";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
// 	faLinkedin,
// 	faSpotify,
// 	faGithub
// } from "@fortawesome/free-brands-svg-icons";

const GioProfilePic = React.lazy(() => import("./components/GioProfilePic"));
const { Content } = Layout;
const { Title } = Typography;

class AboutPage extends Component {
	render() {
		return (
			<Fragment>
				<div
					style={{
						height: "100vh",
						background: "white",
						paddingLeft: "10%",
						paddingRight: "10%"
					}}
				>
					{/* <GioNavbar></GioNavbar> */}
					<Layout>
						<Content>
							<Row>
								<Title>Jorge Giovannetti</Title>
								<Suspense fallback={<div>Loading...</div>}>
									<GioProfilePic></GioProfilePic>
								</Suspense>
								<p style={{ color: "#1e3799" }}>
									2nd year CS student @ Tec de Monterrey. My main areas of
									interest include computer graphics, artificial intelligence,
									UX, and web development.
								</p>
							</Row>
							{/* <Row
						style={{
							display: "flex"
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
					</Row> */}
						</Content>
					</Layout>
				</div>
			</Fragment>
		);
	}
}

export default AboutPage;
