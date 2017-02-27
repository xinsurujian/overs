<template>
	<div id="regist" class="regist">
		<h2><i class="icon back" @click="backto">&#xe607;</i><span @click="backto2">x</span></h2>
	    <p><input type="text" placeholder="邮箱地址" v-model="emails"></p>
	    <p><input type="text" placeholder="输入电话号码" v-model="phone"></p>
	    <p><input type="password" placeholder="确认密码" v-model="pwd"></p>
		<p @click="zhuce"><router-link to="/#/indexs" >注册</router-link></p>
	</div>
</template>
<script>
	export default{
		name:"regist",
		data(){
           return {
             emails:"",
             phone:"",
             pwd:""
             
           }
		},
		components:{

		},
		methods:{
           backto(){
           	   this.$router.go(-1);
           },
           backto2(){
           	   this.$router.go(-2);
           },
           zhuce(){
           	   if(this.emails==""||this.phone==""||this.pwd==""){
                   alert("请重新填写！")
           	   }else{
                   window.localStorage.setItem("emails",this.emails);
           	       window.localStorage.setItem("phone",this.phone);
           	       window.localStorage.setItem("pwd",this.pwd);
           	       this.$router.push({path:"/indexs"})
           	    };
           	   
           }
		}
	}
</script>
<style scoped>
	.regist{
		width: 100%;
		height: 100%;
		background:url(../imgs/timg.jpg);
        font-size: .18rem;
	}
	h2{
		width: 100%;
		position: relative;
		color: #fff;
		height: 70px;
		font-weight:normal;
	}
    .back{
    	position: absolute;
    	left: 15px;
    	top:10px;
    }
    h2 span{
       position: absolute;
       right:15px;
       font-size: 30px;
    }
	.regist p{
		width: 100%;
		padding:7px 15px;
		-webkit-box-sizing:border-box; 
	}
	.regist p input{
        height:45px;
        width: 100%;
        border: none;
        border-radius: 3px;
        padding-left: 20px;
        -webkit-box-sizing:border-box;
        font-size: 0.18rem;
	}
	.regist p a{
		margin-top: 25px;
		height:45px;
        width: 100%;
        border: none;
        border-radius: 3px;
        background: #1E856F;
        color: #8A8A8A;
        display: block;
        line-height: 45px;
        text-align: center;
        
	}
</style>