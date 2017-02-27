<template>
	<div id="dest" class="dest">
		<scroller lock-x height="100%" @on-scroll="onScroll">
      <div class="box2">
      	   <h2 class="tittle"><i class="icon">&#xe600;</i>普吉岛<b></b></h2>
	 <div class="banner">
	 <swiper auto  height="315px" dots-position="center">
    
      <swiper-item v-for="i in swiperImg"><h2 class="fadeInUp animated"><img :src="i.src" alt="#"></h2></swiper-item>
      </div>
	 <div class='img'>
	 	<dl v-for="item in dlList">
	 		<router-link :to="item.url">
	 		<dt><img :src="item.src" alt="#"></dt>
	 		<dd>{{item.title}}</dd>
	 		</router-link>
	 	</dl>
	 	
	 	
	 </div>
	 <div class="sx1 sx">
	 	<h2><img src="../imgs/tittle.png" alt="#">完全干货搜罗当地吃喝玩乐<span>></span><b>正确打开普吉岛的一页，旅途不再有遗憾</b></h2>
	 	<div class="scrollx">
	 		<scroller lock-y :scrollbar-x=false>
	 		      <div class="box1">
	 		        <div class="box1-item" v-for="i in sImg1">
	 		        	<img :src="i.src" alt="#">
	 		        </div>
	 		      </div>
	 		    </scroller>
	 		
	 		
	 	</div>
	 </div>	
	
	<div class="sx sx2">
		<h2><img src="../imgs/tittle1.png" alt="#">普吉必去餐厅精选<span>></span><b>一店一故事，品尝不平凡</b></h2>
		<div class="scrollx">
			<scroller lock-y :scrollbar-x=false>
	 		      <div class="box1">
	 		        <div class="box2-item" v-for="i in sImg2">
	 		        	<dl>
							<dt><img :src="i.src" alt="#"></dt>
							<dd>{{i.title}}</dd>
							<dd>{{i.price}}</dd>
						</dl>
	 		        	
	 		        </div>
	 		      </div>
	 		    </scroller>
			
			
			
			
		</div>
	</div>
        <!-- <p v-for="i in 80">placeholder {{i}}</p> -->
      </div>
    </scroller>
	 
	</div>
	
