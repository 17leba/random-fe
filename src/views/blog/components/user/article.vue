<template>
  <div class="main">
    <h1>{{ result.title }}</h1>
    <span class="date">{{ result.modified_time|formatDate }}</span>
    <div class="ql-show" v-html="result.content"></div>
  </div>

</template>

<script>
import axios from 'utils/curl';
import { Toast } from 'mint-ui';

export default {
  data() {
    return {
      result: {}
    }
  },
  async created (){
    let res = await axios.get(`/api/article/${this.$route.params.id}`)
    if(res.success){
      this.result = res.data
    }else{
      Toast(res.message)
    }
  }
}

</script>

<style lang="scss">
@import "~css/editor";
.ql-show{
  padding: 0;
  margin-top: 20px;
}
.ql-show img{
  max-width: 800px;
  display: block;
  margin: 20px auto;
}
</style>
<style lang="scss" scoped>
  .main{
    font-size: 16px;
    padding: 30px;
  }
  h1{
    font-size: 20px;
    margin-bottom: 20px;
  }
  .date{
    font-size: 14px;
    color: #666;
  }
</style>
