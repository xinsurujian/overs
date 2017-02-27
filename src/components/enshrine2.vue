<template>

	<div id="food" class="food">
		<h2><router-link to="/indexs/dest"><i class="icon">&#xe607;</i></router-link>收藏夹</h2>
		<scroller lock-x height="100%" @on-scroll="onScroll">
		<div class="box2">
		<!-- <ul class="tab">
			<li><b>位置</b>全部地区V</li>
			<li><b>分类</b>全部分类V</li>
			<li><b>排序</b>默认排序V</li>
			<li></li>
		</ul> -->
		<div class="show">
			    <div v-for="i in arr" class="arrbox">
			    <router-link :to="i.url"> 
			        <dl>
						<dt><img :src="i.src" alt="#" class="showImg"></dt>
						<dd>
							<h4>{{i.title}}</h4>
							<h5>{{i.newPrice}} <small>{{i.oldPrice}}</small></h5>
							<p>
								<img :src="i.star" alt="#" class="star">
								<small>已售({{i.sell}})</small>
							</p>
							<p><span v-for="s in i.te">{{s}}</span></p>
						</dd>
						
					</dl>
					</router-link>
					<p class="del"><button @click="delect(i.ls)">删除</button></p>
				</div>
		      </div>
		    </scroller>
		
		</div>
	</div>
</template>

<script>

    import { Scroller, Divider, Spinner, XButton, Group, Cell, Swiper, GroupTitle, SwiperItem} from 'vux'
    export default{
		name:"food",
		data(){
			return {
			  datas:{},
              arr:[]
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
           delect(ls){
               // console.log(ls);
               var arr=JSON.parse(window.localStorage.getItem("num"));
               var index=arr.indexOf(ls);
               arr.splice(index,1);
               var str=JSON.stringify(arr);
               window.localStorage.setItem("num",str);
               window.location.reload();

               /*if (this.arr==[]) {
               alert("您还没有收藏记录哦！")   
			   }*/
           }
           
		},
		mounted () {
			var arrs=JSON.parse(window.localStorage.getItem("num"));
            var id1='',id2='';
            var len=arrs.length;
            var that=this;
            var arr2=[],arrId1=[],arrId2=[];
            for (var i=1;i<len;i++) {
            	id1=arrs[i].split("-")[0]-0;
            	id2=arrs[i].split("-")[1]-1;
                arrId1.push(id1);
                arrId2.push(id2);
            	
			};
			this.$http({
					url:"/api/data",
					method:"GET"
				}).then(function(res){
					for (var i=0;i<len-1;i++) {
						var x=arrId1[i];
						var y=arrId2[i];
						var list=res.body.data[x].list[y];
						arr2.push(list);
					};
	           })
			this.arr=arr2;
			 
			
		}
	}
</script>

<style scoped>
 .food{
 	width: 100%;
 	height: 100%;
 	
 }
 h2{
 	width: 100%;
 	height: 48px;
 	line-height: 48px;
 	text-align: center;
 	position: relative;
 }
 h2 i{
    position: absolute;
    left: 10px;
 }
 .tab{
 	width: 100%;
 	height: 50px;
 	border-top: 1px solid #E4E4E4;
 	border-bottom: 2px solid #E4E4E4;
 	display: -webkit-flex;
 }
 .tab li{
 	border-right: 2px solid #E4E4E4;
 	font-size: 14px;
 	padding:4px 20px;
 	-webkit-box-sizing:border-box;
 	line-height: 20px;
 }
 .tab li:last-of-type{
 	border: none;
 }
 .tab li b{
 	display: block;
 	color:#8A8A8A;
 	font-size: 10px; 
 }
 .arrbox{
 	width: 100%;
 	height: 188px;
 	background:#fff;
 	margin-bottom: 5px;
 }
 .show{
 	background: #EDEDED;
 	
 }
 .show dl{
 	padding: 10px;
 	background: #fff;
 	width: 100%;
 	height: 158px;
 	-webkit-box-sizing:border-box;
 	
 	display: -webkit-flex;
 	line-height: 24px;
 }
 .show dt{
 	width: 125px;
 	margin-right: 10px;
 }
 .showImg{
 	width: 125px;
 	height: auto;
 }
 .del{
 	padding-left: 20px;
 }
 .del button{
    width: 40px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    background: orange;
    border: none;
    color: #fff;
    border-radius: 3px;
 }
 .star{
 	height: 10px;
 	width: auto;
 }
 small{
 	font-size: 10px;
 	color: #878787;
 	font-weight: normal;
 	margin-left: 10px;
 }
 h5 small{text-decoration: line-through;}
 dd p span{
 	padding: 5px;
 	border: 1px solid #878787;
 	line-height: 18px;
 	text-align: center;
 	margin-right: 10px; 
 	font-size: 10px;
 }
</style>

