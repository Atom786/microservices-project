const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = createProxyMiddleware({
  target: process.env.ORDER_SERVICE_URL || 'http://localhost:4003',
  changeOrigin: true,
  pathRewrite: {
    "^/api/orders": ""
  }
});
