<template>
	<div id="myHeader" class="wrap">
		<header class="clearfix">
			<h1>
				<router-link to='/mcont'>豆瓣</router-link>
			</h1>
		<div class="tab">
			<router-link to="/movie">电影</router-link>
			<router-link to="/books">图书</router-link>
			<router-link to="/broadcast">广播</router-link>
			<router-link to="/group">小组</router-link>
			
		</div>
		
		<a href="javascript:;" class="sou_icon"></a>
		</header>
	</div>
</template>


<style>
	.wrap{border-bottom: 0.02rem solid #f4f4f4;}
	header{height: 0.78rem;width: 5.8rem; margin: 0 auto;}
	h1{float:left;width: 0.8rem;height: 0.38rem;background: url(img/logo.png) no-repeat;background-size: cover; margin: 0.2rem 0;}
	h1 a{display: block;text-indent: -999em;}
	.tab{margin-left: 1.08rem;float: left;height: 0.78rem;}
	.tab a{font-size: 0.24rem;float: left;padding: 0 0.17rem 0 0.16rem;line-height: 0.78rem;}
	.tab a:nth-of-type(1){color:#3972e7;}
	.tab a:nth-of-type(2){color:#9c755e;}
	.tab a:nth-of-type(3){color:#e5ac1f;}
	.tab a:nth-of-type(4 ){color:#18bad8;}
	.sou_icon{background: url(img/sou.png) no-repeat;width: 0.44rem;height: 0.32rem;float: right;background-size: cover ; margin-top: 0.27rem;}
</style>