import React from "react";
import { Button, Card } from "antd";
import LanguageTag from "../LanguageTag";

const { Meta } = Card;

const RepoCard = ({ data }) => {
	return (
		<Card style={{ minWidth: 300 }}>
			<Meta title={data.node.name} description={data.node.description} />
			{data.node.languages.edges.map(language => (
				<LanguageTag tag={language} key={language.node.name} />
			))}
			<Button href={data.node.url} target="blank" rel="noopener">
				Source
			</Button>
		</Card>
	);
};

export default RepoCard;
