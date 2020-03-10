import React from "react";
import { Button, Card } from "antd";
import LanguageTag from "../LanguageTag";

const { Meta } = Card;

const RepoCard = ({ data }) => {
	return (
		<Card
			style={{
				margin: 10,
				minWidth: 300,
				maxWidth: 300,
				minHeight: 200,
				maxHeight: 200,
				borderRadius: 20,
				boxShadow: "0px 0px 8px 1px rgba(0,0,0,0.2)",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between"
			}}
		>
			<Meta
				title={data.node.name}
				description={data.node.description}
				style={{ fontSize: 16 }}
			/>
			<div
				style={{
					display: "flex",
					justifyContent: "space-around"
				}}
			>
				{data.node.languages.edges.map(language => (
					<LanguageTag tag={language} key={language.node.name} />
				))}
			</div>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<Button href={data.node.url} target="blank" rel="noopener">
					Source
				</Button>
			</div>
		</Card>
	);
};

export default RepoCard;
