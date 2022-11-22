const onClientEntry = () => {
  // Expose both globals so that the NR1 docs can read it.
  window.__webpack_public_path__ = "https://docs.newrelic.com/";
};

export { onClientEntry };
