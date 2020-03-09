import React, { Component } from "react";
// import Container from "../../../../components/container";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
	uri: "https://api.github.com/graphql",
	headers: {
		authorization: `Bearer ${process.env.REACT_GITHUB_API_KEY}`
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
	async componentDidMount() {
		const repos = await client.query({ query: getRepos });
		console.log(repos);
	}

	render() {
		return (
			<ApolloProvider client={client}>
				<div style={{ marginBottom: "15px" }}>Projectinos</div>
			</ApolloProvider>
		);
	}
}

export default Projects;
