import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import PortfolioPage from "./views/portfolio";
import AboutPage from "./views/about";

const App = () => {
	return (
		<main>
			<HashRouter>
				<Switch>
					<Route path="/" component={AboutPage} exact />
					<Route path="/about" component={AboutPage} exact />
					<Route path="/portfolio" component={PortfolioPage} exact />
					<Route component={Error} />
				</Switch>
			</HashRouter>
		</main>
	);
};

export default App;
