// 引入mongoose
const mongoose = require('mongoose')

// 啟動mongodb資料庫連線
mongoose.connect('mongodb://localhost/expense-tracker', { useNewUrlParser: true, useUnifiedTopology: true })

// 設定連線狀態動作
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb connection failed!')
})
db.once('open', () => {
  console.log('mongodb connection secceed!')
})

// 輸出 db
module.exports = db
