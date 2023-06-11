<template>
    <div class="login-container">
        <div class="conbox">
            <div class="login_title">
                <p>KEEN JINN</p>
            </div>
            <div class="login_con">
                <el-form ref="loginForm" label-position="right" :model="form" :rules="rules" label-width="120px"
                    class="login-form">
                    <el-form-item label="用户名" prop="username" label-width="80px">
                        <el-input v-model="form.username" placeholder="请输入用户名" />
                    </el-form-item>
                    <el-form-item label="密码" prop="password" label-width="80px">
                        <el-input type="password" v-model="form.password" placeholder="请输入密码" />
                    </el-form-item>
                    <div style="width: 100%;">
                        <el-button type="primary" @click="loginView" style="width: 100%;">登录</el-button>
                    </div>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script setup>
// import downloadPdf from '@/api/downloadPdf'
import { reactive, ref } from 'vue'
import { login } from '@/api/login'

const form = reactive({
    username: '',
    password: ''
})

const rules = reactive({
    username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})
const loginForm = ref(null)
const loginView = async () => {
    loginForm.value.validate(async valid => {
        if (valid) {
            // TODO: 登录逻辑
            const { username: userName, password } = form
            const result = await login({ userName, password })
            console.log(result)
        }
    })
}

</script>

<style lang="scss" scoped>
.login-container {
    position: relative;
    background-color: #b8e5f8;
    // background-image: url(../../assets/bg.png);
    background-image: url(../../assets/bgt.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;

    .conbox {
        height: calc(100% - 42px);
        align-items: center;
        flex-direction: column;
        display: flex;
        flex: 1 1;
        min-height: 688px;
        margin-top: 100px;
    }

    .login_title {
        width: 100%;
        height: 81px;
        // background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        margin-bottom: 100px;

        p {
            font-size: 40px;
            font-weight: 600;
            color: #0066ff;
            height: 81px;
            text-align: center;
            line-height: 81px;
        }
    }

    .login_con {
        width: 400px;
        height: 350px;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;

        .uploadpdf {
            visibility: hidden;
        }
    }

    .login-form {
        width: 80%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;

        .el-form-item {
            width: 100%;
            margin-bottom: 20px;
        }
    }
}
</style>
