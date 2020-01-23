import React, { Component } from "react";
import { Row, PageHeader, Card, Typography } from "antd";

const { Paragraph } = Typography;

class Projects extends Component {
	render() {
		return (
			<div>
				<Card title="ChromeAudioEQ">Audio Equalizer within your browser!</Card>
				<Card title="C++ Neural Network">
					Neural Network done from scratch in C++
				</Card>
				<Card title="Portfolio Website">
					This portfolio website was done by me in react!
				</Card>
			</div>
		);
	}
}

export default Projects;
