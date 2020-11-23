// 載入express router
const express = require('express')
const router = express.Router()
// 載入 mongoose model
const Record = require('../../models/record')

// 設定路由
router.delete('/:id', (req, res) => {
  const id = req.params.id
  Record.findById(id)
        .then(record => record.remove())
        .then(() => res.redirect('/'))
        .catch(error => console.log(error))
})

// 輸出 router
module.exports = router