const config = {
  unified: {
    // the endpoint to the unified api server either running locally in Docker
    // or somewhere accessable
    baseURL: import.meta.env.VITE_UNIFIED_BASE_URL,
  },
};

export default config;
