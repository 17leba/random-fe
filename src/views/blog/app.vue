<template>
<div>
    <Header />
    <router-view class="main"/>
</div>

</template>

<script>
import Header from './components/user/header';

export default {

  data() {
    return {
    }
  },
  components: {
    Header
  }
}

</script>
<style>
  img{
    max-width: 100%;
  }
</style>
<style lang="scss" scoped="">
.main{
  max-width: 1080px;
  margin: 80px auto 0;
  font-size: 16px;
  padding: 10px 20px;
}
</style>
