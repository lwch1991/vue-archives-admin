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
    "name": "山西省审计厅档案综合管理系统",
    "resolve": {
      "alias": {
        "@": "D:\\Vue_Frame\\src"
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}