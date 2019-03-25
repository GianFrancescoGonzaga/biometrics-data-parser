<template>
	<div>
		<div class="info">
			<div class="content">
				<br>
				<h3 class="filename">
					<span>Savename:</span>
					{{ $route.query.file_name }}
				</h3>

				<br>
				<button @click="deleteSave" class="warning">Delete Save</button>

				<br>
				<br>
			</div>
		</div>

		<br>
		<br>

		<div class="field">
			<label class="label">Search Users</label>
			<div class="control">
				<input
					class="input"
					type="text"
					placeholder="Search by Name or ID"
					v-model="search"
					ref="vehicleSearch"
				>
			</div>
		</div>

		<div class="fixed_header">
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>View</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="user in filtered">
						<td>{{user.userID}}</td>
						<td>{{user.name}}</td>

						<td>
							<p @click="view(user.userID)">View Data</p>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<modal v-if="showModal" @close="showModal = false">
			<h3 slot="header">UserID: {{ modalData.userID }}</h3>
			<div slot="body">
				Name:
				<input type="text" v-model="modalData.name">
				<input type="button" value="Save" @click="saveData">
				<br>
				<br>
				<button
					class="success"
					style="padding: 10px 10px;"
					@click="printDTR(modalData.userID)"
				>Print DTR</button>
				<br>
				<div class="fixed_header">
					<table>
						<thead>
							<tr>
								<th>Date</th>
								<th>Morning In</th>
								<th>Morning Out</th>
								<th>Noon In</th>
								<th>Noon Out</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="data in modalData.dtr">
								<td>{{ data.date }}</td>
								<td>{{ data.morningIn }}</td>
								<td>{{ data.morningOut }}</td>
								<td>{{ data.noonIn }}</td>
								<td>{{ data.noonOut }}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</modal>
	</div>
</template>

<script>
import axios from "axios";
import Modal from "../components/modal";

export default {
	data: () => ({
		modalData: {
			userID: "",
			name: "",
			dtr: []
		},
		showModal: false,
		search: "",
		url: "http://localhost:3000/Users",
		dtr: []
	}),

	components: {
		Modal
	},

	computed: {
		fileID() {
			return this.$route.query.file_id;
		},

		// modalName() {
		// 	if (modalData.name != "") return modalData.name;
		// 	else return "";
		// },

		filtered() {
			return this.dtr.filter(item => {
				return (
					item.userID
						.toLowerCase()
						.indexOf(this.search.toLowerCase()) > -1 ||
					item.name.toLowerCase().indexOf(this.search.toLowerCase()) >
						-1
				);
			});
		}
	},

	methods: {
		printDTR(id) {
			this.$router.push(
				`/dtr?file_id=${this.$route.query.file_id}&user_id=${id}`
			);
		},

		view(id) {
			this.modalData = this.dtr.find(x => {
				return x.userID === id;
			});

			this.showModal = true;
		},

		getData() {
			axios
				.get(this.url + "/" + this.fileID)
				.then(res => {
					this.dtr = res.data.data;
				})
				.catch(err => {
					throw err;
				});
		},

		saveData() {
			const data = {
				id: this.fileID,
				saveName: this.$route.query.file_name,
				data: this.dtr
			};

			console.log(data);

			axios
				.put(`http://localhost:3000/Users/${this.fileID}`, data)
				.then(res => {
					this.$parent.$emit("Snackbar", "Successfully Saved!");
				})
				.catch(err => {
					throw err;
				});
		},

		deleteSave() {
			if (confirm("Are you sure you want to delete the save?")) {
				axios
					.delete("http://localhost:3000/Users/" + this.fileID)
					.then(res => {
						console.log("save deleted");
						this.$router.push("/recent");

						this.$parent.$emit("Snackbar", "Data Deleted");
					})
					.catch(err => {
						throw err;
					});
			}
		}
	},

	beforeMount() {
		this.getData();
	}
};
</script>

<style scoped>
.fixed_header {
	border: 0;
	margin-top: 20px;
	min-width: 100px;
	max-width: 560px;
	table-layout: fixed;
	border-collapse: collapse;
	display: inline-block;
}

.fixed_header tbody {
	display: block;
	width: 100%;
	overflow: auto;
	max-height: 350px;
	border: 0;
	/* background-color: #f0f0f0; */
}

.fixed_header thead tr {
	display: block;
	border: 0;
}

.fixed_header thead {
	background: black;
	color: #fff;
}

.fixed_header th,
.fixed_header td {
	border: 0;
	padding: 5px;
	text-align: left;
	width: 200px;
}

.fixed_header p {
	color: blue;
	text-decoration: underline;
	cursor: pointer;
}

.fixed_header tr:nth-child(even) {
	background-color: #f0f0f0;
}

.info {
	margin: 20px 0;
	background: #f0f0f0;
	min-width: 200px;
	max-width: 400px;
	/* display: inline-block; */
	border-radius: 5px;
}

.info .content {
	text-align: left;
	padding: 10px 10px;
}

.filename span {
	font-weight: 400;
}
</style>
 