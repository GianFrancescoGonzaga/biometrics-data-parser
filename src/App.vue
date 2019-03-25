<template>
	<div id="app">
		<div class="topnav">
			<router-link to="/" tag="a">Home</router-link>
			<router-link to="/recent" tag="a">Open Saved</router-link>
		</div>
		<br>
		<div class="container12">
			<transition name="fade">
				<router-view/>
			</transition>
		</div>
		<div id="snackbar" :class="{ show: snackbar }">{{ text }}</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		snackbar: false,
		text: ""
	}),

	methods: {
		showSnackbar() {
			this.snackbar = true;

			setTimeout(() => {
				this.snackbar = false;
			}, 3000);
		}
	},

	created() {
		this.$on("Snackbar", text => {
			this.text = text;
			this.showSnackbar();
		});

		this.$root.$baseURL = location.hostname;

		console.log(this.$root.$baseURL);
	}
};
</script>

<style>
/* 1140 grid */
@import url("./assets/1140.css");

.topnav a:hover,
.topnav a.router-link-exact-active {
	background-color: #2196f3;
	color: white;
	cursor: pointer;
}

/* Style the navbar */
.topnav {
	overflow: hidden;
	background-color: #e9e9e9;
}

/* Navbar links */
.topnav a {
	float: left;
	display: block;
	color: black;
	text-align: center;
	padding: 14px 16px;
	text-decoration: none;
	font-size: 17px;
}

/* Navbar links on mouse-over */
.topnav a:hover {
	background-color: #ddd;
	color: black;
}

/* Active/current link */
.topnav a.active {
	background-color: #2196f3;
	color: white;
}

/* Style the input container */
.topnav .login-container {
	float: right;
}

/* Style the input field inside the navbar */
.topnav input[type="text"] {
	padding: 6px;
	margin-top: 8px;
	font-size: 17px;
	border: none;
	width: 150px; /* adjust as needed (as long as it doesn't break the topnav) */
}

/* Style the button inside the input container */
.topnav .login-container button {
	float: right;
	padding: 6px;
	margin-top: 8px;
	margin-right: 16px;
	background: #ddd;
	font-size: 17px;
	border: none;
	cursor: pointer;
}

.topnav .login-container button:hover {
	background: #ccc;
}

/* Add responsiveness - On small screens, display the navbar vertically instead of horizontally */
@media screen and (max-width: 600px) {
	.topnav .login-container {
		float: none;
	}
	.topnav a,
	.topnav input[type="text"],
	.topnav .login-container button {
		float: none;
		display: block;
		text-align: left;
		width: 100%;
		margin: 0;
		padding: 14px;
	}
	.topnav input[type="text"] {
		border: 1px solid #ccc;
	}
}

#snackbar {
	visibility: hidden; /* Hidden by default. Visible on click */
	min-width: 250px; /* Set a default minimum width */
	margin-left: -125px; /* Divide value of min-width by 2 */
	background-color: #333; /* Black background color */
	color: #fff; /* White text color */
	text-align: center; /* Centered text */
	border-radius: 2px; /* Rounded borders */
	padding: 16px; /* Padding */
	position: fixed; /* Sit on top of the screen */
	z-index: 100000000000000; /* Add a z-index if needed */
	left: 50%; /* Center the snackbar */
	bottom: 30px; /* 30px from the bottom */
}

/* Show the snackbar when clicking on a button (class added with JavaScript) */
#snackbar.show {
	visibility: visible; /* Show the snackbar */
	/* Add animation: Take 0.5 seconds to fade in and out the snackbar. 
  However, delay the fade out process for 2.5 seconds */
	-webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
	animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

/* Animations to fade the snackbar in and out */
@-webkit-keyframes fadein {
	from {
		bottom: 0;
		opacity: 0;
	}
	to {
		bottom: 30px;
		opacity: 1;
	}
}

@keyframes fadein {
	from {
		bottom: 0;
		opacity: 0;
	}
	to {
		bottom: 30px;
		opacity: 1;
	}
}

@-webkit-keyframes fadeout {
	from {
		bottom: 30px;
		opacity: 1;
	}
	to {
		bottom: 0;
		opacity: 0;
	}
}

@keyframes fadeout {
	from {
		bottom: 30px;
		opacity: 1;
	}
	to {
		bottom: 0;
		opacity: 0;
	}
}

.fade-enter-active,
.fade-leave-active {
	transition-property: opacity;
	transition-duration: 0.15s;
}

.fade-enter-active {
	transition-delay: 0.1s;
}

.fade-enter,
.fade-leave-active {
	opacity: 0;
}
</style>
