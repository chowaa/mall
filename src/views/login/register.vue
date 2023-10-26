<template>
  <div class="register-container">
    <el-form :model="registerForm" :rules="loginRules" ref="registerForm" >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="registerForm.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="registerForm.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="再次输入密码" prop="confirmPassword">
        <el-input type="password" v-model="registerForm.confirmPassword" placeholder="请再次输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="register">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registerForm: {
        username: '',
        password: '',
        confirmPassword: ''
      },
      loginRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 5, message: '用户名长度至少为6个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { validator: this.validatePassword, trigger: 'blur' }
        ],
        confirmPassword: [
          {
            required: true,
            message: '请再次输入密码',
            trigger: 'blur'
          },
          {
            validator: this.validateConfirmPassword, // 自定义确认密码验证方法
            trigger: 'blur'
          }
        ],
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
    validateConfirmPassword(rule, value, callback) {
      // 自定义确认密码验证方法
      if (value !== this.registerForm.password) {
        callback(new Error('两次输入的密码不一致'));
      } else {
        callback();
      }
    },
    register() {
      this.$refs.registerForm.validate(valid => {
        if (valid) {
          const { username, password } = this.registerForm;

          // 从 localStorage 中获取已有账号信息
          let existingAccounts = JSON.parse(localStorage.getItem('accounts')) || [];

          // 检查账号是否已存在
          const accountExists = existingAccounts.some(item => item.username === username);
          if (accountExists) {
            alert("账号已存在");
          } else {
            // 添加新账号信息到数组
            existingAccounts.push({ username, password });

            // 将更新后的账号信息重新保存到 localStorage
            localStorage.setItem('accounts', JSON.stringify(existingAccounts));
            this.$message.success('注册成功！')
            this.username = ''
            this.password = ''
            this.confirmPassword = ''
            this.$parent.type = true
            // this.$router.push({
            //   name: 'login'
            // });
          }

        }
      });
    },

  }
};
</script>

<style scoped>
.register-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //height: 100vh;
}

.el-form {
  width: 400px;
}
</style>
