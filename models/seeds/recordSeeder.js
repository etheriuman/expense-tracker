// 載入 mongoose連線檔
const db = require('../../config/mongoose')

// 載入seed data json資料
const records = require('./record.json')

// 載入record data-model
const Record = require('../record')

// 產生種子資料
db.once('open', () => {
  console.log('records database connected!')

  const promise = []
    records.result.forEach(record => {
      promise.push(Record.create(Object.assign({}, record)))
    })
  Promise.all(promise).then(() => process.exit())
})