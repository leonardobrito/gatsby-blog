import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Avatar from '../Avatar';
import getThemeColor from "../../utils/getThemeColor"

import { ProfileWrapper, ProfileLink, ProfileAuthor, ProfilePosition, ProfileDescription } from './styles';

export default function Profile() {
  const {
    site: {
      siteMetadata: { name, position, description },
    }
  } = useStaticQuery(
    graphql`
      query MySiteMetadata {
        site {
          siteMetadata {
            name
            position
            description
          }
        }
      }
    `
  );

  return (
    <ProfileWrapper>
      <ProfileLink to="/" cover direction="left" bg={getThemeColor()} duration={0.6}>
        <Avatar />
        <ProfileAuthor>
          { name }
          <ProfilePosition>
            { position }
          </ProfilePosition>
        </ProfileAuthor>
      </ProfileLink>
      <ProfileDescription>
        { description }
      </ProfileDescription>
    </ProfileWrapper>
  );
}
