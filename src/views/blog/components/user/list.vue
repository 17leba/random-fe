<template>
  <div class="wrap">
    <ul class="left">
      <li class="list" v-for="item in result">
        <h2>
          <router-link 
            :to="{ name: 'articleDetail',params: { id: item.id } }"
            class="link">{{ item.title }}</router-link>
        </h2>
        <span class="time">{{ item.create_time|formatDate }}</span>
        <div v-html="item.description" class="description">
        </div>
      </li>
    </ul>
    <div class="tags">
      <Badge size="normal" v-for="item in tags" :key="item">
        <router-link :to="{ name: 'tagSearch',params: { tag: item } }" class="tag">{{ item }}</router-link>
      </Badge>
    </div>
    <page 
      :curPage="curPage"
      :changePage="changePage" />
  </div>
</template>

<script>
import axios from 'utils/curl';
import { Button, Toast, Badge } from 'mint-ui';
import page from './../page'

export default {
  data() {
    return {
      result: [],
      tags: [],
      curPage: +this.$route.params.id || 1,
      noPage: false
    }
  },
  components: {
    Button,
    page,
    Badge
  },

  created() {
    document.title = "YPBer's Blog"
    this.getList(this.curPage)
    this.getTags()
  },
  methods: {
    async getList(page) {
      let res = await axios.get('/api/article/list', {
        page: page
      })
      if (res.success) {
        if (res.data.length) {
          this.result = res.data
        } else {
          // this.result = []
          this.noPage = true
        }
      } else {
        Toast(res.message)
      }
      return res
    },
    async getTags (){
      let res = await axios.get('/api/tags')
      if(res.success){
        this.tags = res.data
      }else{
        Toast(res.message)
      }
    },
    async changePage(page) {
      if (page <= 0) {
        Toast('已到第一页')
        return
      }
      await this.getList(page)
      if(this.noPage){
        Toast('已到最后一页')
        return
      }
      this.$router.push({
        name: 'articleList',
        params: {
          id: page
        }
      })
      this.curPage = page
    }
  }
}

</script>

<style lang="scss" scoped="">
@import '~css/common/var';
.wrap{
  display: flex;
  flex-wrap: wrap;
}
.left{
  max-width: 800px;
  margin-right: 10px;
  padding-right: 10px;
}
.tags{
  max-width: 250px;
  span{
    padding: 5px 10px;
    margin: 5px;
  }
  .tag{
    color: #fff;
  }
}
.list{
  margin-bottom: 30px;
  h2{
    font-size: 18px;
    margin-bottom: 15px;
  }
}
.time{
  font-size: 14px;
  color: #666;
}
.description{
  margin-top: 20px;
  line-height: 1.8;
  font-size: 16px;
}
.link{
  color: #000;
  &:hover{
    color: $commonColor;
  }
}
.page{
  width: 100%;
  text-align: center;
  margin: 30px;
}
</style>
