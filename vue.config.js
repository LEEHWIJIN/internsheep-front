'use strict'

module.exports = {
  devServer: {
    proxy: { // proxyTable 설정
      '/api': {
        target: 'http://api.ajou-internsheep.co',
        changeOrigin: true
      }
    }
  },
  // realServer: {
  //   proxy: { // proxyTable 설정
  //     '/api': {
  //       target: 'http://api.ajou-internsheep.co',
  //       changeOrigin: true
  //     }
  //   }
  // }
};