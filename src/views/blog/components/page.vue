<template>
  <div class="page">
        <Button type="default"
                size="small"
                @click="changePage(curPage - 1)">上一页</Button>
        <Button type="default"
                size="small"
                @click="changePage(curPage + 1)">下一页</Button>
    </div>
  </div>

</template>

<script>
import { Button } from 'mint-ui';
export default {

  data() {
    return {
    }
  },
  components: {
    Button
  },
  props: [ 'curPage','changePage' ]
}

</script>

<style lang="scss" scoped="">
.main{
  margin-top: 70px;
  font-size: 16px;
  padding: 10px 20px;
}
</style>
