const chokidar = require('chokidar')
const fs = require('fs')
const path = require('path')
//路径
const routrPath = './src/router/modules/'
const srcPath = path.resolve(__dirname, routrPath)
//获取路由信息
const getRouter = () => {
  //动态录取当前路径下所有文件
  const result = fs.readdirSync(srcPath)
  //遍历累加路由
  const routers = result.reduce((a, b) => {
    // 文件地址
    const routerPath = routrPath + b
    // 清除文件缓存
    delete require.cache[require.resolve(routerPath)]
    // 引入文件内容并对内容进行处理
    const route = require(routerPath).map(item => {
      item.path = item.path.replace(/^(\s|@\/)+|(\s|.vue)+$/g, '')
      return item
    })
    //返回累加数据
    return a.concat(route)
  }, [])
  //返回路由
  return routers
}

// 更新router
const updateRouter = () => {
  const indexPath = './src/router/index.js'
  // 清除缓存
  delete require.cache[require.resolve(indexPath)]
  // 引入最新的全局配置文件
  const pageJson = require(indexPath)
  // 引入页面数据
  pageJson.pages = getRouter()
  // 写入
  fs.writeFile(__dirname + '/src/pages.json', JSON.stringify(pageJson, null, '  '), e =>
    e ? console.error(e) : console.log('pages.json 配置文件更新成功'),
  )
}

//更新路由
updateRouter()

//监听文件改变 路由生效
chokidar
  .watch(['./src/router/modules/*.js', './src/router/*.js'], {
    depth: 0,
  })
  .on('change', updateRouter)
