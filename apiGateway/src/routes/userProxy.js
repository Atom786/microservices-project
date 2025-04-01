const { createProxyMiddleware } = require("http-proxy-middleware");
// process.env.USER_SERVICE_URL 
module.exports = createProxyMiddleware({
  target: 'http://localhost:4001',
  changeOrigin: true,
  pathRewrite: {
    "^/api/users": ""
  }
});
