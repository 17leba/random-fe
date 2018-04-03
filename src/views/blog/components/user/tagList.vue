<template>
  <div >
    <ul>
      <li class="list" v-for="item in result">
        <h2>
          <router-link 
            :to="{ name: 'article-detail',params: { id: item.id } }"
            class="link">{{ item.title }}</router-link>
        </h2>
        <span class="time">{{ item.create_time|formatDate }}</span>
        <div v-html="item.description" class="description">
        </div>
      </li>
    </ul>
    <page 
    :curPage="curPage"
      :changePage="changePage" />
  </div>
</template>

<script>
import axios from 'utils/curl';
import { Button, Toast } from 'mint-ui';
import page from './../page'

export default {
  data() {
    return {
      result: [],
      tags: [],
      curPage: +this.$route.query.id || 1,
      noPage: false
    }
  },
  components: {
    Button,
    page
  },

  created() {
    document.title = "YPBer's Blog"
    this.getList(this.curPage)
  },
  methods: {
    async getList(page) {
      let res = await axios.get('/api/tag/list', {
        page: page,
        tag: this.$route.params.tag
      })
      if (res.success) {
        if (res.data.length) {
          this.result = res.data
        } else {
          this.noPage = true
        }
      } else {
        Toast(res.message)
      }
      return res
    },
    async changePage(page) {
      if (page <= 0) {
        Toast('已到第一页')
        return
      }
      await this.getList(page)
      if (!this.noPage) {
        this.$router.push({
          name: 'tag-search',
          params: {
            tag: this.$route.params.tag
          },
          query: {
            page: page
          }
        })
        this.curPage = page
      } else {
        Toast('已到最后一页')
      }
    }
  }
}

</script>

<style lang="scss" scoped="">
@import '~css/common/var';
.tags{
  overflow: hidden;
  span{
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
  clear: both;
  text-align: center;
}
</style>
