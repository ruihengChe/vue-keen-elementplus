import axios from 'axios';
const request = axios.create({
    // baseURL: 'http://yiken.top:3000',
    baseURL: 'http://127.0.0.1:3000',
    timeout: 500
});

//请求拦截器
request.interceptors.request.use(
    config => {
        //在发送请求之前做某事
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

//响应拦截器
request.interceptors.response.use(
    response => {
        //对响应数据做些事
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);
export default request;