</template>
<script>
    
	import { Scroller, Divider, Spinner, XButton, Group, Cell, Swiper, GroupTitle, SwiperItem} from 'vux'
	export default{
		name:"dest",
		data(){
			return {
				scrollTop: 0,
				dlList:[
				{
					"title":"美食",
					"src":"/static/imgs/t1.png",
					"url":"/food/1"
				},
				{
					"title":"特产",
					"src":"/static/imgs/t2.png",
					"url":"/food/2"
				},
				{
					"title":"潜水",
					"src":"/static/imgs/t3.png",
					"url":"/food/3"
				},
				{
					"title":"看秀",
					"src":"/static/imgs/t4.png",
					"url":"/food/4"
				},
				{
					"title":"交通",
					"src":"/static/imgs/t5.png",
					"url":"/food/5"
				},
				{
					"title":"SPA",
					"src":"/static/imgs/t6.png",
					"url":"/food/6"
				},
				{
					"title":"必备",
					"src":"/static/imgs/t7.png",
					"url":"/food/7"
				},
				{
					"title":"更多",
					"src":"/static/imgs/t8.png",
					"url":"/food/8"
				}
				],
				swiperImg : [
				  {"src":"/static/imgs/p1.png"},
				  {"src":"/static/imgs/p5.jpg"},
				  {"src":"/static/imgs/p6.jpg"},
				  {"src":"/static/imgs/p1.png"},
				  {"src":"/static/imgs/p5.jpg"},
				  {"src":"/static/imgs/p6.jpg"}
				  
				],
				sImg1 : [
				  {"src":"/static/imgs/sx.png"},
				  {"src":"/static/imgs/sx.png"},
				  {"src":"/static/imgs/sx.png"},
				  {"src":"/static/imgs/sx.png"},
				  {"src":"/static/imgs/sx.png"},
				  {"src":"/static/imgs/sx.png"}
				  
				],
				sImg2 : [
				  {
				  	"src":"/static/imgs/sx1.png",
				  	"title":"Katacuit Art and Gallery 餐厅",
				  	"price":"￥110"
				  },
				  {
				  	"src":"/static/imgs/sx2.png",
				  	"title":"老虎海鲜餐厅",
				  	"price":"￥110"
				  },
				  {
				  	"src":"/static/imgs/sx1.png",
				  	"title":"Katacuit Art and Gallery 餐厅",
				  	"price":"￥110"
				  },
				  {
				  	"src":"/static/imgs/sx2.png",
				  	"title":"老虎海鲜餐厅",
				  	"price":"￥110"
				  }
				  
				]
			}
		},
		components: {
           Scroller,
		    Divider,
		    Spinner,
		    XButton,
		    Group,
		    Cell,
		    Swiper, 
			GroupTitle, 
			SwiperItem
			 
			
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
    .dest{
    	width: 100%;
    	height: 100%;
    	background: #F9FAFB;
    }
	.tittle{
		width: 100%;
		height: 48px;
		text-align: center;
		line-height: 48px;
		overflow: hidden;
		color: #47B23F;
		background: #fff;
	}
	.tittle i{
		float: right;
		padding-right: 10px;
		font-weight: normal;
	}
	
	.tittle b{
		width: 0;
		height: 0;
		border-top: 10px solid #47B23F;
		border-left: 6px solid #fff;
		border-right: 6px solid #fff;
		border-bottom: 10px solid #fff;
	    margin-left: 10px;
	    position: relative;
        top:19px;
	}

	.banner img{
		width: 100%;
		height: auto;
	}
	.img{
		width: 100%;
		display: -webkit-flex;
		border-top: 1px solid #D8DBDF;
		-webkit-flex-wrap:wrap;
		background: #fff;
	}
	.img dl{
		width: 93px;
		height: 98px;
		-webkit-box-sizing:border-box;
		border-right:1px solid #D8DBDF;
		border-bottom:1px solid #D8DBDF;
		text-align: center;
		padding-top: 10px;
	}
	.img dl:nth-of-type(4){
		border-right:none;
	}
	.img dl:nth-of-type(8){border-right:none;}
	.img dt{
      height: 60px;
      line-height: 60px;
	}
	.img dt img{
      width: 40%;
      height: auto;

	}
	.img dd{
	height: 24px;	
	font-weight: bolder;	
	}
	.sx{width: 100%;
		background: #fff;
		margin-top: 6px;
		border-bottom: 1px solid #ccc;
		box-shadow: 1px 1px 1px #aaa;}
	.sx1{
		height: 228px;
	}
	.sx2{
		height: 345px;
	}
	.sx h2{
		width: 100%;
		position: relative;
		padding-left: 70px;
		-webkit-box-sizing:border-box;
		font-size: 16px;
		padding-top: 20px;
	} 
	.sx1 h2{
		height: 86px;
	}
	.sx2 h2{
		height: 90px;
	}
	.sx h2 img{
		position: absolute;
		left: 15px;
		top:24px;
		width: 40px;
		height: 40px;
	}
	.sx h2 span{
        margin: 0 10px;
	}
	.sx h2 b{
		display: block;
		font-size: 12px;
		color: #8A8A8A;
		line-height: 32px;
	}
	.scrollx{
		display: -webkit-flex;
		
	}
	.scrollx img{
		height: 100px;
		width: auto;
		padding-left: 15px;
	}
	.scrollx dl img{
		height: 130px;
		width: auto;
	}
	.scrollx dl dd{
		padding-left: 15px;
		font-weight: bolder;
		height: 42px;
		line-height: 21px;
		width: 135px;

	}
	.scrollx dl dd:last-of-type{
		font-weight: normal;
	}
/*-------------------------横向scroller------------------------------------*/
.box1 {
  height: 100%;
  position: relative;
  width: 1490px;
}
.box1-item {
  width: 200px;
  height: 100px;
  background-color: #fff;
  display:inline-block;
  margin-left: 15px;
  float: left;
  text-align: center;
  line-height: 100px;
}
.box2-item {
  width: 150px;
  height: 254px;
  background-color: #fff;
  display:inline-block;
  margin-left: 15px;
  float: left;
  text-align: center;
  line-height: 100px;
}
.box1-item:first-child {
  margin-left: 0;
}
/* --------------------swiper样式------------------------- */
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
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