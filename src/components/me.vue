<template>
	<div id="me">
	 <scroller lock-x height="100%" @on-scroll="onScroll">
      <div class="box2">
            <h2>我<i class="icon">&#xe645;</i></h2>
    <p><img src="../imgs/prosize.png" alt="#"><b>首次登陆即送50元代金券！</b><span>></span></p>
    <h3>优惠折扣</h3>
    <ul class="ul">
        <li><i class="icon">&#xe628;</i>申领的折扣<span>></span></li>
        <li><i class="icon">&#xe68a;</i>玩途优惠券<span>></span></li>
        
    </ul>
    <h3>联系玩途</h3>
    <ul>
        <li><i class="icon">&#xe603;</i>海外玩途服务热线<b>语言:中文,服务时间:24小时</b><span>></span></li>
        <li><i class="icon">&#xe603;</i>海内玩途服务热线<b>语言:中文,服务时间:24小时</b><span>></span></li>
        <li><i class="icon">&#xe6e3;</i>联系小管家<b>语言:中文,服务时间:9:00-19:00</b><span>></span></li>
    </ul>
    <h3>关于</h3>
       <h2>关于我们</h2>
       <img src="../imgs/map.png" alt="#" class="map">
       <h2>STORY|我们的故事</h2>
       <p>  即可目测妇女年后买走到这里一使劲哟哟没给人都与自己的爱意</p>
       <h2>MEDIA|媒体报道</h2>
       <p>  即可目测妇女年后买走到这里一使劲哟哟没给人都与自己的爱意</p>
      </div>
    </scroller>	
	
    </div>
	
</template>
<script>
	import { Scroller, Divider, Spinner, XButton, Group, Cell } from 'vux'
    export default{
        name:"me",
        data(){
            return {
                scrollTop: 0
            }
        },
        components: {
           Scroller,
            Divider,
            Spinner,
            XButton,
            Group,
            Cell
        },
        methods: {
           onScroll (pos) {
           console.log('on scroll', pos)
           this.scrollTop = pos.top
           },
        }
    }
</script>	
<style scoped>
	h2{
		width: 100%;
		height: 48px;
		text-align: center;
		line-height: 48px;
		position: relative;
		border-bottom: 1px solid #ccc;
	}
	h2 i{
		position: absolute;
		right: 10px;
		font-weight: normal;
	}
    ul i{
    	font-size: 22px;
    	color: #47B23F;
    }
    p{
    	width: 100%;
    	height: 85px;
    	line-height: 85px;
    	font-size: 14px;
    	position: relative;
    	

    }
    p img{
    	position: absolute;
    	width: 42px;
    	height: auto;
    	top:22px;
    	left: 10px;
    	

    }
    p span{
    	position: absolute;
    	right: 20px;

    }
    p b{
    	font-weight:normal;
    	padding-left: 72px;
    }
    h3{
    	height: 40px;
    	width: 100%;
    	background: #F7F9FA;
    	line-height: 40px;
    	padding-left: 10px;
    	-webkit-box-sizing:border-box;
    	color: #878787;
    	
    }
    ul{
    	border-top: 1px solid #D8DBDF;
    	border-bottom: 1px solid #D8DBDF;
    	padding-left: 15px;
    	-webkit-box-sizing:border-box;
    }
    ul i{
    	margin-right: 15px;
    }
    ul li{
    	padding-top: 20px;
    	font-weight: bolder;
    	height: 76px;
    	border-bottom: 1px solid #D8DBDF;
    	position: relative;
    	-webkit-box-sizing:border-box;
    }
    ul li:last-of-type{
    	border-bottom:none;
    }
    ul li span{
    	position: absolute;
    	right: 20px;
    	top: 50%;
    	margin-top: -17px;
    }
    ul b{
    	display: block;
    	color: #8A8A8A;
    	padding-left: 30px;
        font-size: 12px;
    }
    .ul li{
       height: 45px;
       line-height: 45px;
       padding-top: 0;
    }
    .map{
        height: 178px;
        width: auto;
    }
</style>