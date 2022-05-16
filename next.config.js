require('dotenv').config({ path: `./config/.env.${process.env.NODE_ENV}` });

module.exports = {
    productionBrowserSourceMaps: false,
    env: {
        SERVER_URL: process.env.SERVER_URL,
    },
    webpack(config, options) {
        return config;
    },
    experimental: {
        outputStandalone: true,
    },
};
