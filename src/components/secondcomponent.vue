<template>
	<div id="secondcomponent">
		<h1>i am another page</h1>
		<a>written by {{author}}</a>
		<p>感谢<a href="">showe</a>大神的技术指导</p>
	</div>
</template>

<script>
	export default {
		data (){
			return {
				author:'微信',
				articles:[]
			}
		}
	}
</script>

<style>
</style>