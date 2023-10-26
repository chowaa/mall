<template>
  <div class="login-container">
    <el-form :model="loginForm" :rules="loginRules" ref="loginForm" >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 5, message: '用户名长度至少为6个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { validator: this.validatePassword, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    validatePassword(rule, value, callback) {
      if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(value)) {
        callback(new Error('密码必须包含英文大小写字母和数字，且长度至少为8位'));
      } else {
        callback();
      }
    },
    login() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          // 表单验证通过，执行登录逻辑
          // 获取用户输入的用户名和密码
          const { username, password } = this.loginForm;

          // 从 localStorage 中获取已注册的账号信息
          const existingAccounts = JSON.parse(localStorage.getItem('accounts'));

          // 检查用户名和密码是否匹配已注册的账号信息
          const matchingAccount = existingAccounts.find(account => account.username === username && account.password === password);

          if (matchingAccount) {
            // 登录成功
            this.$message.success('登录成功')
            this.$store.commit('loginAndLogOut', true)
            this.$router.replace({
              name: 'Products'
            })
          } else {
            // 登录失败
            this.$message.error('登录失败：用户名或密码不匹配')
          }
        }
      });
    }
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.el-form {
  width: 400px;
}
</style>
