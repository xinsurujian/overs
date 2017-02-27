<template>

	<div id="food" class="food">
		<h2><router-link to=""><i class="icon" @click="backto">&#xe607;</i></router-link>{{datas.name}}</h2>
		<scroller lock-x height="100%" @on-scroll="onScroll">
		<div class="box2">
		<ul class="tab">
			<li>
				<group widout title label-width="1.3em" label-margin-right="10px" label-align="left" gutter="0">
			      <selector placeholder="北京" title="地区" :options="list" @on-change="onChange">
			      </selector>
			    </group>
            </li>
            <li>
				<group widout title label-width="1.3em" label-margin-right="10px" label-align="left" gutter="0">
			      <selector placeholder="好玩" title="分类" :options="fen" @on-change="onChange">
			      </selector>
                </group>
            </li>
            <li>
				<group widout title label-width="1.3em" label-margin-right="10px" label-align="left" gutter="0">
			      <selector placeholder="最低" title="排序" :options="orders" @on-change="onChange">
			      </selector>
                </group>
            </li>
		
		</ul>
		<div class="show">
			    <div v-for="i in lists">
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
				</div>
		      </div>
		    </scroller>
		
		</div>
	</div>
</template>

<script>

    import { Scroller, Divider, Spinner, XButton, Group, Cell, Swiper, GroupTitle, SwiperItem, Selector } from 'vux'
    export default{
		name:"food",
		data(){
			return {
			  datas:{},
              list:[
              {key: 'gz', value: '广州'},
              {key: 'sh', value: '上海'},
              {key: 'hz', value: '杭州'},
              {key: 'sz', value: '苏州'}
              ],
              fen:[
              {key: 'gz', value: '美食'},
              {key: 'sh', value: '游玩'},
              {key: 'hz', value: '景点'},
              {key: 'sz', value: 'SPA'}
              ],
              orders:[
              {key: 'xl', value: '销量'},
              {key: 'jg', value: '价格'},
              {key: 'jd', value: '景点'},
              {key: 'spa', value: 'SPA'}
              ],
              xx:"",
              users:[
				  { 'user': 'fred',   'age': 48 },
				  { 'user': 'barney', 'age': 34 },
				  { 'user': 'fred',   'age': 40 },
				  { 'user': 'barney', 'age': 36 }
				],
			  lists:{}

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
			SwiperItem,
			Selector
		},
		methods: {
           onScroll (pos) {
           console.log('on scroll', pos)
           this.scrollTop = pos.top
           },
           backto(){
           	  this.$router.go(-1);
           },
           onChange (val) {
           	console.log(val);
              switch (val){
              	case " ":
              	this.xx="id";
              	break;
              	case "xl":
              	this.xx="newPrice";
              	break;
              	case "jg":
              	this.xx="title";
              	break;
              	case "jd":
              	this.xx="id";
              	break;
              	case "spa":
              	this.xx="sell";
              	break;

              }
           }
           
		},
		mounted () {
			var id=(this.$route.params.id);
			var that=this;
			this.$http({
				url:"/api/data",
				method:"GET"
			}).then(function(res){
                this.datas = res.body.data[id];
                this.lists = res.body.data[id].list;
			})
			
		},
		computed:{
			/*orderedUsers: function(){
		    return _.orderBy(this.users, 'name')
		    }*/
		    listsfn:function(){

		    	return orderBy(this.lists,this.xx)
		    }
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
 	display: -webkit-flex;
 }
 .tab li{
 	border-right: 2px solid #E4E4E4;
 }
 .tab li:last-of-type{
 	border: none;
 }
 .tab li b{
 	display: block;
 	color:#8A8A8A;
 	font-size: 10px; 
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
 	margin-bottom: 3px;
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

