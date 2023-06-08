import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/base.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconVue from '@element-plus/icons-vue'

const app = createApp(App)
// 全局注册图标组件
for (const [key, component] of Object.entries(ElementPlusIconVue)) {
  app.component(key, component)
}

// 全局注册组件
const files = require.context('./', true, /\.vue$/)
files.keys().forEach((key) => {
  const componentConfig = files(key)
  const fileName = key.split('/').pop().replace(/\.\w+$/, '')
  app.component(fileName, componentConfig.default || componentConfig)
})

app.use(ElementPlus).use(store).use(router).mount('#app')
