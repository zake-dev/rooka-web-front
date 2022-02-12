module.exports = {
  publicPath: '/',
  devServer: {
    port: 8081,
    allowedHosts: 'all',
    static: {
      publicPath: '/',
    },
    client: {
      overlay: false,
      webSocketURL: 'ws://0.0.0.0:80/absproxy/8081',
    },
  },
}
