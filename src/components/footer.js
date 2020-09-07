import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    flex: 0 1 auto;
    text-align: center;
    padding: 15px;
`;

const Footer = () => (
    <FooterContainer>
        Made with love by <a href='https://github.com/JorgeGiovannetti'>Jorge Giovannetti</a> {'<3'}
    </FooterContainer>
);

export default Footer;