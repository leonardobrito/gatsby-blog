import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import RecommendedPosts from '../components/RecommendedPosts';
// import Comments from '../components/Comments';

import { PostHeader, PostDate, PostTitle, PostDescription, MainContent } from '../components/Post/styles';

export default function BlogPost({
  data: {
    markdownRemark: {
      fields: {
        _slug
      },
      frontmatter: {
        title, date, description, image
      },
      html,
      timeToRead
    }
  },
  pageContext: { nextPost, previousPost }
}) {
  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        image={image}
      />
      <PostHeader>
        <PostDate>
          {date} • {timeToRead} min de leitura
        </PostDate>
        <PostTitle>{title}</PostTitle>
        <PostDescription>{description}</PostDescription>
      </PostHeader>
      <MainContent>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </MainContent>
      <RecommendedPosts next={nextPost} previous={previousPost} />
      {/* <Comments url={slug} title={title}/> */}
    </Layout>
  );
};

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        image
      }
      html
      timeToRead
    }
  }
`;
