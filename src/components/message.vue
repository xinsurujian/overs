<template>
	<div id="message" class="message">
	 <h2 class="fadeInUp animated hp">
        <router-link to="/index">
        <span class="sp">跳过</span>
        </router-link>
        <ul class="btn">
        <li><router-link to="/index">暂不</router-link></li>
        <li><router-link to="/send">确定</router-link></li>
        </ul>
        <img src="../imgs/s6.png" alt="#">
      </h2>
      
      
	</div>
</template>
<script>
    import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from 'vux'
	export default{
		name:"message",
		components: { 
			Swiper, 
			GroupTitle, 
			SwiperItem, 
			XButton, 
			Divider
		}
	}
</script>
<style>
@import '~vux/src/styles/center.less';
	.message{
		height: 100%;
		width: 100%;
	}
	.message img{
		width: 100%;
		height:100%;
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
.btn li a{
  color: #fff;
}

.btn li:last-of-type{
   background: #fff;
}
.btn li:last-of-type a{
   color: #27AD8C;
}
</style>