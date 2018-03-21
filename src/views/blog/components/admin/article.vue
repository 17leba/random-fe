<template>
<div>
    <input type="text"
           placeholder="文章标题"
           v-model="title"
           class="title">
    <vue-editor v-model="content"
                @imageAdded="handleImageAdded"
                useCustomImageHandler
                class="content"></vue-editor>
    <Button type="primary"
            @click="saveContent" class="btn" :class="{disabled: isSaving}">Save</Button>
</div>

</template>

<script>
import axios from 'utils/curl';

import { VueEditor } from 'vue2-editor';
import { Button, Toast } from 'mint-ui';
export default {

  components: {
    VueEditor,
    Button
  },

  data() {
    return {
      result: {},
      title: '',
      content: '',
      isSaving: false
    }
  },
  created() {
    if (this.$route.params.id) {
      this.getContent()
    }
  },
  methods: {
    async getContent() {
      let result = await axios.get(`/api/article/${this.$route.params.id}`)
      this.result = result.data

      this.title = this.result.title
      this.content = this.result.content
    },
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      let formData = new FormData()
      formData.append('image', file)

      let result = await axios.post('/api/upload/image', formData)

      if (result.url) {
        Editor.insertEmbed(cursorLocation, 'image', result.url)
        resetUploader()
      } else {
        Toast(result.message)
      }
    },
    async saveContent() {
      if(this.isSaving) return
      this.isSaving = true
      let result = await axios.post('/api/article/save', {
        article_id: this.$route.params.id || '',
        title: this.title,
        content: this.content
      })
      Toast(result.message)
      this.isSaving = false
      if (result.success) {
        setTimeout(() => {
          this.$router.push({
            name: 'list',
            params: {
              id: 1
            }
          })
        }, 1000)
      }
    }
  }
}

</script>

<style lang="scss">
@import '~css/editor';
</style>
<style lang="scss" scoped>
@import '~css/common/mixin';
.title{
  @include input;
  border: 1px solid #aaa;
  height: 40px;
  padding-left: 20px;
  font-size: 18px;
  margin-bottom: 15px;
}
.btn{
  display: block;
  width: 200px;
  margin: 10px auto 0;
  &.disabled{
    background-color: #ccc;
  }
}
</style>
