import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import media from '../styles/media';

const HeroContainer = styled.div`

`;

const HeroTitle = styled.h1`
  font-size: 84px;
  ${media.desktop`font-size: 72px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 48px;`};
  ${media.phone`font-size: 36px;`};
  margin-top: 0;
`;

const HeroSub = styled.h2`
  font-size: 44px;
  ${media.desktop`font-size: 36px;`};
  ${media.tablet`font-size: 28px;`};
  ${media.phablet`font-size: 20px;`};
  ${media.phone`font-size: 14px;`};
  color: ${theme.colors.green};
  margin-bottom: 0;
`;

const HeroSection = () => {

  const [anchorTarget, setAnchorTarget] = useState(null);

  useEffect(() => {
    setAnchorTarget(document.getElementById('about'));
  }, []);

  const handleClick = event => {
    event.preventDefault();
    anchorTarget.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeroContainer>
      <HeroSub> Hello world, I'm</HeroSub>
      <HeroTitle>Jorge Giovannetti</HeroTitle>
      <h3 style={{ maxWidth: '600px' }}>I'm a Computer Science student @ Tec de Monterrey with a passion for learning and experimenting.</h3>
      <button onClick={handleClick}>Find out more!</button>
    </HeroContainer>
  );
}

export default HeroSection;