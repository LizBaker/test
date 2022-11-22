exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;
  createRedirect({
    fromPath: `/docs/*`,
    toPath: `https://docs.newrelic.com/docs/*`,
    statusCode: 200,
  });
};
