<template>
<div v-infinite-scroll="getData"
     infinite-scroll-disabled="noData"
     infinite-scroll-distance="20">
    <router-link v-for="(item,index) in result"
                 :key="index"
                 :to="switchType(item)"
                 class="love-list"><i>{{ item.type }}：</i>{{ item.title }}</router-link>
    <Spinner type="fading-circle"
             color="#fa7d3c"
             v-show="!noData"
             class="loading">
    </Spinner>
</div>

</template>

<script>
import Vue from 'vue';
import axios from 'utils/curl';
import { mapState } from 'vuex';
import { InfiniteScroll, Toast, Spinner } from 'mint-ui';
Vue.use(InfiniteScroll)

export default {
  data() {
    return {
      noData: false,
      currentPage: 1,
      result: [],
      limit: 20
    }
  },
  components: {
    Spinner
  },
  computed: {
    ...mapState({
          loveData: state => state.random.loveData
    })
  },
  created() {
    this.$store.dispatch('hideFeatureBtn')
  },
  methods: {
    async getData() {
      let res = await axios.get('/api/love/list', {
        page: this.currentPage++,
        limit: this.limit
      })
      if (res.success) {
        this.result = this.result.concat(res.data)
        if (res.data.length < this.limit) {
          this.noData = true
        }
      } else {
        Toast(res.message)
      }
      this.$store.dispatch('closeLoading')
    },
    switchType(item) {
      let url = ''
      switch (item.type) {
        case 'question':
          url = `/random/question?id=${item.love_id}`
          break
        case 'news':
          url = `/random/news?id=${item.love_id}`
          break
        case 'music':
          // url = ''
          break
        case 'book':
          url = `/random/book?id=${item.love_id}`
          break
      }
      return url
    }
  }
}

</script>

<style lang="scss" scoped="">
@import '~css/common/var';
@import '~css/common/mixin';
.love-list {
    @include line-clamp(1);
    display: block;
    line-height: rem(36);
    text-indent: rem(5);
    border-bottom: 1px solid $commonColor;
    i {
        color: #999;
    }
}

.loading {
    display: flex;
    justify-content: center;
}
</style>
