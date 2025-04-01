const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = createProxyMiddleware({
  target: process.env.PRODUCT_SERVICE_URL || 'http://localhost:4002',
  changeOrigin: true,
  pathRewrite: {
    "^/api/products": ""
  }
});
