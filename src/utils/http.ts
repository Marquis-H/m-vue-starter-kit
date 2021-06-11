import axios from 'axios'
import { ElLoading, ElMessage } from 'element-plus'

let loading: any = null
const instance: any = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 8000,
    headers: { 'Cache-Control': 'no-cache', 'locale': "" }
})

axios.interceptors.request.use(
    config => {
        // token
        const token = null;
        token && (config.headers.Authorization = "Bearer " + token);
        // loading
        loading = ElLoading.service({
            spinner: 'fa fa-spinner fa-spin fa-3x fa-fw',
            text: '拼命加载中...'
        })
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

axios.interceptors.response.use(
    response => {
        loading.close()
        const res = response.data
        if (res.code !== 0) {
            // 处理非成功情况
            ElMessage.error(res.message);
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return Promise.resolve(response)
        }
    },
    error => {
        loading.close()
        if (error.response.status) {
            switch (error.response.status) {
                case 401:
                    break;
                case 403:
                    break;
                case 404:
                    ElMessage.error('网络请求不存在');
                    break;
                default:
                    ElMessage.error('请求超时, 请刷新重试');
            }

            return Promise.reject(error.response);
        }
    }
)

/**
 * Get
 * @param url 
 * @param params 
 * @returns 
 */
export function get(url: string, params: object, config: object = {}) {
    return new Promise((resolve, reject) => {
        instance({
            method: 'get',
            url,
            params,
            ...config
        }).then((response: any) => {
            resolve(response)
        }).catch((error: any) => {
            reject(error)
        })
    });
}

/**
 * Post
 * @param url 
 * @param params 
 * @returns 
 */
export function post(url: string, params: object, data: string, config = {}) {
    return new Promise((resolve, reject) => {
        instance({
            method: 'post',
            url,
            params,
            data,
            ...config
        }).then((response: any) => {
            resolve(response)
        }).catch((error: any) => {
            reject(error)
        })
    });
}

export default instance