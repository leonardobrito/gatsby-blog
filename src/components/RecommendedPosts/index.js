import React from 'react'
import propTypes from 'prop-types'
import getThemeColor from "../../utils/getThemeColor"

import { RecommendedWrapper, RecommendedLink } from './styles'

function RecommendedPosts({ next, previous }) {
  return (
    <RecommendedWrapper>
      {previous && (
        <RecommendedLink
          to={previous.fields.slug}
          cover
          direction="left"
          bg={getThemeColor()}
          className="previous"
        >
          {previous.frontmatter.title}
        </RecommendedLink>
      )}
      {next && (
        <RecommendedLink
          to={next.fields.slug}
          cover
          direction="right"
          bg={getThemeColor()}
          className="next"
        >
          {next.frontmatter.title}
        </RecommendedLink>
      )}
    </RecommendedWrapper>
  );
};

RecommendedPosts.propTypes = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
};

export default RecommendedPosts;
