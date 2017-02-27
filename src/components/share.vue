<template>
	<div id="share" class="share">
		
		
			<a href="#" class="wei">
			<dl>
				<dt><i class="icon">&#xe663;</i></dt>
				<dd>微信好友</dd>
			</dl>
			
		    </a>
		    <a href="#" class="wei">
		    <dl>
				<dt><i class="icon">&#xe63f;</i></dt>
				<dd>朋友圈</dd>
			</dl>
			
			</a>
			<a href="#" class="xin">
			<dl>
				<dt><i class="icon">&#xe656;</i></dt>
				<dd>新浪微博</dd>
			</dl>
			
			</a>
		    
	    
		
	</div>
</template>
<script>
	export default{
		name:"share",
		data(){
           return {
           	
           }
		},
		components:{

		},
		methods:{

		}
	}
</script>
<style scoped>
	.share{
		width: 100%;
		height: 100%;
		background:url(../imgs/timg.jpg);
        font-size: .18rem;
        display: -webkit-flex;
        color: #fff;
	}
	a{
		-webkit-flex:1;
		padding-top: 60%;
		text-align: center;
		color: #fff;
	}
	i{
		font-size: 63px;
		
	}
	.wei i{
       color:#0ECF77; 
	}
	.xin i{
		color: #DB251B;
		font-size: 63px;
		
	}


</style>