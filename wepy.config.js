/*
 * @Author: your name
 * @Date: 2020-12-15 12:57:43
 * @LastEditTime: 2020-12-18 17:49:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /wxfishing/wepy.config.js
 */
const path = require('path');
var prod = process.env.NODE_ENV === 'production';

module.exports = {
  wpyExt: '.wpy',
  cliLogs: !prod,
  build: {
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    },
    aliasFields: ['wepy', 'weapp'],
    modules: ['node_modules']
  },
  compilers: {
    stylus: {
      compress: prod
    },
    babel: {
      sourceMap: 'inline',
      presets: [
        '@babel/preset-env'
      ],
      plugins: [
        '@wepy/babel-plugin-import-regenerator',
      ]
    }
  },
  plugins: [],
  appConfig: {
    noPromiseAPI: ['createSelectorQuery']
  }
}

