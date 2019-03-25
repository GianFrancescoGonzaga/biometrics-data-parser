<template>
	<div>
		<div class="info">
			<p>
				<strong>Note:</strong> If your saved file doesn't show up, consider refreshing the page...
			</p>
		</div>
		<ul id="myUL">
			<li v-for="item in data">
				<router-link tag="a" :to="'/edit?file_id='+ item.id + '&file_name=' + item.name">{{ item.name }}</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
import axios from "axios";

export default {
	data: () => ({
		data: []
	}),

	methods: {
		getData() {
			axios
				.get("http://localhost:3000/Users")
				.then(res => {
					console.log(res);

					res.data.forEach(element => {
						this.data.push({
							id: element.id,
							name: element.saveName
						});
					});
				})
				.catch(err => {
					throw err;
				});
		}
	},

	created() {
		this.getData();
	}
};
</script>

<style scoped>
.info {
	margin-bottom: 15px;
	padding: 4px 12px;
	background-color: #e7f3fe;
	border-left: 6px solid #2196f3;
}

/* ul {
	list-style: none;
} */

a {
	font-size: 32px;
	color: #2c3e50;
}

#myUL {
	/* Remove default list styling */
	list-style-type: none;
	padding: 0;
	margin: 0;
}

#myUL li a {
	border: 1px solid #ddd; /* Add a border to all links */
	margin-top: -1px; /* Prevent double borders */
	background-color: #f6f6f6; /* Grey background color */
	padding: 12px; /* Add some padding */
	text-decoration: none; /* Remove default text underline */
	font-size: 18px; /* Increase the font-size */
	color: black; /* Add a black text color */
	display: block; /* Make it into a block element to fill the whole list */
}

#myUL li a:hover:not(.header) {
	background-color: #eee; /* Add a hover effect to all links, except for headers */
}
</style>

