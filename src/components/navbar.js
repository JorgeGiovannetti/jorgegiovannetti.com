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
    &:hover {
        background: #f0f0f0;
    }
`

const activeNavLink = { border: `solid 2px ${theme.colors.blue}`, borderRadius: '4px' };

const Navbar = () => (
    <NavContainer>
        <NavLink to="/" activeStyle={activeNavLink}>About me</NavLink>
        <NavLink to="/projects/" activeStyle={activeNavLink}>My projects</NavLink>
    </NavContainer>
);

export default Navbar;