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
					<Title style={{ marginLeft: "5%", fontSize: "50px" }}>
						Jorge Giovannetti
					</Title>
					<div style={{ marginLeft: "5%" }}>
						<Row type="flex" style={{ flexWrap: "true" }}>
							<div>
								<PageHeader title="About Me"></PageHeader>
								<Paragraph style={{ fontSize: "18px" }}>
									I'm a 2nd year Computer Science student at Tec de Monterrey
									with a passion for learning and experimenting. My main areas
									of interest include UX, artificial intelligence, and videogame
									development.
								</Paragraph>
								<Social />
							</div>
							<div>
								<GioProfilePic></GioProfilePic>
							</div>
						</Row>
						<Row type="flex">
							<Button
								href="https://drive.google.com/file/d/1gANwTHqRcKbsLY0w4doSW7wEBnkEyWAH/view?usp=drive_open"
								target="_blank"
								rel="noopener"
							>
								Resume
							</Button>
						</Row>
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
