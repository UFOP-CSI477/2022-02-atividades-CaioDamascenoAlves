<template>
	<section class="h-100 gradient-form" style="background-color: #fff;">
		<div class="container h-100">
			<div class="row d-flex justify-content-center align-items-center h-100">
				<div class="col-xl-10">
					<h3 class="form-label" for="nome">Edição dados Pet</h3>

					<div class="card rounded-3 text-black">

						<div class="row g-0">
							<div class="col-lg-6">

								<div class="card-body mx-md-4">

									<div class="text-center">
										<!-- <img src="https://img.freepik.com/vetores-premium/ilustracao-de-adocao-animal-jovens-sao-voluntarios-em-personagens-de-desenhos-animados-de-abrigo-de-caes-em-fundo-branco-conceito-de-cuidados-de-estimacao-voluntario-ativista-adotando-animal-abandonado-e-sem-teto_151150-1364.jpg"
											style="width: 185px;" alt="logo"> -->
										<img src="https://cdn-icons-png.flaticon.com/512/3047/3047928.png"
											style="width: 185px;" alt="logo">
										<h4 class="mt-1">PETADO</h4>
									</div>

									<form v-on:submit.prevent="updateSubmitPetForm()">
										<!--INÍCIO BLOCO: Nome-->
										<div class="form-outline mb-4">
											<label class="form-label" for="name">Nome</label>

											<input type="text" id="name" name="name" class="form-control"
												placeholder="Inclua o Nome do Pet" v-model="petForm.nome" :class="{
													'is-invalid': isSubmitted && $v.petForm.nome.$error,
												}" />
											<div v-if="isSubmitted && !$v.petForm.nome.required"
												class="invalid-feedback text-center">
												O campo nome é obrigatório!
											</div>
										</div>
										<!--FIM BLOCO: Nome-->

										<!--INÍCIO BLOCO: Idade-->
										<div class="form-outline mb-4">
											<label class="form-label" for="idade">Idade</label>

											<input type="text" id="idade" name="idade" class="form-control"
												placeholder="Inclua a Idade do seu Pet" v-model="petForm.idade" :class="{
													'is-invalid': isSubmitted && $v.petForm.idade.$error,
												}" />
											<div v-if="isSubmitted && !$v.petForm.idade.required"
												class="invalid-feedback text-center">
												O campo idade é obrigatório!
											</div>
										</div>
										<!--FIM BLOCO: Idade-->

										<!--INÍCIO BLOCO: Tipo-->
										<div class="form-outline mb-4">
											<label class="form-label" for="tipo">Tipo</label>

											<input type="text" id="tipo" name="tipo" class="form-control"
												placeholder="Inclua Tipo do seu Pet" v-model="petForm.tipo" :class="{
													'is-invalid': isSubmitted && $v.petForm.tipo.$error,
												}" />
											<div v-if="isSubmitted && !$v.petForm.tipo.required"
												class="invalid-feedback text-center">
												O campo tipo é obrigatório!
											</div>
										</div>
										<!--FIM BLOCO: Tipo-->

										<!--INÍCIO BLOCO: Raça-->
										<div class="form-outline mb-4">
											<label class="form-label" for="raca">Raça</label>

											<input type="text" id="raca" name="raca" placeholder="Insira a Raça do seu Pet"
												class="form-control" v-model="petForm.raca" :class="{
													'is-invalid': isSubmitted && $v.petForm.raca.$error,
												}" />
											<div v-if="isSubmitted && !$v.petForm.raca.required"
												class="invalid-feedback text-center">
												O campo raça é obrigatório!
											</div>
										</div>
										<!--FIM BLOCO: Raça-->

										<!--INÍCIO BLOCO: Botão-->
										<div class="text-center pb-1">
											<button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
												type="button" @click="updatePetForm">Atualizar</button>
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

<script src="./EditPet.js"></script>
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