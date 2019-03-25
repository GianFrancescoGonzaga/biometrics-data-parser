<template>
	<div class="dtr" id="dtr">
		<div class="column6">
			<p class="civil_service_title">Civil Service Form No. 48</p>
			<p class="dtr">DAILY TIME RECORD</p>
			<p class="circles">-----o0o-----</p>
			<p class="line1">{{ user.name || user.userID }}</p>
			<p class="name">(Name)</p>
			<p class="civil_service_title2">
				For the month of
				<b style="font-size: 14px;">{{ monthNames[new Date().getMonth()] }} {{ new Date().getFullYear()}}</b>
				<br>Official hours for arrival
				<br>and departure
			</p>

			<br>
			<table border="1">
				<tr>
					<th rowspan="2">Day</th>
					<th colspan="2">A.M.</th>
					<th colspan="2">P.M.</th>
					<th colspan="2">Undertime</th>
				</tr>
				<tr>
					<th>Arrival</th>
					<th>Departure</th>
					<th>Arrival</th>
					<th>Departure</th>
					<th>Arrival</th>
					<th>Departure</th>
				</tr>
				<tr v-for="(data, i) in user.dtr">
					<th>{{ i + 1 }}</th>
					<td>{{ data.morningIn }}</td>
					<td>{{ data.morningOut }}</td>
					<td>{{ data.noonIn }}</td>
					<td>{{ data.noonOut}}</td>
					<td></td>
					<td></td>
				</tr>
				<tr v-if="remainingDays" v-for="n in remainingDays">
					<th>{{ n + attendedDays }}</th>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
			</table>
			<p>
				I certify on my honor that the above is a true and correct report of the
				<br>hours of work performed, record of which was made daily at the time
				<br>of arrival and departure from office.
			</p>
			<br>___________________________________________
			<br>
			<p>VERIFIED as to the prescribed office hours</p>
			<br>___________________________________________
			<br>
			<p>In Charge</p>

			<br>
			<br>
		</div>
		<div class="column6">
			<p class="civil_service_title">Civil Service Form No. 48</p>
			<p class="dtr">DAILY TIME RECORD</p>
			<p class="circles">-----o0o-----</p>
			<p class="line1">{{ user.name || user.userID }}</p>
			<p class="name">(Name)</p>
			<p class="civil_service_title2">
				For the month of
				<b style="font-size: 14px;">{{ monthNames[new Date().getMonth()] }} {{ new Date().getFullYear()}}</b>
				<br>Official hours for arrival
				<br>and departure
			</p>
			<br>
			<table border="1">
				<tr>
					<th rowspan="2">Day</th>
					<th colspan="2">A.M.</th>
					<th colspan="2">P.M.</th>
					<th colspan="2">Undertime</th>
				</tr>
				<tr>
					<th>Arrival</th>
					<th>Departure</th>
					<th>Arrival</th>
					<th>Departure</th>
					<th>Arrival</th>
					<th>Departure</th>
				</tr>
				<tr v-for="(data, i) in user.dtr">
					<th>{{ i + 1 }}</th>
					<td>{{ data.morningIn }}</td>
					<td>{{ data.morningOut }}</td>
					<td>{{ data.noonIn }}</td>
					<td>{{ data.noonOut}}</td>
					<td></td>
					<td></td>
				</tr>
				<tr v-if="remainingDays" v-for="n in remainingDays">
					<th>{{ n + attendedDays }}</th>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
			</table>
		</div>
		<br>
		<p>
			I certify on my honor that the above is a true and correct report of the
			<br>hours of work performed, record of which was made daily at the time
			<br>of arrival and departure from office.
		</p>
		<br>___________________________________________
		<br>
		<p>VERIFIED as to the prescribed office hours</p>
		<br>___________________________________________
		<br>
		<p>In Charge</p>

		<br>
		<br>
	</div>
</template>


<script>
import axios from "axios";
// import printJS from "printjs";

export default {
	data: () => ({
		dtr: [],
		user: {
			dtr: []
		},
		monthNames: [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		]
	}),

	computed: {
		remainingDays() {
			if (this.user == {}) return undefined;

			return 30 - this.attendedDays;
		},

		attendedDays() {
			return this.user.dtr.length;
		}
	},

	methods: {
		getData() {
			axios
				.get(`http://localhost:3000/Users/${this.$route.query.file_id}`)
				.then(res => {
					const user = res.data.data.find(
						x => x.userID == this.$route.query.user_id
					);
					this.user = user;
				})
				.catch(err => {
					throw err;
				});
		}
	},

	beforeMount() {
		this.getData();
	},

	created() {
		this.$parent.$emit("Snackbar", "Press CTRL + P to print the page!");
	}
};
</script>

<style>
@media print {
	.topnav {
		visibility: hidden;
	}
}
</style>

<style scoped>
table,
td,
tr,
th {
	border-collapse: collapse;
	text-align: center;
	font-family: arial;
	font-size: 15px;
	border: 1px solid black;
	padding: 2px 2px;
}
p {
	text-align: left;
	font-family: arial;
	font-size: 12px;
}
p.civil_service_title {
	text-align: left;
	font-family: arial;
	font-size: 10px;
}
p.civil_service_title2 {
	padding-left: 10px;
	font-family: arial;
	font-size: 12px;
}
p.name {
	padding-left: 170px;
	font-family: arial;
	font-size: 12px;
}
p.dtr {
	padding-left: 140px;
	font-family: arial;
	font-weight: bold;
	font-size: 16px;
}
p.circles {
	padding-left: 180px;
	font-family: arial;
	font-size: 12px;
}
p.line1 {
	padding: 10px 0;
	padding-left: 150px;
	text-decoration: underline;
	font-family: arial;
	font-size: 16px;
}

.dtr {
	padding-bottom: 30px;
}
</style>
