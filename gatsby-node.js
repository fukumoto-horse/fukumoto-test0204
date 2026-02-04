// gatsby-node.js
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: '/', // ルートURLに表示
    component: require.resolve('./src/pages/top/index.jsx'),
  })
}

