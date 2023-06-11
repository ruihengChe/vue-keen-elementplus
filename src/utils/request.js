import axios from 'axios'
import { ElMessage } from 'element-plus'
const request = axios.create({
    // baseURL: 'http://yiken.top:3000',
    baseURL: 'http://127.0.0.1:3001',
    timeout: 3000
})
console.log(process.env.VUE_APP_BASE_API)
// 请求拦截器
request.interceptors.request.use(
    config => {
    // 在发送请求之前做某事
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 响应拦截器
request.interceptors.response.use(
    response => {
        // 对响应数据做些事
        // return response;
        const data = response.data
        if (data.code === 200) {
            return Promise.resolve(data)
        } else {
            ElMessage({
                message: data.message || 'Error',
                type: 'error'
            })
            return Promise.reject(data)
        }
    },
    error => {
        return Promise.reject(error)
    }
)
export default request
