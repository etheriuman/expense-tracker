// 載入express router
const express = require('express')
const router = express.Router()

// 載入 totalAmount 計算程式
const totalAmount = require('../../public/javascripts/totalAmount')

// 載入 mongoose model
const Record = require('../../models/record')

// 設定路由
router.get('/', (req, res) => {
  Record.find()
        .lean()
        .sort({date: 'desc'})
        .then(records => {
          let total = totalAmount(records)
          res.render('index', {records, total})
        })
        .catch(error => console.log(error))
})

// 輸出 router
module.exports = router