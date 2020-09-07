import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import theme from '../styles/theme';
import Navbar from './navbar';
import Footer from './footer';

const GlobalStyles = createGlobalStyle`
    body {
        background: ${theme.colors.white};
        font-family: Roboto, sans-serif;
        font-size: ${theme.fontSizes.m};
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        margin: 0px;
    }
    h1, h2, h3 {
        font-family: Ramabhadra, sans-serif;
        color: ${theme.colors.brown};
    }
    h1 {
        font-size: ${theme.fontSizes.xxl};
    }
    h2 {
        font-size: ${theme.fontSizes.xl};
    }
    h3 {
        font-size: ${theme.fontSizes.m};
    }
`;

const Content = styled.div`
    margin: 10%;
`;

const Layout = ({ children }) => (
    <>
        <GlobalStyles />
        <Navbar />
        <Content>
            {children}
        </Content>
        <Footer />
    </>
);

export default Layout;