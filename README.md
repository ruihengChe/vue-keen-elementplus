# plus

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


表单组件
筛选组件
表格组件
echart组件
======================
权限管理
1、根据不同用户返回不同菜单
2、严格控制用户权限
3、实现思路：
    动态路由-----router.addRoutes()
    后端返回的数据格式要求
    触发时机------1>登录成功后触发的时机; 2>Cookie中存在对应数据，⾸次进⼊⻚⾯时触发
    实现思路

数据格式：[{
    icon: "s-home"
    label: "首页"
    name: "home"
    path: "/home"
    url: "home/home"
}, {...}, ...]


============
权限管理之动态返回菜单的实现

更改路由表
    根据是否需要权限的路由分类

vuex里补充mutation
    保存菜单数据
    动态添加菜单

生成路由的时机
    登录时,根据用户信息生成路由,并保存到vuex中
    刷新时,判断是否存在菜单数据，如果存在，则会动态添加路由，然后刷新⻚⾯


点击退出时，清除cookie后，刷新下⻚⾯

    
    