<template>
	<div class="about">
		<h1>Select .dat file</h1>
		<br>
		<label v-if="!dat" for="upload" class="upload_label">Upload File</label>
		<input v-show="false" id="upload" type="file" @change="onFileChange" accept=".dat">
		<br>
		<button class="success" v-show="dat" @click="save">Save</button>
		<button class="warning" v-show="dat" @click="refresh">Upload File Again</button>
		<br>
		<br>
		<textarea v-show="dat" name id cols="100" rows="20" v-model="dat"></textarea>
	</div>
</template>

<script>
import axios from "axios";
import { setInterval } from "timers";

export default {
	data: () => ({
		dat: ""
	}),

	computed: {
		formattedStr() {
			return this.sortData(this.dat);
		},

		users() {
			const userIDs = this.getUserIDs(this.formattedStr);
			return userIDs.map(userID => {
				// const dates = this.removeArrayDuplicates(
				// 	this.getUserDates(userID)
				// );

				const dtr = this.generateDtr(userID);

				return {
					userID,
					name: "",
					dtr
				};
			});
		}
	},

	methods: {
		refresh() {
			location.reload();
		},

		save() {
			let filename = prompt("Enter the name of the file");

			if (filename) {
				axios
					.post("http://localhost:3000/Users", {
						id: Math.random()
							.toString(16)
							.slice(2),
						saveName: filename,
						data: this.users
					})
					.then(res => {
						this.$parent.$emit(
							"Snackbar",
							`Saved '${res.data.saveName}'`
						);
					})
					.catch(err => {
						throw err;
					});

				this.$router.push("/recent");
			}
		},

		removeArrayDuplicates(arr) {
			let unique_array = arr.filter(function(elem, index, self) {
				return index == self.indexOf(elem);
			});
			return unique_array;
		},

		// file upload
		onFileChange(e) {
			const files = e.target.files || e.dataTransfer.files;
			if (!files.length) return;
			this.createFile(files[0]);
		},

		// create file from upload
		createFile(file) {
			const reader = new FileReader();

			var vm = this;

			reader.onload = e => {
				vm.dat = e.target.result;
			};

			reader.readAsText(file);
		},

		getUserIDs(arr) {
			if (arr.length === 0) return [];

			let ids = arr.map(x => {
				return x[0];
			});

			return this.removeArrayDuplicates(ids);
		},

		getUserDates(id) {
			let dates = [];

			this.formattedStr.forEach(x => {
				if (x[0] === id) {
					dates.push(x[1]);
				}
			});

			return dates;
		},

		generateDtr(id) {
			const dates = this.getUserDates(id);

			const users = [];

			this.formattedStr.forEach(x => {
				if (x[0] === id) {
					users.push(x);
				}
			});

			const ins = [];

			dates.forEach(x => {
				let el = users.filter(y => {
					return x === y[1];
				});

				// user must be an object

				let user = {
					date: el[0][1],
					morningIn: el.find(a => a[4] == "0"),
					morningOut: el.find(a => a[4] == "1"),
					noonIn: el.find(a => a[4] == "3"),
					noonOut: el.find(a => a[4] == "2")
				};

				if (user.morningIn) {
					user.morningIn = user.morningIn[2];
				}

				if (user.morningOut) {
					user.morningOut = user.morningOut[2];
				}

				if (user.noonIn) {
					user.noonIn = user.noonIn[2];
				}

				if (user.noonOut) {
					user.noonOut = user.noonOut[2];
				}

				ins.push(user);
			});

			return this.removeDuplicatesBy(x => x.date, ins);
		},

		// sort data received
		sortData(data) {
			if (data === "") return [];

			let dat = data.split("\n").map(x => {
				return x.trim().split(" ");
			});

			let newDat = dat.map(x => {
				let withTabs = x[0] + "\t" + x[1];

				// remove tabs
				let withoutTabs = withTabs.split("\t");

				return withoutTabs;
			});

			return newDat;
		},

		removeDuplicatesBy(keyFn, array) {
			var mySet = new Set();
			return array.filter(function(x) {
				var key = keyFn(x),
					isNew = !mySet.has(key);
				if (isNew) mySet.add(key);
				return isNew;
			});
		}
	}
};
</script>

<style>
body {
	/* background: #f0f0f0; */
}

.chooseFile button {
	background-color: #2196f3;
	border: none; /* Remove borders */
	color: #000; /* Add a text color */
	/* padding: 14px 28px; Add some padding */
	cursor: pointer; /* Add a pointer cursor on mouse-over */
}

textarea {
	margin-top: 10px;
	/* margin-left: 50px; */
	background: none repeat scroll 0 0 #000;
	border-color: -moz-use-text-color #ffffff #ffffff -moz-use-text-color;
	border-radius: 6px 6px 6px 6px;
	border-style: none solid solid none;
	border-width: medium 1px 1px medium;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12) inset;
	color: #18e40f;
	font-family: "Courier New", Courier, monospace;
	font-size: 1em;
	line-height: 1.4em;
	padding: 5px 8px;
	/* transition: background-color 0.2s ease 0s; */
}

.upload_label {
	display: inline-block;
	border: none; /* Remove borders */
	color: white;
	padding: 10px 28px; /* Add some padding */
	cursor: pointer; /* Add a pointer cursor on mouse-over */
	background-color: #2196f3;
}

button {
	font-size: 14px;
	border: none; /* Remove borders */
	color: white; /* Add a text color */
	padding: 14px 28px; /* Add some padding */
	cursor: pointer; /* Add a pointer cursor on mouse-over */
	margin: 0 5px;
	background-color: #e7e7e7;
}

.upload_label:hover {
	background: #0b7dda;
}

.success {
	background-color: #4caf50;
} /* Green */
.success:hover {
	background-color: #46a049;
}

.warning {
	background-color: #ff9800;
} /* Orange */
.warning:hover {
	background: #e68a00;
}

.danger {
	background-color: #f44336;
} /* Red */
.danger:hover {
	background: #da190b;
}
</style>