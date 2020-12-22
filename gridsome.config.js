// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Lionized Skincare',
  siteDescription: 'Lionized Skincare is a family-owned business, passionate about the health of your skin.',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/**/*.md',
        route: '/posts/:slug'
      }
    }
  ]
}
