// 載入express router
const express = require('express')
const router = express.Router()
// 載入 mongoose model
const Record = require('../../models/record')

// 載入  generateIcon
const generateIcon = require('../../public/javascripts/icon')

// 設定路由 ----------

// 到編輯頁面
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  Record.findById(id)
        .lean()
        .then(record => res.render('edit', { record }))
        .catch(error => console.log(error))
})

// 到新增頁面
router.get('/new', (req, res) => {
  res.render('new')
})

// 送出新增項目表單
router.post('/', (req, res) => {
  console.log('start ----------------')
  const record = req.body
  const name = record.name
  const date = record.date
  const category = record.category
  const amount = record.amount
  const icon = generateIcon(category)
  Record.create({
    name,
    date,
    category,
    amount,
    icon
  })
        .then(() => res.redirect('/'))
        .catch(error => console.log(error))
})

// 送出編輯項目表單
router.put('/:id', (req, res) => {
  const id = req.params.id
  req.body.icon = generateIcon(req.body.category)
  Record.findById(id)
        .then(record => {
          record = Object.assign(record, req.body)
          record.save()
        })
        .then(() => res.redirect('/'))
        .catch(error => console.log(error))
})

// 刪除項目
router.delete('/:id', (req, res) => {
  const id = req.params.id
  Record.findById(id)
        .then(record => record.remove())
        .then(() => res.redirect('/'))
        .catch(error => console.log(error))
})

// 輸出 router
module.exports = router