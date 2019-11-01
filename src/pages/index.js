import React from 'react'
// import { RichText } from 'prismic-reactjs'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import BlogPosts from '../components/BlogPosts'

// Query for the Blog Home content in Prismic
export const query = graphql`
  {
    prismic {
      allBlog_homes(uid: null) {
        edges {
          node {
            _meta {
              id
              type
            }
            headline
            description
          }
        }
      }
      allPosts(sortBy: date_DESC) {
        edges {
          node {
            _meta {
              id
              uid
              type
            }
            title
            date
            author
            label
            description
            img
            body {
              ... on PRISMIC_PostBodyText {
                type
                label
                primary {
                  text
                }
              }
            }
          }
        }
      }
    }
  }
`

export default ({ data }) => {
  // Define the Blog Home & Blog Post content returned from Prismic
  const doc = data.prismic.allBlog_homes.edges.slice(0, 1).pop()
  const posts = data.prismic.allPosts.edges

  if (!doc) return null

  return (
    <Layout>
      <BlogPosts posts={posts} />
    </Layout>
  )
}
