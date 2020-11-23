// 載入express router
const express = require('express')
const router = express.Router()
// 載入 Schema
const Record = require('../../models/record')

// 設定路由
router.get('/', (req, res) => {
  Record.find()
        .lean()
        .sort({_id: 'asc'})
        .then(records => res.render('index', {}))
        .catch(error => console.log(error))
})

// 輸出 router
module.exports = router