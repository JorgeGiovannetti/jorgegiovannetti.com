import React, { Component } from "react";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Skeleton } from "antd";
import RepoTable from "./components/RepoTable";

const client = new ApolloClient({
	uri: "https://api.github.com/graphql",
	headers: {
		authorization: `Bearer ${process.env.REACT_APP_GITHUB_API_KEY}`
	}
});

const getRepos = gql`
	query {
		viewer {
			repositories(first: 10, privacy: PUBLIC, ownerAffiliations: OWNER) {
				edges {
					node {
						name
						description
						languages(first: 5) {
							edges {
								node {
									name
									color
								}
							}
						}
						url
					}
				}
			}
		}
	}
`;

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = { repos: null, tableData: null };
	}

	async componentDidMount() {
		const repos = await client.query({ query: getRepos });
		this.setState({ repos: repos.data.viewer.repositories.edges });
		console.log(this.state.repos);
		const tData = [];
		for (let i = 0; i < this.state.repos.length; i++) {
			let tObj = {
				key: i,
				name: this.state.repos[i].node.name,
				description: this.state.repos[i].node.description,
				languages: this.state.repos[i].node.languages,
				link: this.state.repos[i].node.url
			};
			tData.push(tObj);
		}
		this.setState({ tableData: tData });
		console.log(this.state.tableData);
	}

	render() {
		if (!this.state.repos) {
			return <Skeleton />;
		}

		return (
			<ApolloProvider client={client}>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
						flexWrap: "wrap"
					}}
				>
					<RepoTable dataSource={this.state.tableData} />
				</div>
			</ApolloProvider>
		);
	}
}

export default Projects;
