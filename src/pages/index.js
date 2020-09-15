import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import HeroSection from '../components/hero';
import ProfilePic from '../components/profilePic';

const AboutTitle = styled.h1`
  margin-top: 20em;
  margin-bottom: 0;
`;

const AboutSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 400px;
  margin: 10px;
`;

const PicContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 400px;
  flex-grow: 0;
  align-items: center;
  margin: 10px;
`;

const IndexPage = () => (
  <Layout>
    <HeroSection />
    <AboutTitle>About Me</AboutTitle>
    <AboutSection id='about'>
      <AboutContainer>
          <p>
            My name is Jorge Giovannetti,
            I'm currently on my 3rd year as a
            Computer Science student at
            Tecnológico de Monterrey.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            My main areas of interest include artificial intelligence,
            UI/UX design, and videogame development.
          </p>
      </AboutContainer>
        <PicContainer>
          <ProfilePic />
        </PicContainer>
    </AboutSection>
  </Layout>
);

export default IndexPage;