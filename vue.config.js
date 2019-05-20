'use strict'

module.exports = {
  devServer: {
    proxy: { // proxyTable 설정
      '/api': {
        target: 'http://106.10.46.121:8888',
        changeOrigin: true
      }
    }
  },
  // realServer: {
  //   proxy: { // proxyTable 설정
  //     '/api': {
  //       target: 'http://106.10.46.121:8888',
  //       changeOrigin: true
  //     }
  //   }
  // }
};