import instance from '@/utils/http'
import config from '@/utils/config'

/**
 * 获取当前表单配置
 * @param {*} params
 */
export function getFormConfig(params = {}) {
    return instance({
        url: config['api_get_form_uri'],
        method: 'get',
        params
    })
}

/**
 * 提交表单
 * @param {*} params
 */
export function submitForm(data = {}) {
    return instance({
        url: config['api_submit_form_uri'],
        method: 'post',
        data
    })
}