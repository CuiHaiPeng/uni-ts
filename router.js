const fs = require('fs')
const path = require('path')
const router = require('./src/router/index.js')
// 路由
const getRouter = () => {
  const routrPath = './src/router/modules/'
  const srcPath = path.resolve(__dirname, routrPath)
  const result = fs.readdirSync(srcPath)
  const router = result.reduce((a, b) => {
    const route = require(routrPath + b).map(item => {
      item.path = item.path.replace(/^(\s|@\/)+|(\s|.vue)+$/g, '')
      return item
    })
    return [...a, ...route]
  }, [])
  return router
}
//页面
router.pages = getRouter()
// 写入
fs.writeFile(__dirname + '/src/pages.json', JSON.stringify(router, null, '  '), e =>
  e ? console.error(e) : console.log('pages.json 配置文件更新成功'),
)
