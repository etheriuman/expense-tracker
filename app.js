// 引入插件
const express = require('express')
const exphbs = require('express-handlebars')
const handlebars = require('handlebars')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const routes = require('./routes')

const app = express()
const port = process.env.PORT || 3000

// 連接資料庫
require('./config/mongoose')

// 設定樣板引擎
app.set('view engine', 'handlebars')
app.engine('handlebars', exphbs({defaultLayout: 'main'}))

// 設定middle-ware
app.use(
  express.static('public'),
  bodyParser.urlencoded({extended: true}),
  methodOverride('_method'),
  routes
)

// 客製 equal helper
handlebars.registerHelper('ifEqual', function (category, targetCategory, options) {
  if (category === targetCategory) {
    return options.fn(this)
  }
  return options.inverse(this)
})

// 啟動專案，專案等待中...
app.listen(port, () => {
  console.log(`this project is listening on http://localhost:${port} at ${new Date()}`)
})