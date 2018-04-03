<template>
  <header>
    <h1>
      <router-link :to="{ name: 'home' }">YPBer's Blog</router-link>
      <div class="search">
        <input type="text" class="search-input" v-model="query" @keyup.enter="submit"/>
        <Button type="primary" size="small" @click="submit">搜索</Button>
      </div>
    </h1>
  </header>

</template>

<script>
import { Button, Toast } from 'mint-ui'

export default {
  data() {
    return {
      query: ''
    }
  },
  components: {
    Button,
    Toast
  },
  methods: {
    submit (){
      if(!this.query.trim()){
        Toast('搜索内容为空！')
        return
      }
      this.$router.push({
        name: 'querySearch',
        params: {
          query: this.query
        }
      })
      
    }
  }
}

</script>

<style lang="scss" scoped="">
@import '~css/common/var';
@import '~css/common/mixin';
header {
    position: fixed;
    left: 0;
    top: 0;
    padding: 20px;
    z-index: 999;
    width: 100%;
    box-sizing: border-box;
    min-height: 40px;
    border-bottom: 2px solid $commonColor;
    background-color: #fff;
    font-size: 20px;
    box-shadow: 2px 2px 20px #ccc;
}
h1{
  font-size: 24px;
}
.search{
  float: right;
  display: flex;
  overflow: hidden;
  button{
    @include button;
    width: 60px;
    border-radius: 0 3px 3px 0;
  }
}
.search-input{
  @include input;
  width: 200px;  
  text-indent: 10px;
  border: 1px solid $commonColor;
  border-right: none;
  border-radius: 3px 0  0 3px;
}
</style>
