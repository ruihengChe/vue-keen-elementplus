import request from '@/utils/request'

export function getDashboardData (parmas) {
    return request({
        url: '/dashboard/getData',
        method: 'get',
        parmas
    })
}
