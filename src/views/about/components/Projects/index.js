import React, { Component } from "react";
import { Card, Row, Col } from "antd";

class Projects extends Component {
	render() {
		return (
			<div>
				<Row gutter={16}>
					<Col span={8}>
						<Card title="ChromeAudioEQ">
							Audio Equalizer within your browser!
						</Card>
					</Col>
					<Col span={8}>
						<Card title="C++ Neural Network">
							Neural Network done from scratch in C++
						</Card>
					</Col>
					<Col span={8}>
						<Card title="Portfolio Website">
							This portfolio website was done by me in react!
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Projects;
