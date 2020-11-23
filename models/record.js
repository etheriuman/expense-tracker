// 載入mongoose與Schema
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 設定資料型態
const recordSchema = new Schema({
name: {
  type: String,
  required: true
},
category: {
  type: String,
  required: true
},
date: {
  type: String,
  required: true
},
amount: {
  type: Number,
  required: true
}
})

// 輸出 recordSchema 作為 data model
module.exports = mongoose.model('Record', recordSchema)