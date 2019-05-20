'use strict'

module.exports = {
  devServer: {
    proxy: { // proxyTable 설정
      '/api': {
        target: 'http://10.41.83.72:8888',
        changeOrigin: true
      }
    }
  },
  // realServer: {
  //   proxy: { // proxyTable 설정
  //     '/api': {
  //       target: 'http://10.41.83.72:8888',
  //       changeOrigin: true
  //     }
  //   }
  // }
};