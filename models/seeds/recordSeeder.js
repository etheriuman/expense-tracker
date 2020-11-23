// 載入 mongoose連線檔
const db = require('../../config/mongoose')

// 載入seed data json資料
const records = require('./record.json')

// 載入record data-model
const Record = require('../record')

// 產生種子資料
db.once('open', () => {
  records.result.forEach(record => {
    Record.create(Object.assign({}, record))
  })
  console.log('create records data done!')
})