const path = require(`path`)
const { graphql } = require('gatsby')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allWordpressPage {
            edges {
              node {
                id
                slug
                title
              }
            }
          }
          allWordpressWpSwbPodcasts {
            edges {
              node {
                slug
                id
              }
            }
          }

          allWordpressPost {
            edges {
              node {
                slug
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }

      const pageTemplate = path.resolve(`./src/templates/page.js`)
      // All the pages data. //
      result.data.allWordpressPage.edges.forEach(edge => {
        if (edge.node.slug === 'home') {
          createPage({
            path: `/`,
            component: path.resolve(`./src/pages/index.js`),
            context: {
              slug: edge.node.slug,
              id: edge.node.id,
            },
          })
        } else if (edge.node.slug === 'podcasts') {
          createPage({
            path: `/${edge.node.slug}/`,
            component: path.resolve(`./src/pages/podcasts.js`),
            context: {
              slug: edge.node.slug,
              id: edge.node.id,
            },
          })
        } else if (edge.node.slug === 'blog') {
          createPage({
            path: `/${edge.node.slug}/`,
            component: path.resolve(`./src/pages/blog.js`),
            context: {
              slug: edge.node.slug,
              id: edge.node.id,
            },
          })
        } else {
          createPage({
            path: `/${edge.node.slug}/`,
            component: path.resolve(`./src/templates/page.js`),
            context: {
              slug: edge.node.slug,
              id: edge.node.id,
            },
          })
        }
      })

      // All the podcasts data. //
      result.data.allWordpressWpSwbPodcasts.edges.forEach(edge => {
        createPage({
          path: `podcasts/${edge.node.slug}`,
          component: path.resolve(`./src/templates/podcast.js`),
          context: {
            slug: edge.node.slug,
          },
        })
      })

      // All the posts data. //
      result.data.allWordpressPost.edges.forEach(edge => {
        createPage({
          path: `posts/${edge.node.slug}`,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: edge.node.slug,
          },
        })
      })
    })
    resolve()
  })
}
