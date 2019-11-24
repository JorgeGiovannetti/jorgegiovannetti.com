import React, { Component } from "react";
import Navbar from "react-bootstrap/navbar";
import Nav from "react-bootstrap/nav";

class GioNavbar extends Component {
	render() {
		return (
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Navbar.Brand href="#about">Jorge Giovannetti</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link eventKey={1} href="/">
							About Me
						</Nav.Link>
						<Nav.Link eventKey={2} href="#/portfolio">
							Portfolio
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default GioNavbar;
