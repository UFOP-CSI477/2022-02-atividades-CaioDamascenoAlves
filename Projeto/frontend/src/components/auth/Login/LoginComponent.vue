<template>
	<section class="h-100 gradient-form" style="background-color: #fff;">
		<div class="container h-100">
			<div class="row d-flex justify-content-center align-items-center h-100">
				<div class="col-xl-10">
					<h3 class="form-label" for="Login">Log in</h3>
					<div class="card rounded-3 text-black">
						<div class="row g-0">
							<div class="col-lg-6">
								<div class="card-body mx-md-4">

									<div class="text-center">
										<img src="https://img.freepik.com/vetores-premium/ilustracao-de-adocao-animal-jovens-sao-voluntarios-em-personagens-de-desenhos-animados-de-abrigo-de-caes-em-fundo-branco-conceito-de-cuidados-de-estimacao-voluntario-ativista-adotando-animal-abandonado-e-sem-teto_151150-1364.jpg"
											style="width: 185px;" alt="logo">
										<!-- <img src="https://cdn-icons-png.flaticon.com/512/3047/3047928.png"
											style="width: 185px;" alt="logo"> -->
										<h4 class="mt-1 mb-5 pb-1">PETADO</h4>
									</div>

									<form v-on:submit.prevent="loginSubmitUserForm()">
										<div class="form-outline mb-4">
											<label class="form-label" for="email">Email</label>
											<input type="email" id="email" class="form-control"
												placeholder="Digite seu E-mail" v-model="loginForm.email" :class="{
													'is-invalid': isSubmitted && $v.loginForm.email.$error,
												}" />
											<div v-if="isSubmitted && !$v.loginForm.email.required"
												class="invalid-feedback text-center">
												O campo e-mail é obrigatório!
											</div>
										</div>

										<div class="form-outline mb-4">
											<label class="form-label" for="password">Senha</label>

											<input type="password" id="password" name="password" class="form-control"
												placeholder="Digite sua Senha" v-model="loginForm.password" :class="{
													'is-invalid': isSubmitted && $v.loginForm.password.$error,
												}" />
											<div v-if="isSubmitted && !$v.loginForm.password.required"
												class="invalid-feedback text-center">
												O campo Senha é obrigatório!
											</div>
										</div>

										<div class="text-center pt-1 mb-5 pb-1">
											<button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
												type="button" @click="submitLoginUser">Entrar</button>
										</div>

										<div class="d-flex align-items-center justify-content-center pb-4">
											<p class="mb-0 me-2"> Não tem uma conta cadastrada?
												<router-link to="/register">Cadastre Aqui</router-link>
											</p>
										</div>

									</form>

								</div>
							</div>
							<div class="col-lg-6 d-flex align-items-center gradient-custom-2">
								<div class="text-white px-3 py-4 p-md-5 mx-md-4">
									<h4 class="mb-4">Esse é um Sistema de doação de Pets</h4>
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script src="./Login.js"></script>
<style>
.gradient-custom-2 {
	/* fallback for old browsers */
	background: #fccb90;

	/* Chrome 10-25, Safari 5.1-6 */
	background: -webkit-linear-gradient(to right, #2427ee, #d8363a, #dd3675, #6645b4);

	/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	background: linear-gradient(to right, #0292C9, #E72E3D);
}

@media (min-width: 768px) {
	.gradient-form {
		height: 100vh !important;
	}
}

@media (min-width: 769px) {
	.gradient-custom-2 {
		border-top-right-radius: .3rem;
		border-bottom-right-radius: .3rem;
	}
}
</style>