import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Avatar from '../Avatar';
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
      <ProfileLink to="/">
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
