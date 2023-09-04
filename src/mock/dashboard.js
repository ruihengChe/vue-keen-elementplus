import Mock from 'mockjs'
export default {
    getDashboardData: () => {
        return {
            code: 200,
            data: {
                videoData: [
                    {
                        name: 'SpringBoot',
                        value: Mock.Random.float(1000, 10000, 0, 3)
                    },
                    {
                        name: 'Vue',
                        value: Mock.Random.float(1000, 10000, 0, 3)
                    },
                    {
                        name: '小程序',
                        value: Mock.Random.float(1000, 10000, 0, 3)
                    },
                    {
                        name: 'Uniapp',
                        value: Mock.Random.float(1000, 10000, 0, 3)
                    },
                    {
                        name: 'java',
                        value: Mock.Random.float(1000, 10000, 0, 3)
                    },
                    {
                        name: '视频1',
                        value: Mock.Random.float(1000, 10000, 0, 3)
                    }
                ]
            }
        }
    },
    getLoginData: () => {
        return {
            code: 200,
            data: {
                token: 'admin',
                role: 'admin',
                name: 'admin',
                avatar: 'https://avatars.githubusercontent.com/u/56866901?s=60&v=4',
                introduction: '我是超级管理员'
            }
        }
    }
}
