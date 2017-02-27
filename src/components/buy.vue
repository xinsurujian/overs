<template>
	<div id="buys" class="buys">
		
		
		<scroller lock-x height="100%" @on-scroll="onScroll">
		  <h2><i class="back icon">&#xe607;</i>商品详情<i class="love icon">&#xe604;</i><i class="download icon">&#xe711;</i></h2>
		    <h1>购买须知</h1>
		  	<table>
		  	<tr>
		  		<td>确认时长</td><td>付款后,立即确认</td>
		  	</tr>
		  	<tr>
		  		<td>兑换说明</td><td>下单后6个月内兑换</td>
		  	</tr>
		  	<tr>
		  		<td>退改政策</td><td>兑换截止日期前2天可免费退订</td>
		  	</tr>
		  </table>
		  
		  <ol>
		  	<li>订单确认后您将收到电子兑换信息,请妥善保存,这将是您兑换的唯一凭证。</li>
		  </ol>
		  <p class="btns"><router-link to="/">查看兑换及使用方法</router-link></p>
		  
		  <h1>需要帮助？</h1>
		  <p>如果您对商品有任何疑问欢迎联系玩途</p>
		  <ul class="ul">
		  	<li><i class="icon">&#xe64c;</i><b>拨打玩途服务热线</b></li>
		  	<li><i class="icon">&#xe700;</i><b>联系在线小管家</b></li>
		  </ul>
			
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
.buys{
	width: 100%;
	height: 100%;
    display: -webkit-flex;
    -webkit-flex-direction:column;
   
}
.buys h2{
   position: relative;
   top:10px;
   color: #000;
   text-align: center;
   height: 48px;
   font-size: 0.16rem;
   line-height: 48px;
}
h1{
	text-align: center;
	height: 60px;
	border-top: 1px solid #D8DBDF;
	font-size: 0.24rem;
	line-height: 60px;
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
/* -----------------------表格------------------------------------------- */

table,tr,td{
	border:1px solid #D8DBDF;
	border-collapse: collapse;
}
table{
	width:90%;
	height: 135px;
	margin: 20px auto;
	font-size: 12px;

	
}
td{
	padding-left: 10px;
}
td:first-child{
	background: #F7F9FA;
}
/* ---------------------------------------------------- */
p{
	width: 100%;
	padding: 0 15px;
}
ol{
  width: 85%;
  margin: 0 auto;
  color: #909090;
}
ol li{
	list-style: disc;
	font-size: 12px;
	
}
p{text-align: center;color: #535353;font-size: 12px;}
.btns{
	text-align: center;
	height: 60px;
	padding-top: 30px;
	position: relative;
}
.btns a{
	width: 152px;
	height: 40px;
	border: 1px solid #535353;
	line-height: 40px;
	text-align: center;
	border-radius: 3px;
	position: absolute;
	left:50%;
	-webkit-box-sizing:border-box;
	margin-left: -86px; 

}
.ul{
	margin-top: 35px;
	height: 85px;
	display: -webkit-flex;
	text-align: center;
}
.ul li:first-child{
    border-right: 1px solid #D8DBDF;
}
.ul li{
	
	color: #47B23F;
	-webkit-flex:1;
}
.ul i{font-size: 45px;}
.ul b{
	display: block;
	font-weight: normal;
}
</style>	