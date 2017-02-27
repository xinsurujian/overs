<template>
	<div id="map" class="map">
		
	</div>
</template>
<script>
    /*import BMapComponent from "./BMapComponent.vue"
    console.log(BMapComponent);
	export default{
		 name:"map",
         data(){
            return {

            }
         },
         props:{

         },
         components:{
           BMapComponent	
         }
	}*/
function initialize() {  
  var mp = new BMap.Map('map');  
  mp.centerAndZoom(new BMap.Point(121.491, 31.233), 11);  
}  
   
function loadScript() {  
  var script = document.createElement("script");  
  script.src = "http://api.map.baidu.com/api?v=2.0&ak=6rGUbGG4AfAewiuGamvEseXS1yScaN05&callback=initialize";
  //此为v2.0版本的引用方式  
  // http://api.map.baidu.com/api?v=1.4&ak=您的密钥&callback=initialize"; //此为v1.4版本及以前版本的引用方式  
  document.body.appendChild(script);  
}  
   
window.onload = loadScript;  
</script>
<style scoped>
  .map{
  	width: 100%;
  	height: 100%;
  	
  }
</style>