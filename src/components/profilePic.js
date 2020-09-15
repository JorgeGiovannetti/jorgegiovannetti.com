import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import media from '../styles/media';

const MyPic = styled(Img)`
  border-radius: 50%;
  width: 350px;
  ${media.thone`width: 250px`};
`;

const ProfilePic = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profilePic.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <MyPic fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default ProfilePic;
