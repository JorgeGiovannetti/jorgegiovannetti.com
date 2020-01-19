import React from "react";
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";
import PortfolioPage from "./views/portfolio";
import AboutPage from "./views/about";
import NotFoundPage from "./views/notfound";

const App = () => {
	return (
		<main>
			<BrowserRouter>
				<Switch>
					<Route path="/" component={AboutPage} exact />
					<Route path="/about" component={AboutPage} exact />
					<Route path="/portfolio" component={PortfolioPage} exact />
					<Route path="/404" component={NotFoundPage} exact />
					<Redirect to="/404" />
				</Switch>
			</BrowserRouter>
		</main>
	);
};

export default App;
