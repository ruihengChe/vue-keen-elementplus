import Mock from 'mockjs'
export default {
    getMenu: config => {
        const { username, password } = JSON.parse(config.body)
        console.log(JSON.parse(config.body))
        // 先判断用户是否存在
        if (username === 'admin' || username === 'wp') {
            // 判断账号和密码是否对应
            if (username === 'admin' && password === '123456') {
                return {
                    code: 200,
                    data: {
                        menu: [
                            // 控制台
                            {
                                path: '/',
                                name: 'console',
                                label: '控制台',
                                icon: 'HomeFilled',
                                url: 'console/consoleView'
                            },
                            // 用户管理
                            {
                                path: '/user',
                                name: 'user',
                                label: '用户管理',
                                icon: 'Avatar',
                                url: 'users/userView'
                            },
                            // 功能管理
                            {
                                label: '功能管理',
                                icon: 'HelpFilled',
                                children: [
                                    {
                                        path: '/download',
                                        name: 'download',
                                        label: '下载管理',
                                        icon: 'List',
                                        url: 'plugins/downloadView'
                                    },
                                    {
                                        path: '/upload',
                                        name: 'upload',
                                        label: '上传管理',
                                        icon: 'UploadFilled',
                                        url: 'plugins/uploadView'
                                    }
                                ]
                            },
                            // 开发日志
                            {
                                path: '/log',
                                name: 'log',
                                label: '开发日志',
                                icon: 'Avatar',
                                url: 'logs'
                            }
                        ],
                        token: Mock.Random.guid(),
                        message: '获取成功'
                    }
                }
            } else if (username === 'wp' && password === '123456') {
                return {
                    code: 200,
                    data: {
                        menu: [
                            // 控制台
                            {
                                path: '/console',
                                name: 'console',
                                label: '控制台',
                                icon: 'HomeFilled',
                                url: 'console/consoleView'
                            },
                            // 用户管理
                            {
                                path: '/user',
                                name: 'user',
                                label: '用户管理',
                                icon: 'Avatar',
                                url: 'users/userView'
                            }
                        ],
                        token: Mock.Random.guid(),
                        message: '获取成功'
                    }
                }
            } else {
                return {
                    code: -999,
                    data: {
                        message: '密码错误'
                    }
                }
            }
        } else {
            return {
                code: -999,
                data: {
                    message: '用户不存在'
                }
            }
        }
    }
}
