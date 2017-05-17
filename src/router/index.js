import Vue from 'vue'
import Router from 'vue-router'
import movie	from '../components/movie/movie.vue'
import books	from '../components/books/books.vue'
import group	from '../components/group/group.vue'
import broadcast	from '../components/broadcast/broadcast.vue'
import mcont	from '/components/content/mcont.vue'


Vue.use(Router)
const routes = [
	{path:'/movie',component:movie},
	{path:'/books',component:books},
	{path:'/group',component:group},
	{path:'/broadcast',component:broadcast},
	{path:'/mcont',component:mcont}

]
export default new Router({
  routes
})
