<template>
<div class="wrap">
    <div class="feedback">
        <textarea v-model="feedback"
                  autocomplete="off"></textarea>
        <button @click="submit">Submit</button>
    </div>
    <span class="close"
          :class="{ disabled: isFeed }"
          @click="closeFeedback">x</span>
</div>

</template>

<script>
import axios from 'utils/curl';
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      feedback: '',
      isFeed: false
    }
  },
  methods: {
    closeFeedback() {
      this.feedback = ''
      this.$emit('closeFeedback')
    },
    async submit() {
      if (!this.feedback.trim()) {
        Toast('内容为空')
        return
      }
      this.isFeed = true
      let res = await axios.post('/api/random/feedback', {
        content: this.feedback.trim()
      })
      this.isFeed = false
      if (res.success) {
        Toast('反馈提交成功')
        this.closeFeedback()
      } else {
        Toast(res.message)
      }
    }
  }
}

</script>

<style lang="scss" scoped="">
@import '~css/common/var';
@import '~css/common/mixin';
.wrap {
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .6);
}

.close {
    position: absolute;
    right: rem(20);
    top: rem(20);
    font-size: rem(30);
    color: #fff;
}

.feedback {
    @include center;
    textarea {
        @include appearance;
        outline: none;
        font-size: rem(16);
        width: rem(300);
        min-height: rem(100);
        padding: rem(10);
        line-height: 1.2;
        color: #000;
        margin-bottom: rem(10);
        border: 1px solid $commonColor;
        border-radius: rem(5);
    }
    button {
        @include button;
        width: rem(320);
        height: rem(32);
        line-height: rem(32);
        color: #fff;
        font-size: rem(15);
        background-color: $commonColor;
        border-radius: rem(5);
        &.disabled {
            background-color: #eee;
        }
    }
}
</style>
