import React, { Component, Fragment, Suspense } from "react";
import { Row, Col, PageHeader, Typography, Spin, Icon, Tabs } from "antd";
// import GioNavbar from "../../components/gionavbar";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLinkedin,
	faSpotify,
	faGithub
} from "@fortawesome/free-brands-svg-icons";

const GioProfilePic = React.lazy(() => import("./components/GioProfilePic"));
const { Title } = Typography;
const { TabPane } = Tabs;
const CustomSpin = (
	<Spin
		indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />}
	></Spin>
);
const isMobile = false;
const tabPosition = isMobile ? "top" : "left";

const { Paragraph } = Typography;

const Content = ({ children, extraContent }) => {
	return (
		<Row className="content" type="flex">
			<div className="main" style={{ flex: 1 }}>
				{children}
			</div>
			<div
				className="extra"
				style={{
					marginLeft: 80
				}}
			>
				{extraContent}
			</div>
		</Row>
	);
};

class AboutPage extends Component {
	render() {
		return (
			<Fragment>
				<div
					style={{
						height: "100vh",
						paddingLeft: "10%",
						paddingRight: "10%"
					}}
				>
					<Title>Jorge Giovannetti</Title>
					<Row type="flex">
						<Col span={12}>
							<PageHeader title="About Me"></PageHeader>
							<Paragraph>
								2nd year CS student @ Tec de Monterrey. My main areas of
								interest include computer graphics, artificial intelligence, UX,
								and web development.
							</Paragraph>
						</Col>
						<Col span={12}>
							<Suspense fallback={CustomSpin}>
								<GioProfilePic></GioProfilePic>
							</Suspense>
						</Col>
					</Row>
					<Row type="flex">
						<Button
							type="primary"
							href="https://drive.google.com/file/d/1gANwTHqRcKbsLY0w4doSW7wEBnkEyWAH/view?usp=drive_open"
							rel="noopener"
							target="_blank"
						>
							Resume
						</Button>
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
					<div>
						<PageHeader title="Work Experience"></PageHeader>
						<Tabs tabPosition={tabPosition}>
							<TabPane tab="Banorte" key="1">
								<PageHeader
									title="Lead UX/UI Designer"
									subTitle="Jan 2020-Current"
								>
									<Content>
										<div className="content">
											<Paragraph>
												Ant Design interprets the color system into two levels:
												a system-level color system and a product-level color
												system.
											</Paragraph>
											<Paragraph>
												Ant Design's design team preferred to design with the
												HSB color model, which makes it easier for designers to
												have a clear psychological expectation of color when
												adjusting colors,:well as facilitate communication in
												teams.
											</Paragraph>
										</div>
									</Content>
								</PageHeader>
							</TabPane>
							<TabPane tab="Google" key="2">
								<PageHeader
									title="Software Engineer Intern"
									subTitle="Jun-Aug 2020"
								>
									<Content>
										<div className="content">
											<Paragraph>
												Ant Design interprets the color system into two levels:
												a system-level color system and a product-level color
												system.
											</Paragraph>
											<Paragraph>
												Ant Design's design team preferred to design with the
												HSB color model, which makes it easier for designers to
												have a clear psychological expectation of color when
												adjusting colors,:well as facilitate communication in
												teams.
											</Paragraph>
										</div>
									</Content>
								</PageHeader>
							</TabPane>
							<TabPane tab="ITESM" key="3">
								<PageHeader title="UX Designer" subTitle="@ Tec de Monterrey">
									<Content>
										<div className="content">
											<Paragraph>
												Ant Design interprets the color system into two levels:
												a system-level color system and a product-level color
												system.
											</Paragraph>
											<Paragraph>
												Ant Design's design team preferred to design with the
												HSB color model, which makes it easier for designers to
												have a clear psychological expectation of color when
												adjusting colors,:well as facilitate communication in
												teams.
											</Paragraph>
										</div>
									</Content>
								</PageHeader>
							</TabPane>
						</Tabs>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default AboutPage;
