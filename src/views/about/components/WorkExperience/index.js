import React, { Component } from "react";
import { Row, PageHeader, Tabs, Typography } from "antd";

const { Paragraph } = Typography;
const { TabPane } = Tabs;

// const isMobile = true;
// const tabPosition = isMobile ? "top" : "left";

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
class WorkExperience extends Component {
	render() {
		return (
			<Tabs tabPosition={window.innerWidth < 640 ? "top" : "left"}>
				<TabPane tab="Banorte" key="1">
					<PageHeader
						title="Systems Security Program"
						subTitle="Jan 2020-Present"
					>
						<Content>
							<div className="content">
								<Paragraph>
									Designed and implemented modern and responsive UI for a web
									platform.
								</Paragraph>
								<Paragraph>
									Worked with MySQL and React to develop an in-house web
									dashboard that handles data from three different legacy
									systems and unifies them into a single, user-friendly
									experience.
								</Paragraph>
								<Paragraph>
									Documented the software design and worked closely with the
									Cybersecurity department on the design process.
								</Paragraph>
							</div>
						</Content>
					</PageHeader>
				</TabPane>
				<TabPane tab="Google" key="2">
					<PageHeader title="Software Engineer Intern" subTitle="Jun-Aug 2020">
						<Content>
							<div className="content">
								<Paragraph>
									Worked on optimization of processes within the team, achieving
									an average of 16% speedup through the use of parallel
									processing.
								</Paragraph>
								<Paragraph>
									Ran unit-tests and benchmarks on different increments of the
									project.
								</Paragraph>
								<Paragraph>
									Collaborated with Google's ML team to enhance youtube's
									recommendation system and improve GoogleAds' economical
									performance.
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
									Designed and developed a website that allows students to
									schedule tutoring with their teachers.
								</Paragraph>
								<Paragraph>
									Ran UX research through the use of focus groups, A/B testing,
									prototyping, and surveys.
								</Paragraph>
								<Paragraph>
									Worked on a MERN (MongoDB, Express, React, Node) stack to
									develop a web application for my community.
								</Paragraph>
							</div>
						</Content>
					</PageHeader>
				</TabPane>
			</Tabs>
		);
	}
}

export default WorkExperience;
