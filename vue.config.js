'use strict'
const path = require('path')
const config = require('./src/config')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  "publicPath": "/",
  "outputDir": "dist",
  "assetsDir": "static",
  "lintOnSave": false,
  "productionSourceMap": false,
  "devServer": {
    "port": 8080,
    "open": true,
    "overlay": {
      "warnings": false,
      "errors": true
    }
  },
  "configureWebpack": {
    "name": config.webName,
    "resolve": {
      "alias": {
        "@": resolve('src')
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}