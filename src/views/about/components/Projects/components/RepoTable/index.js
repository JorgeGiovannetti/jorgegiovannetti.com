import React from "react";
import { Table } from "antd";
import LanguageTag from "../LanguageTag";

const RepoTable = ({ dataSource }) => {
	// const columns = [
	// 	{
	// 		title: "Name",
	// 		dataIndex: "name",
	// 		key: "name"
	// 	},
	// 	{
	// 		title: "Description",
	// 		dataIndex: "description",
	// 		key: "description"
	// 	},
	// 	{
	// 		title: "Tags",
	// 		key: "tags",
	// 		render: data => {
	// 			data.node.languages.edges.map(language => (
	// 				<LanguageTag tag={language} key={language.node.name} />
	// 			));
	// 		}
	// 	},
	// 	{
	// 		title: "Link",
	// 		key: "link"
	// 	}
	// ];

	// return <Table dataSource={dataSource} columns={columns} />;

	const tableColumns = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name"
		},
		{
			title: "Description",
			dataIndex: "description",
			key: "description"
		},
		{
			title: "Languages",
			key: "languages",
			// dataIndex: "languages",
			render: data => {
				return data.languages.edges.map(language => (
					<LanguageTag tag={language} key={language.node.name} />
				));
			}
		},
		{
			title: "Source Code",
			key: "action",
			render: data => {
				return (
					<a rel="noopener" target="blank" href={data.link}>
						Link
					</a>
				);
			}
		}
	];

	return (
		<Table
			style={{ minWidth: "80%" }}
			size={"small"}
			pagination={false}
			dataSource={dataSource}
			columns={tableColumns}
		/>
	);
};

export default RepoTable;
