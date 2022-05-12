require('dotenv').config({ path: `./config/.env.${process.env.NODE_ENV}` });

module.exports = {
    productionBrowserSourceMaps: false,
    env: {
        MY_ENV: process.env.MY_ENV,
    },
    webpack(config, options) {
        return config;
    },
    experimental: {
        outputStandalone: true,
    },
};
