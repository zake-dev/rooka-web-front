module.exports = {
  publicPath: '/absproxy/8081',
  devServer: {
    port: 8081,
    allowedHosts: 'all',
    static: {
      publicPath: '/absproxy/8081',
    },
    client: {
      overlay: false,
      webSocketURL: 'ws://0.0.0.0:80/absproxy/8081',
    },
  },
}
