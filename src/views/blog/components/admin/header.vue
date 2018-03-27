<template>
  <header>
    <h1>
      <router-link :to="{ name: 'adminHome' }">Admin</router-link>
    </h1>
    <Button type="primary" size="small" class="btn" @click="addArticle">添加文章</Button>
  </header>

</template>

<script>
import { Button } from 'mint-ui'

export default {
  data() {
    return {
    }
  },
  components: {
    Button
  },
  methods: {
    addArticle (){
      this.$router.push({
        name: 'addArticle'
      })
    }
  }
}

</script>

<style lang="scss" scoped="">
@import '~css/common/var';
header {
    display: flex;
    justify-content: space-between;
    position: fixed;
    left: 0;
    top: 0;
    padding: 10px 20px;
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
</style>
