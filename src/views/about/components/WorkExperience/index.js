import React, { Component } from "react";
import { Row, PageHeader, Tabs, Typography } from "antd";

const { Paragraph } = Typography;
const { TabPane } = Tabs;

const isMobile = false;
const tabPosition = isMobile ? "top" : "left";

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
			<Tabs tabPosition={tabPosition}>
				<TabPane tab="Banorte" key="1">
					<PageHeader title="Lead UX/UI Designer" subTitle="Jan 2020-Current">
						<Content>
							<div className="content">
								<Paragraph>
									Ant Design interprets the color system into two levels: a
									system-level color system and a product-level color system.
								</Paragraph>
								<Paragraph>
									Ant Design's design team preferred to design with the HSB
									color model, which makes it easier for designers to have a
									clear psychological expectation of color when adjusting
									colors,:well as facilitate communication in teams.
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
									Ant Design interprets the color system into two levels: a
									system-level color system and a product-level color system.
								</Paragraph>
								<Paragraph>
									Ant Design's design team preferred to design with the HSB
									color model, which makes it easier for designers to have a
									clear psychological expectation of color when adjusting
									colors,:well as facilitate communication in teams.
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
									Ant Design interprets the color system into two levels: a
									system-level color system and a product-level color system.
								</Paragraph>
								<Paragraph>
									Ant Design's design team preferred to design with the HSB
									color model, which makes it easier for designers to have a
									clear psychological expectation of color when adjusting
									colors,:well as facilitate communication in teams.
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
