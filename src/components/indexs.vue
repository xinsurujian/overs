<template>

 <div id="indexs" class="indexs">

         <div class="main">
           <router-view></router-view>
         </div>
       <ul class="footer" @click="change" id="ul">
       <li><router-link to="home"><i class="icon">&#xe606;</i><span>推荐</span></router-link></li>
       <li><router-link to="dest"><i class="icon">&#xe668;</i><span>目的地</span></router-link></li>
       <li><router-link to="enshrine2"><i class="icon">&#xe604;</i><span>收藏</span></router-link></li>
       <li><router-link to="order2"><i class="icon">&#xe689;</i><span>订单</span></router-link></li>
       <li><router-link to="me"><i class="icon">&#xe680;</i><span>我</span></router-link></li>
       </ul>
       
 </div>
</template>

<script>

export default {
  name: 'indexs',
  data(){
    return {
      tittle:""
    }
  },
  methods:{
    change(){
      var ul=document.getElementById('ul');
      var lis=ul.getElementsByTagName('li');
      for (var i = 0; i <lis.length; i++) {
         lis[i].onmouseover=function(){
              var a=this.getElementsByTagName('a')[0];
              a.style.color="#47B23F";
         }
         lis[i].onmouseout=function(){
              var a=this.getElementsByTagName('a')[0];
              a.style.color="#666";
         }
      };
      
     
    }
  }
  
}
</script>

<style scoped>
.indexs{
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: -webkit-flex;
  -webkit-flex-direction:column;
  
}
.main{
  width: 100%;
  height: 100%;
  -webkit-flex:1;
  overflow: hidden;
  }
.footer{
  width: 100%;
  height: 48px;
  display: -webkit-flex;
  padding-top: 5px;
  background: #F8F9FA;
  border-top: 1px solid #D8DBDF;
  }
.footer li{
   -webkit-flex:1;
   text-align: center;
   color: #666;
   
}
.footer li i{
  display: block;
  font-size: 0.26rem;
  line-height: 0.26rem;
}
.footer li a{
  color: #666;
}
.footer li span{
  font-size: 0.1rem;
  line-height: 0.1rem;
} 
.index .footer li a:hover i{
  color: #47B23F;
  
}


</style>
