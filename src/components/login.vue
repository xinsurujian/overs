<template>
	<div id="login" class="login">
		<h2><span @click="backto">x</span></h2>
		<h4>通过以下方式快速登陆</h4>
		<p class="wei">	<a href="#"><i class="icon">&#xe691;</i>微信账户快捷登录</a></p>
		<p class="phone"><a href="#"><i class="icon">&#xe640;</i>手机号码快捷登陆</a></p>
		<h4>已有玩途账号了？</h4>
		<p><input type="text" placeholder="邮箱地址或手机号" v-model="num"></p>
		<p><button @click="login">登陆</button></p>
		<p class="btn"><router-link to="/regist">点我注册新用户</router-link></p>
	</div>
</template>
<script>
	export default{
		name:"login",
		data(){
           return {
             "num":""
           }
		},
		components:{

		},
		methods:{
           backto(){
           	  this.$router.go(-1);
           },
           login(){
           	  if(this.num==window.localStorage.getItem("emails")||this.num==window.localStorage.getItem("phone")){
                this.$router.push({path:"/indexs"})

           	  } else{
                  alert("您的输入有误请重新输入！")
           	  };
           }
		}
	}
</script>
<style scoped>
	.login{
		width: 100%;
		height: 100%;
		background:url(../imgs/timg.jpg);
        font-size: .18rem;
        color: #fff;
	}
	h2{
		width: 100%;
		position: relative;
		color: #fff;
		height: 70px;
		font-weight:normal;
	}
    
    h2 span{
       position: absolute;
       right:15px;
       font-size: 30px;
    }
    h4{
    	font-weight: normal;
    	padding-left: 15px;
    	margin-top: 40px;
    }
	.login p{
		width: 100%;
		padding:7px 15px;
		-webkit-box-sizing:border-box; 
	}
	.login p input{
        height:45px;
        width: 100%;
        border: none;
        border-radius: 3px;
        padding-left: 20px;
        -webkit-box-sizing:border-box;
        font-size: 0.18rem;
	}
	.login p a{
		height:45px;
        width: 100%;
        border: none;
        border-radius: 3px;
        color: #8A8A8A;
        display: block;
        line-height: 45px;
        text-align: center;
        color: #fff;
        font-size: 0.18rem;
	}
	.login p a i{
		font-size: 0.3rem;
		margin-right: 10px;
	}
	.wei a{
		background: #239830;
	}
	.phone a{
		background: #0D57A1;
	}
	button{
		width: 100%;
		height: 45px;
		margin-top: 25px;
		border: none;
        border-radius: 3px;
        background: #1E856F;
        color: #fff;
        line-height: 45px;
        text-align: center;
        font-size: 0.16rem; 
	}
</style>