'use strict'

module.exports = {
  devServer: {
    proxy: { // proxyTable 설정
      '/api': {
        target: 'API_SERVER',
        changeOrigin: true
      }
    }
  },
  // realServer: {
  //   proxy: { // proxyTable 설정
  //     '/api': {
  //       target: 'API_SERVER',
  //       changeOrigin: true
  //     }
  //   }
  // }
};