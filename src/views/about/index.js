import React, { Component, Fragment, Suspense } from "react";
import { Row, PageHeader, Typography, Skeleton } from "antd";
import GioProfilePic from "./components/GioProfilePic";
import Social from "../../components/social";
import { Button } from "antd";

const Projects = React.lazy(() => import("./components/Projects"));
const { Title, Paragraph } = Typography;

class AboutPage extends Component {
	render() {
		return (
			<Fragment>
				<div
					style={{
						marginTop: 20,
						maxWidth: 1080,
						marginLeft: "auto",
						marginRight: "auto"
					}}
				>
					<Title style={{ fontSize: "50px" }}>Jorge Giovannetti</Title>
					<PageHeader title="About Me"></PageHeader>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center"
						}}
					>
						<div>
							<Paragraph style={{ fontSize: "18px" }}>
								I'm a 2nd year Computer Science student at Tec de Monterrey with
								a passion for learning and experimenting. My main areas of
								interest include UX, artificial intelligence, and videogame
								development.
							</Paragraph>
						</div>
						<Social />
						<GioProfilePic></GioProfilePic>
						<Button
							href="https://drive.google.com/file/d/1gANwTHqRcKbsLY0w4doSW7wEBnkEyWAH/view?usp=drive_open"
							target="_blank"
							rel="noopener"
							style={{ marginTop: 10 }}
							type="primary"
						>
							Resume
						</Button>
					</div>
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
