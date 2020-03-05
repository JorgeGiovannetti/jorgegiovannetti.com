import React, { Component, Fragment, Suspense } from "react";
import { Row, Col, PageHeader, Typography, Skeleton } from "antd";
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
						maxWidth: 1100,
						marginLeft: "auto",
						marginRight: "auto"
					}}
				>
					<Title style={{ marginLeft: "5%", fontSize: "50px" }}>
						Jorge Giovannetti
					</Title>
					<div style={{ marginLeft: "5%" }}>
						<Row type="flex" style={{ flexWrap: "true" }}>
							<Col span={18}>
								<PageHeader title="About Me"></PageHeader>
								<Paragraph style={{ fontSize: "18px" }}>
									2nd year CS student @ Tec de Monterrey. My main areas of
									interest include computer graphics, artificial intelligence,
									UX, and web development.
								</Paragraph>
								<Social />
								<Row type="flex">
									<Button
										href="https://drive.google.com/file/d/1gANwTHqRcKbsLY0w4doSW7wEBnkEyWAH/view?usp=drive_open"
										target="_blank"
										rel="noopener"
									>
										Resume
									</Button>
								</Row>
							</Col>
							<Col span={6}>
								<GioProfilePic></GioProfilePic>
							</Col>
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
