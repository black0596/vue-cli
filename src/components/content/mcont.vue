<template>
	<div>
		<navlist></navlist>

		<div id="mcont" v-for="item in arr">
			<a :href="item.target.uri">
				<div class="top clearfix">
					<div class="left">
						<h3>{{item.title}}</h3>
						<p>{{item.target.desc}}</p>
					</div>
					<div class="rig-img">
						<img :src="item.target.cover_url"/>
					</div>
				</div>
				<div class="bot">
					<div class="bot_l">
						by<span>豆瓣</span>
					</div>
					<div class="bot_r">
						<span>{{item.source_cn}}</span>
					</div>
				</div>
			</a>
		</div>

	</div>
</template>

<script>
	import navlist from '../tab/nav_list.vue'
	export default({

		data() {
			return {
				arr: [],
				imgurl:''
			}
		},
		created: function() {
			this.getrou()
		},
		methods: {
			getrou: function() {
				this.$http.jsonp('https://m.douban.com/rexxar/api/v2/recommend_feed?').then(function(res) {
					for(var i = 0; i < res.body.recommend_feeds.length; i++) {
						this.arr.push(res.body.recommend_feeds[i]);
					}
					console.log('2.17-5-22')
					
					
				})
			},
			
		},
		components: {
			navlist
		}
	})
</script>

<style>
	#mcont {
		width: 6.1rem;
		float: right;
		margin-top: 0.52rem;
		padding-bottom: 0.44rem;
		border-bottom: 1px solid #ccc;
	}
	
	#mcont a {
		height: 100%;
		display: block;
	}
	
	#mcont a h3 {
		text-align: left;
		color: #494949;
		font-size: 0.32rem;
		line-height: 0.38rem;
		width: 3.88rem;
	}
	
	#mcont a p {
		color: #aaa;
		font-size: 0.24rem;
		line-height: 0.3rem;
		width: 3.88rem;
		margin-top: 0.12rem;
		height: 0.9rem;
		overflow: hidden;
	}
	
	.left {
		float: left;
	}
	
	.rig-img {
		width: 1.5rem;
		height: 1.48rem;
		float: left;
		position: relative;
		margin-left: 0.41rem;
		
	}
	
	.rig-img img{
		display: block;
	    height: 100%;
    	width: 100%;

	}
	
	.bot {
		margin-top: 0.2rem;
	}
	
	.bot_l,
	span {
		float: left;
		color: #b7b8b8;
		font-size: 0.2rem;
	}
	
	.bot_r,
	span {
		float: right;
		color: #b7b8b8;
		font-size: 0.2rem;
		margin-right: 0.3rem;
	}
</style>