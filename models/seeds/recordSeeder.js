// 載入 mongoose連線檔
const db = require('../../config/mongoose')

// 載入seed data json資料
const records = require('./record.json')

// 載入record data-model
const Record = require('../record')

// 產生種子資料
db.once('open', () => {
  console.log('db connected! start seeding...')
  // 開始製作種子資料
  Record.create(records.result)
        // 關閉 db connection
        .then(() => db.close()) 
})