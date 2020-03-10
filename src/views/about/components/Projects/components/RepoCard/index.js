import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const RepoCard = ({ data }) => {
	return (
		<Card style={{ width: 300 }}>
			<Meta title={data.node.name} description={data.node.description} />
		</Card>
	);
};

export default RepoCard;
