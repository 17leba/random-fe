// proxy 配置文件
// https://github.com/chimurai/http-proxy-middleware
module.exports = {
  '/api/': {
    target: 'http://ypber.com:3000',
    changeOrigin: true
  },
}
