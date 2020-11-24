// 載入 mongoose連線檔
const db = require('../../config/mongoose')

// 載入record data-model
const Category = require('../category')

// 產生種子資料
db.once('open', () => {
  console.log('category database connected!')
  // 建立 promise
  const promise = []
  // 推入 promise function
  promise.push(
    Category.create(
      {
        category: 'living',
        icon: 'fas fa-home'
      },
      {
        category: 'traffic',
        icon: 'fas fa-shuttle-van'
      },
      {
        category: 'entertainment',
        icon: 'fas fa-grin-beam'
      },
      {
        category: 'food',
        icon: 'fas fa-utensils'
      },
      {
        category: 'others',
        icon: 'fas fa-pen'
      }
    )
  )
  // db 關門
  Promise.all(promise).then(() => db.close())
})