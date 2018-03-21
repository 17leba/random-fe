<template>
  <div class="user-wrap">
        <input type="text"
               v-model="username"
               class="user-input"
               placeholder="用户名">
        <input type="password"
               v-model="password"
               class="user-input"
               placeholder="密码"
               @keyup.enter="login">
        <button class="btn"
                @click="login">登录</button>
    </div>

</template>

<script>
import axios from 'utils/curl';
import { Toast } from 'mint-ui';

export default {

  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login() {
      if (!this.username.trim() || !this.password.trim()) {
        Toast('请输入用户名/密码')
        return
      }
      let result = await axios.post('/api/user/login', {
        username: this.username,
        password: this.password,
        type: 'admin'
      })
      if (!result.success) {
        Toast(result.message)
      } else {
        this.$store.dispatch('updateUserInfo', {
          isLogin: true,
          user_id: result.user_id,
          username: result.username
        })
      }
    },
  }
}

</script>

<style lang="scss" scoped="">
@import '~css/common/var';
@import '~css/common/mixin';
.user-wrap {
    @include center;
    max-width: 400px;
}
.user-input {
    width: 300px;
    height: 36px;
    font-size: 15px;
    margin-bottom: 15px;
    line-height: 36px;
    border: 1px solid #666;
    text-indent: 5px;
    border-radius: 3px;
}
.btn {
    @include button;
    width: 300px;
    background-color: $commonColor;
    color: #fff;
    line-height: 36px;
    border-radius: 5px;
    font-size: 16px;
}
</style>
