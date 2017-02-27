<template>
	<div id="begin" class="begin">
	  <swiper height="667px" :show-dots="false">
      <swiper-item><h2 class="fadeInUp animated"><img src="../imgs/s1.png" alt="#"></h2></swiper-item>
      <swiper-item><h2 class="fadeInUp animated"><img src="../imgs/s2.png" alt="#"></h2></swiper-item>
      <swiper-item><h2 class="fadeInUp animated"><img src="../imgs/s3.png" alt="#"></h2></swiper-item>
      <swiper-item><h2 class="fadeInUp animated"><img src="../imgs/s4.png" alt="#"></h2></swiper-item>
      <swiper-item>
        <h2 class="fadeInUp animated hp">
        <router-link to="/message">
        <span class="sp">跳过</span>
        </router-link>
        <ul class='btn'>
        <li><router-link to="/message">暂不</router-link></li>
        <li><router-link to="/map">确定</router-link></li>
        </ul>
        <img src="../imgs/s5.png" alt="#">
        </h2>
      </swiper-item>
     
    </swiper>
	</div>
</template>
<script>
    import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from 'vux'
	export default{
		name:"begin",
		components: { 
			Swiper, 
			GroupTitle, 
			SwiperItem, 
			XButton, 
			Divider
		}
	}
</script>
<style scoped>
@import '~vux/src/styles/center.less';
	.begin{
		height: 100%;
		width: 100%;
	}
	.begin img{
		width: 100%;
		height:100%;
	}
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
.hp{
  position: relative;
}
.sp{
  position: absolute;
  color: #fff;
  right: 10px;
  top:10px;
  font-size: 18px;
  font-weight: normal;
}
.btn{
  position: absolute;
  bottom: 50px;
  display: -webkit-flex;
  padding-left: 43px;
  font-size: 16px;
  
}
.btn li{
  width: 135px;
  height: 42px;
  border-radius: 5px;
  border: 1px solid #fff;
  line-height: 42px;
  text-align: center;
  margin-right: 22px;
}
.btn li a:first-of-type{
  color: #fff;
}
.btn li:last-of-type{
   background: #fff;
}
.btn li:last-of-type a{
    color: #3D9BBF;
    
}

@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(100%,0 , 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(100%,0, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
.fadeInUp {
  animation-name: fadeInUp;
}
</style>