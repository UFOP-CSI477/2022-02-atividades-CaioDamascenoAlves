<template>
	<section class="h-100 gradient-form" style="background-color: #fff;">
		<div class="container h-100">
			<div class="row d-flex justify-content-center align-items-center h-100">
				<div class="col-xl-10 offset-2">
					<h3 class="form-label" for="nome">Atualização da Doação</h3>

					<div class="card rounded-3 text-black">

						<div class="row g-0">
							<div class="col-lg-6">

								<div class="card-body mx-md-4">

									<div class="text-center">
										<img src="https://img.freepik.com/vetores-premium/ilustracao-de-adocao-animal-jovens-sao-voluntarios-em-personagens-de-desenhos-animados-de-abrigo-de-caes-em-fundo-branco-conceito-de-cuidados-de-estimacao-voluntario-ativista-adotando-animal-abandonado-e-sem-teto_151150-1364.jpg"
											style="width: 185px;" alt="logo">
										<!-- <img src="https://cdn-icons-png.flaticon.com/512/3047/3047928.png"
											style="width: 185px;" alt="logo"> -->
										<h4 class="mt-1">PETADO</h4>
									</div>

									<form v-on:submit.prevent="updateSubmitDoacaoForm()">
										<!--INÍCIO BLOCO: Data-->
										<div class="form-outline mb-4">
											<label class="form-label" for="data">Data</label>

											<input type="date" id="data" name="data" class="form-control"
												placeholder="Insira a Data da Doação" v-model="doacaoForm.data" :class="{
													'is-invalid': isSubmitted && $v.doacaoForm.data.$error,
												}" />
											<div v-if="isSubmitted && !$v.doacaoForm.data.required"
												class="invalid-feedback text-center">
												O campo data é obrigatório!
											</div>
										</div>
										<!--FIM BLOCO: Data-->

										<!--INÍCIO BLOCO: Botão-->
										<div class="text-center pb-1">
											<button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
												type="button" @click="submitUpdateDoacao">Atualizar</button>
										</div>
										<!--FIM BLOCO: Botão-->
									</form>

								</div>
							</div>
							<div class="col-lg-6 d-flex align-items-center gradient-custom-2">
								<div class="text-white px-3 py-4 p-md-5 mx-md-4">
									<h4 class="mb-4">Esse é um Sistema de adoção de Pets</h4>
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script src="./EditDoacao.js"></script>
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