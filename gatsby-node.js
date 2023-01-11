exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;
  createRedirect({
    fromPath: `kr/*`,
    toPath: `https://docswebsitekr.gatsbyjs.io/kr/*`,
    statusCode: 200,
  });
  createRedirect({
    fromPath: `jp/*`,
    toPath: `https://docswebsitejp.gatsbyjs.io/jp/*`,
    statusCode: 200,
  });
};
