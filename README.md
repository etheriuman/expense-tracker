# 老爸ㄉ家庭記帳本
  愛亂花錢ㄉ老爸為了讓老媽放心而自己動手做了一個幫助自己記帳的應用程式。


![Image]()
---
- ## 運行環境需求:
  Node.js

- ## 資料庫需求:
  MongoDB

- ## 插件需求 :
1. npm
2. Express
3. Express-handlebars
4. Mongoose
5. Body-parser
6. Nodemon
7. Method-override

- ## 功能 :
1. 瀏覽所有支出項目與總支出，並依日期排序。
2. 新增、修改任何項目。
3. 分別瀏覽各支出類別的項目與類別總支出。

- ## 應用程式安裝前導 :
1. ### 請用 Mac users: 終端機 / Windows users: Git Bash 輸入以下內容：

2. 將專案從GitHub複製到你的本機中：
```
git clone https://github.com/etheriuman/expense-tracker.git
```
3. 進入到該資料夾中：
```
cd expense-tracker
```
4. 安裝npm：
```
npm init -y
```
5. 用npm指令安裝所有所需的插件：
```
npm i
```
6. 啟動你的資料庫
7. 產生種子資料到資料庫中：
```
npm run seed
```
8. 開始運行伺服器：
```
npm run dev
```
9. 將回傳的網址貼到瀏覽器中：
```
this project is listening on http://localhost:3000
```