<template>
  <header>
    <h1>YPBer's blog</h1>
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
</style>
