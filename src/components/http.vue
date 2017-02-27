<template>
	<div id="https">
		<h2>http请求页面</h2>
		<input type="button" value="获取数据" @click="get">
	</div>
</template>
<script>
	export default{
		name:"https",
		data(){
			return {

			}
		},
		methods:{
           get:function(){
           	  this.$http.post("https://www.baidu.com",{
           	  	wd:123
           	  }).then(function(res){
           	  	console.log(res);
           	  },function(res){
           	    console.log(123);
           	  })
           }
		}
	}
</script>
<style></style>