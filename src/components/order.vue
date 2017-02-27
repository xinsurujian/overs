<template>
	<div id="order" class="order">
		<h2>我的订单</h2>
		<p class="p">如果您预订了玩途的旅行产品，您将可以在这里查看您的订单</p>	
	     <h6><button><router-link to="/index">开始探索</router-link></button></h6>
	     <h3>或<router-link to="/login">登陆</router-link>以查看您的行程</h3>
	</div>
	
</template>
<script>
	export default{
		name:"order",
		data(){
			return {

			}
		}
	}
</script>	
<style scoped>
	.order{
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
	.p{
		text-indent: 0.36rem;
		font-weight: bolder;
		line-height: 30px;
		margin-top: 150px;
		padding: 0 10px;
	}
	.p2{
		margin-top: 60px;
	}
	button{
		width: 112px;
		height:48px;
		border-radius: 5px;
		background: #3CA730;
		line-height: 48px;
		text-align: center;
		border: none;
		
	}
	button a{
        color: #fff;
	}
	h3{ 
		width: 100%;
		height: 30px;
		text-align: center;
		color: #999;
	}
	h3 a{
        color:#3CA730 
	}
	h6{
		text-align: center;
		font-size: 16px;
        padding: 40px 0 30px 0;
	}
</style>