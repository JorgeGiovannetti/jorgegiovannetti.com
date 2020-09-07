import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import theme from '../styles/theme';

const NavContainer = styled.div`
    padding: 10px;
    display: flex;
    justify-content: flex-end;
`;

const NavLink = styled(Link)`
    padding: 10px;
    margin-left: 10px;
    margin-right: 10px;
    border: 2px;
    border-color: red;
    text-decoration: none;
    font-family: Ramabhadra, sans-serif;
    color: ${theme.colors.lightBrown};
`

const Navbar = () => (
    <NavContainer>
        <NavLink to="/">About me</NavLink>
        <NavLink to="/projects/">My projects</NavLink>
    </NavContainer>
);

export default Navbar;