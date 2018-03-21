<template>
<div>
    <ul class="list-wrap">
        <transition-group name="list"
                          leave-active-class="animated bounceOutRight">
            <li v-for="(item, index) in result"
                class="list"
                :key="item.id">
                <span class="sub">{{ item.id }}</span>
                <h2><router-link :to="`/blog/article/${item.id}`">{{ item.title }}</router-link></h2>
                <span class="create-time">创建于：{{ item.create_time|formatDate }}</span>
                <span class="update-time">更新于：{{ item.modified_time|formatDate }}</span>
                <div class="btn-wrap">
                    <router-link :to="`/blog/admin/${item.id}/edit`">
                        <Button type="primary"
                                size="small">
                            编辑
                        </Button>
                    </router-link>
                    <Button type="danger"
                            size="small"
                            @click="deleteArticle(item.id, index)">删除</Button>
                    <router-link :to="`/blog/article/${item.id}`">
                        <Button type="default"
                                size="small">
                            查看
                        </Button>
                    </router-link>
                </div>
            </li>
        </transition-group>
    </ul>
    <page 
      :curPage="curPage"
      :changePage="changePage" />
</div>

</template>

<script>
import axios from 'utils/curl';
import { Button, Toast, MessageBox } from 'mint-ui';
import page from './../page'

export default {
  data() {
    return {
      result: [],
      curPage: +this.$route.params.id || 1,
      noPage: false
    }
  },
  components: {
    Button,
    page
  },

  created() {
    this.getList(this.curPage)
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
          name: 'list',
          params: {
            id: page
          }
        })
        this.curPage = page
      } else {
        Toast('已到最后一页')
      }
    },
    async deleteArticle(id, index) {
      await MessageBox.confirm(`确定要删除这篇文章`)
      let res = await axios.post('/api/article/delete', {
        id: id
      })
      if(res.success){
        this.result.splice(index, 1)
      }else{
        Toast(res.message)
      }
    }
  }
}

</script>

<style lang="scss" scoped="">
@import '~css/animate';
.list-wrap {
    margin-bottom: 20px;
}

.list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
}

h2 {
    flex: 6;
}

.sub {
    flex: 1;
    font-size: 14px;
    color: #333;
}

.create-time,
.update-time {
    flex: 1.5;
    font-size: 13px;
    color: #aaa;
}

.btn-wrap {
    flex: 1.5;
}

.page {
    display: flex;
    justify-content: center;
}
</style>
