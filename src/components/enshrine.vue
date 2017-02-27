<template>
	<div id="enshrine" class="enshrine">
		
	<h2>我的收藏</h2>
	<dl>
		<dt><i class="icon">&#xe680;</i></dt>
		<dd>您还没有登陆</dd>
	</dl>
	<p>登陆后，您喜欢的商品将会再次显示</p>
	<p>帮助您快速查看/购买</p>
	<h2><button><router-link to="/login">马上登陆</router-link></button></h2>
	</div>
	
</template>
<script>
	export default{
		name:"enshrine",
		data(){
			return {

			}
		}
	}
</script>	
<style scoped>
	.enshrine{
		width: 100%;
		height: 100%;
		background:pink url("../imgs/bg1.png") no-repeat left center;
		background-size:100% auto;
	}
	h2{
		text-align: center;
		width: 100%;
		height: 48px;
		line-height: 48px;
	}
	dl{
		margin-top: 150px;
		text-align: center;
	}
	dt{
		font-size: 60px;
		color: #ccc;
	}
	dd{
		font-weight: bolder;
		margin-bottom: 30px;
	}
	p{
		line-height: 20px;
		text-align: center;
		font-size: 12px;
		font-weight: bolder;
		color: #666;

	}
	button{
		width: 212px;
		height:48px;
		border-radius: 5px;
		background: #3CA730;
		color: #fff;
		line-height: 48px;
		text-align: center;
		margin-top: 30px;
	}
	button a{
		color:#fff; 
	}
</style>