// 載入express router
const express = require('express')
const router = express.Router()

// 載入路由模組
const home = require('./modules/home')
const records = require('./modules/records')

// 設定 middle-ware 分發路線
router.use('/', home)
router.use('/records', records)

// 輸出 router
module.exports = router