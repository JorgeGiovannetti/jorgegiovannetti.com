import React from "react";
import { Tag } from "antd";

const LanguageTag = ({ tag }) => {
	return (
		<Tag
			color={tag.node.color}
			style={{
				margin: 10,
				fontWeight: "bold"
			}}
		>
			{tag.node.name}
		</Tag>
	);
};

export default LanguageTag;
