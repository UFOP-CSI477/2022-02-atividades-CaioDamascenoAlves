<template>
	<!--Container Main end-->
	<div id="app">

		<!-- INÍCIO NAVBAR -->
		<b-navbar toggleable type="dark" variant="dark">
			<b-navbar-brand href="#">Blood Donation
				<router-link to="/createLocaisColeta" class="m-5">
					<button class="btn btn-primary rounded-pill ">Doar Sangue</button>
				</router-link>
			</b-navbar-brand>


			<div>
				<b-dropdown text="Menu" variant="outline-light" class="m-2">
					<b-dropdown-item href="#">
						<a class="nav-link" @click="logOutUser">Log Out</a>
					</b-dropdown-item>
				</b-dropdown>

			</div>
		</b-navbar>
		<!-- FIM NAVBAR -->
		<div class="container-fluid" style="">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>

export default {
	name: 'App',
	methods: {
		logOutUser() {
			localStorage.removeItem('jwt');
			this.$router.push('/');
		},
	},
}
</script>
  
<style scoped>
.navbar {
	background: linear-gradient(to left, #fd1919, #f71e1e, #000);
}
</style>

