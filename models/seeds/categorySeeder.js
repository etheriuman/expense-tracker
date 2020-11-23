// 載入 mongoose連線檔
const db = require('../../config/mongoose')

// 載入record data-model
const Category = require('../category')

// 產生種子資料
db.once('open', () => {
  Category.create(
    {category: 'living'},
    {category: 'traffic'},
    {category: 'entertainment'},
    {category: 'food'},
    {category: 'others'}
  )
  console.log('create category data done!')
})