import React, { Component } from "react";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import RepoCard from "./components/RepoCard";
import { Skeleton } from "antd";

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
		this.state = { repos: null };
	}

	async componentDidMount() {
		const repos = await client.query({ query: getRepos });
		this.setState({ repos: repos });
		console.log(this.state.repos.data.viewer.repositories.edges[0]);
	}

	render() {
		if (!this.state.repos) {
			return <Skeleton />;
		}

		return (
			<ApolloProvider client={client}>
				<div style={{ marginBottom: "15px" }}>
					<RepoCard
						data={this.state.repos.data.viewer.repositories.edges[0]}
					></RepoCard>
				</div>
			</ApolloProvider>
		);
	}
}

export default Projects;
