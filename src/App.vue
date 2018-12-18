<template>
<div id="app">
    <div class="share-buttons-wrap" id="share-btn-click">
        
        <span class="share-icon takao" id="kakao-share-btn"><a href="//story.kakao.com/s/share?url=http%3A%2F%2F127.0.0.1%3A4000%2F&amp;text=Bgogo%20%EB%86%8D%EC%9E%A5%EC%97%90%EC%84%9C%20USDT%EB%A5%BC%20%ED%9A%8D%EB%93%9D%ED%96%88%EC%8A%B5%EB%8B%88%EB%8B%A4!&amp;kakao_agent=sdk%2F1.25.10%20os%2Fjavascript%20lang%2Fzh-CN%20device%2FMacIntel%20origin%2Fhttp%253A%252F%252F127.0.0.1%253A4000&amp;app_key=d1dd83e512cdf3fc5f351b0a75210963" target="_blank"><img src="//static.bgogo.com/2018/12/18/icon_small.png" width="24" height="24"></a></span>
          <a href="//share.naver.com/web/shareView.nhn?url=http%253A%252F%252F127.0.0.1%253A4000%252F&amp;title=Bgogo%20%EB%86%8D%EC%9E%A5" class="share-icon naver st-custom-button st-hide-label" id="naver-share-btn" target="_blank"></a>
        <span class="share-icon facebook st-custom-button" data-network="facebook" data-title="Bgogo 농장" data-image="//static.bgogo.com/2018/12/18/poster-kr@2x.png" data-description="Bgogo 농장에서 USDT를 획득했습니다!">Facebook</span>
        <span class="share-icon twitter st-custom-button" data-network="twitter" data-title="Bgogo 농장에서 USDT를 획득했습니다!" data-image="//static.bgogo.com/2018/12/18/poster-kr@2x.png" data-description="Bgogo 농장에서 USDT를 획득했습니다!">Twitter</span>
      
    </div>
    
    <!-- <router-view/> -->
</div>
</template>

<script>
export default {
  	data() {
    	return {}
  	}
}

</script>

<style lang="scss">
@import '~css/common/reset';
@import '~css/common/mixin';
$vm_design: 375;
$vm_fontSize: 37.5;
html{
	font-size: ($vm_fontSize / $vm_design) * 100vw;
	@media screen and (max-width: 320px) {
        font-size: 32px;
  }
  @media screen and (min-width: 640px) {
      font-size: 64px;
  }
}
body {
    font-size: rem(14);
}
</style>
