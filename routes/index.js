// 載入express router
const express = require('express')
const router = express.Router()

// 載入路由模組
const home = require('./modules/home')

// 設定 middle-ware 分發路線
router.use('/', home)

// 輸出 router
module.exports = router