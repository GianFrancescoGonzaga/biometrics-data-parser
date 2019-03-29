import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "home",
			component: Home
		},
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		{
			path: "/edit",
			name: "edit",
			component: () =>
				import(/* webpackChunkName: "about" */ "./views/Edit.vue")
		},
		{
			path: "/recent",
			name: "recent",
			component: () =>
				import(/* webpackChunkName: "about" */ "./views/Recent.vue")
		},
		{
			path: "/dtr",
			name: "dtr",
			component: () =>
				import(/* webpackChunkName: "about" */ "./views/DTR.vue")
		}
	]
});
