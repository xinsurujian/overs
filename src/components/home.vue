<template>
	<div id="home">
    <div class="sc">
	<scroller lock-x height="100%" @on-scroll="onScroll" >
      <div class="box2">
      	<img src="../imgs/p1.png" alt="#">
	    <img src="../imgs/p2.png" alt="#">
	    <img src="../imgs/p3.png" alt="#">
        <img src="../imgs/p1.png" alt="#">
	    <img src="../imgs/p2.png" alt="#">
	    <img src="../imgs/p3.png" alt="#">
      </div>
    </scroller>	
	</div>
	<router-view></router-view>
	</div>
	
</template>
<script>
	import { Scroller, Divider, Spinner, XButton, Group, Cell } from 'vux'
	export default{
		name:"home",
		data(){
			return {
				scrollTop: 0
			}
		},
		components: {
           Scroller,
		    Divider,
		    Spinner,
		    XButton,
		    Group,
		    Cell
		},
		methods: {
           onScroll (pos) {
           console.log('on scroll', pos)
           this.scrollTop = pos.top
           },
		}
	}
</script>	
<style scoped>
    .home{
    	width: 100%;
    	height: 100%;
    }
    .sc{
    	width: 100%;
    	height: 2000px;
    }
	img{
		width: 100%;
		height: auto;
		margin: 0;
		padding: 0;
		
	}

</style>