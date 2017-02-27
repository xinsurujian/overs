<template>
  <div class="app" id="app">
    <router-view class="bigbox"></router-view>
  </div>
</template>

<script>
import { Swiper } from 'vux'
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

.app{
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: -webkit-flex;
  -webkit-flex-direction:column;
  
}
.bigbox{
  width:100%;
  height: 100%;
 }
@font-face{
  font-family: "iconfont";
  src:url("./iconfont/iconfont.ttf");
  src:url("./iconfont/iconfont.woff");
}
.icon{
  font-family: "iconfont";
} 
</style>
