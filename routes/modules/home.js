// 載入express router
const express = require('express')
const router = express.Router()

// 載入 totalAmount 計算程式
const totalAmount = require('../../public/javascripts/totalAmount')
// 載入 translate 中文化程式
const translate = require('../../public/javascripts/translate')

// 載入 mongoose model
const Record = require('../../models/record')

// 設定路由 ----------

// 首頁
router.get('/', (req, res) => {
  Record.find()
        .lean()
        .sort({date: 'desc'})
        .then(records => {
          const total = totalAmount(records)
          res.render('index', { records, total })
        })
        .catch(error => console.log(error))
})

// 篩選顯示項目
router.get('/filter/:category', (req, res) => {
  const category = req.params.category
  const ch_category = translate(category)
  Record.find({category: category})
        .lean()
        .then(records =>{
          const total = totalAmount(records)
           res.render('index', { records, total, ch_category })
          })
        .catch(error => console.log(error))
})

// 輸出 router
module.exports = router