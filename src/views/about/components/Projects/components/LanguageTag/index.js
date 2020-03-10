import React from "react";

const LanguageTag = ({ tag }) => {
	return (
		<div
			style={{
				color: "white",
				backgroundColor: tag.node.color
			}}
		>
			{tag.node.name}
		</div>
	);
};

export default LanguageTag;
