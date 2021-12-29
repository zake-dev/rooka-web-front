module.exports = {
  publicPath: '/absproxy/8081',
  devServer: {
    public: 'http://34.64.165.207/absproxy/8081',
    sockPath: '/absproxy/8081/sockjs-node',
    port: 8081,
    disableHostCheck: true,
    overlay: false,
  },
}
