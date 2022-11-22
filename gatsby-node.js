exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;
  createRedirect({
    fromPath: `/docs/*`,
    toPath: `https://docs-dev.newrelic.com/docs/*`,
    statusCode: 200,
  });
};
