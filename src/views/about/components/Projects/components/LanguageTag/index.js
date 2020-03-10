import React from "react";

const LanguageTag = ({ tag }) => {
	return (
		<div
			style={{
				margin: 10,
				padding: 5,
				color: "white",
				fontWeight: "bold",
				backgroundColor: tag.node.color,
				borderRadius: 6
			}}
		>
			{tag.node.name}
		</div>
	);
};

export default LanguageTag;
