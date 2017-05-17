<template>
	<div id="app">
		<my-header></my-header>
		<nav-list></nav-list>
		<!--<my-cont></my-cont>-->
		<router-view></router-view>
	</div>
</template>
<script>
import myHeader from './components/header/myHeader.vue'
import nav_list from './components/tab/nav_list.vue'
import mcont	from './components/content/mcont.vue'
export default {
	components:{
		myHeader,
		'nav-list':nav_list,
		'my-cont':mcont
	}
}
</script>
<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/