<template>
<div v-show="hasData">
    <Header />
    <router-view class="main" v-if="userInfo.isLogin"/>
    <Login v-if="!userInfo.isLogin"/>
</div>
</template>

<script>
import { mapState } from 'vuex';
import Header from './components/admin/header';
import Login from './components/admin/login';

export default {
  data() {
    return {
      hasData: false,
      userInfo: {}
    }
  },
  components: {
    Header,
    Login
  },
  async created (){
    this.userInfo = await this.$store.dispatch('getLogin',{
      type: 'admin'
    })
    this.hasData = true
  }
}
</script>

<style lang="scss" scoped="">
.main{
  margin-top: 70px;
  font-size: 16px;
  padding: 10px 20px;
}
</style>
