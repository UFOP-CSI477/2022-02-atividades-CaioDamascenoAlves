<template>
	<div id="app">
		<div class="sidebar" :class="{ hidden: isMobile }">
			<ul>
				<li>
					<router-link to="/home" class="btn text-dark">
						<font-awesome-icon :icon="['fas', 'house']" />
						Home
					</router-link>
				</li>
				<li>
					<router-link to="/profile" class="btn text-dark">
						<font-awesome-icon :icon="['fas', 'user']" />
						Perfil
					</router-link>
				</li>
				<li>
					<router-link to="/createPet" class="btn text-dark">
						<font-awesome-icon :icon="['fas', 'paw']" />
						Doe um Pet
					</router-link>
				</li>
				<li>
					<button class="btn btn-danger text-dark" @click="logOutUser()">
						<font-awesome-icon :icon="['fas', 'right-from-bracket']" />
						Logout
					</button>
				</li>
			</ul>
		</div>
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>
  
<style>
.sidebar {
	position: fixed;
	top: 0;
	left: -10px;
	width: 120px;
	height: 100%;
	background: linear-gradient(to bottom, #73fc54 0%, #efd94e 33%, #eea084 66%, #56506f 99%);
	border-radius: 5%;
	transition: left 0.3s ease;
}

.sidebar ul {
	list-style: none;
	margin: 0;
	padding: 0;
}

.sidebar li {
	margin: 0;
	padding: 0;
}

.sidebar a,
.sidebar button {
	display: block;
	padding: 10px;
	color: #fff;
	text-decoration: none;
	border: none;
	background-color: transparent;
	cursor: pointer;
	width: 100%;
}

.sidebar a:hover {
	background-color: transparent;}

.sidebar button:hover {
	background-color: 0;
}

.content {
	margin-left: 120px;
	padding: 20px;
}

/* Oculta a sidebar em telas menores */
@media (max-width: 800px) {
	.sidebar {
		left: -200px;
	}

	.sidebar.hidden {
		display: none;
	}

	.content {
		margin-left: 0;
	}
}
</style>
  
<script>
export default {
	data() {
		return {
			isMobile: false,
		};
	},
	mounted() {
		// Verifica se é uma tela móvel
		if (window.innerWidth < 768) {
			this.isMobile = true;
		}
	},
	methods: {
		logOutUser() {
			localStorage.removeItem("jwt");
			this.$router.push("/");
		},
	},
};
</script>
  