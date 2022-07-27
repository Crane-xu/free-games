const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use('/api', createProxyMiddleware({
        target: 'https://www.freetogame.com',
        // target: 'http://localhost:85',
        changeOrigin: true,
        pathRewrite: {
            '^/api': '/api',
        },
    }));

    // app.use(
    //     '/g',
    //     createProxyMiddleware({
    //         target: 'https://www.freetogame.com',
    //         changeOrigin: true,
    //         pathRewrite: {
    //             '^/g': '/g',
    //         }
    //     })
    // );
};