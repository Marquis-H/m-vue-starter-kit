import config from '@/utils/config'

export function throttle(fn: Function, delay: number) {

}

/**
 * 修改Title
 * @param {*} pageTitle
 */
export function getPageTitle(pageTitle: string) {
    const title = config.title

    if (pageTitle) {
        return `${pageTitle} - ${title}`
    }
    return `${title}`
}