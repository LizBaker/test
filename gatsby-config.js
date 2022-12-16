module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-gatsby-cloud",
      options: {
        headers: {
          "/*": ["Referrer-Policy: no-referrer-when-downgrade"],
        },
      },
    },
  ],
};
