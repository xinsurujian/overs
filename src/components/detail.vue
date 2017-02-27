<template>
	<div id="detail" class="detail">
		<scroller lock-x height="100%" @on-scroll="onScroll">
		  <h2>
		  	<i class="back icon" @click="backto">&#xe607;</i>
		  	<i class="love icon" @click="love">&#xe604;</i>
		  	<i class="download icon" @click="download">&#xe711;</i>
		  </h2>
		  <img :src="datas.src" alt="#" class="banner">
	      <div class="box2">
	      	<div class="box">
			<div class='small'>
			<dl>
				<dt>{{datas.title}}</dt>
				<dd>{{datas.newPrice}}<span>门市价<small>{{datas.oldPrice}}</small></span></dd>
			</dl>
			<p><span class="sell">8折优惠</span>已售{{datas.selll}}</p>
			<p class="p2"><img src="../imgs/shan1.png" alt="#" class="shan">付款后,立即可用</p>
			<hr></hr>
			<h6>商户详情<span>{{datas.title}}</span></h6>
			<p class="p"><span class="span">查看商户详情</span></p>
		            </div>
		            <img :src="datas.src" alt="#" class="banner">
		    </div>
	       </div>
	    </scroller>
		
		<ul class="buy">
			<li><router-link to="/buy">购买</router-link></li>
			<li><i class="icon">&#xe6e3;</i>玩途小管家</li>
		</ul>
	</div>
</template>
<script>
    import { Scroller, Divider, Spinner, XButton, Group, Cell } from 'vux'
	export default{
		name:"detail",
		data(){
			return {
				scrollTop: 0,
				datas:{},
				lists:[]
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
           backto(){
           	this.$router.go(-1);
           },
           love(){
           	var obj=this.$route.params;
           	var str=this.$route.params.id1+"-"+this.$route.params.id2;
            var arr=JSON.parse(window.localStorage.getItem("num"));
            /*
             初始设置*/
             /*var strs=JSON.stringify(['n-n'])
	         window.localStorage.setItem("num",strs);*/
            if(arr.indexOf(str)==-1){
           		arr.push(str);
           		var strs=JSON.stringify(arr)
	           	window.localStorage.setItem("num",strs);
	           	console.log(arr); 
	            alert("收藏成功");
           	} else{
           		alert("已收藏");
           	};
           },
           download(){
            var obj=this.$route.params;
           	var str=this.$route.params.id1+"-"+this.$route.params.id2;
            var arr=JSON.parse(window.localStorage.getItem("store"));
           /*
           初始设置 */
           var strs=JSON.stringify(['n-n']);
	         window.localStorage.setItem("store",strs);
            if(arr.indexOf(str)==-1){
           		arr.push(str);
           		var strs=JSON.stringify(arr)
	           	window.localStorage.setItem("store",strs);
	           	console.log(arr); 
	            alert("您可以在购物车中查看");
           	} else{
           		alert("请勿重复添加");
           	};
           }
		},
		mounted () {
			var id1=(this.$route.params.id1);
			var id2=(this.$route.params.id2);
			//console.log(this.$route.params)
			var that=this;
			this.$http({
				url:"/api/data",
				method:"GET"
			}).then(function(res){
                this.datas = res.body.data[id1].list[id2-1]
                //console.log(res.body.data[id1].list[id2])
			})
			
		}
	}
</script>
<style scoped>
.detail{
	width: 100%;
	height: 100%;
    display: -webkit-flex;
    -webkit-flex-direction:column;
}
.detail h2{
   position: relative;
   top:10px;
   color: #fff;
}

.back{
   position: absolute;
   left: 10px; 
   
}
.love{
	position: absolute;
	right:70px;
	font-weight: normal;
}
.download{
	position: absolute;
	right: 20px;
	
}
.box{
	width: 100%;
	height: 100%;
	-webkit-flex:1;
	overflow: hidden;
}
.banner{
	width: 100%;
	height: auto;
}
.buy{
	width: 100%;
	height: 48px;
	display: -webkit-flex;
	padding: 10px 22px;
	position: absolute;
	bottom: 0;
	background: #fff;
}
.buy li{
	width:128px;
    border-radius: 5px;
    height:45px;
    line-height:45px;
    text-align: center;
    font-size: 16px;
    border: 1px solid #6BC165;
    color: #6BC165;
}
.buy li a{
	color: #fff;
}
.buy li:first-of-type{
	width:182px;
	background: #6BC165;
	color: #fff;
	margin-right: 22px;
}
.small{
	padding: 20px;
}
.small dl{
	width: 100%;
	height: 100%;
	line-height: 20px;
	font-size: 16px;
	font-weight: bolder;
}
.small dt{
	float: left;
	width:220px;
}
.small dd{
	float: right;
	color: #F37006;
}
.small dd span{
	display: block;
	font-size: 10px;
	color: #878787;
	font-weight: normal;
}
.small small{
	text-decoration: line-through;
}
p{
	width: 100%;
	clear: both;
	font-size: 10px;
	color:#878787;
	padding: 8px 0; 
}
.sell{
	display: inline-block;
	width: 55px;
	height: 18px;
	line-height: 18px;
	text-align: center;
	font-size: 10px;
	color: #fff;
	background:#F37006; 
	margin-right: 10px;
}
.p2{
	height: 24px;
	color: #000;
	position: relative;
	line-height: 30px;
	padding-left: 35px;
}
.shan{
	width: 26px;
	height: auto;
	position: absolute;
	left: 0;
}
hr{
	margin-bottom: 20px;
}
h6{
	font-size: 12px;
	font-weight:normal;
	font-size: 12px;
	margin-bottom: 20px;
}
h6 span{
	color: #ccc;
	margin-left: 10px;
}
.p{
	width: 100%;
	position: relative;
	padding: 0;
	color:#000;
	height: 35px; 
}
.span{
	position: absolute;
	width: 152px;
	height: 35px;
	border: 1px solid #878787;
	line-height: 35px;
	text-align: center;
	border-radius: 3px;
	left:50%;
	margin-left: -76px;
}
</style>	