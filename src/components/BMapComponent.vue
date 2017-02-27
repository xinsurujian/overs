<template>

<div id="allmap" v-bind:style="mapStyle" class="allmap"></div>
</template>
<script>
export default{
	name:"allmap",
	data(){
		return {
          mapStyle:{
          	width: "100%",
          	height:"100%",
          	background:"pink" 
          }
		}
	},
	props:{
		// 地图在该视图上的高度
		mapHeight:{
		type:Number,
		default:500
		},
		// 经度
		longitude:{
		type:Number,
		default:116.404
		},
		// 纬度
		latitude:{
		type:Number,
		default:39.915
		},
		description:{
		type:String,
		default:'天安门'
		}
},

	methods:{

	},
	created(){

	},
	mounted(){
			console.log(22)
			
		},
	ready(){
		var map =newBMap.Map("allmap");//将#allmap实例化
		var point =newBMap.Point(this.longitude,this.latitude);//百度提供的经纬坐标
		var marker =newBMap.Marker(point);//创建地图定位标注
		map.addOverlay(marker); //将标注添加到地图中
		map.centerAndZoom(point,15);//.设置中点位置，poin表示位置，可以是一个点，利用百度提供的BMap.Point(地理经度，地理纬度);进行定位，或者直接使用地址进行定位。15表示定位的等级，范围为3-19级
        // 信息窗的配置信息
		var opts ={
		width :250,
		height:75,
		title :"地址：",
		}
     var infoWindow =newBMap.InfoWindow(this.description, opts);// 创建信息窗口对象
     marker.addEventListener("click",function(){
          map.openInfoWindow(infoWindow,point);

     });
     map.enableScrollWheelZoom(true);
     map.openInfoWindow(infoWindow,point);//开启信息窗口
     }

}

</script>
<!--Add"scoped" attribute to limit CSS to this component only -->

<style scoped>
.allmap{
	width: 100%;
	height: 100%;
	
}
</style>
 