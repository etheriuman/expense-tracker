// 載入mongoose與Schema
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 設定資料型態
const categorySchema = new Schema({
  category: {
    type: String,
    required: true
  }
})

// 輸出 recordSchema 作為 data model
module.exports = mongoose.model('Category', categorySchema)