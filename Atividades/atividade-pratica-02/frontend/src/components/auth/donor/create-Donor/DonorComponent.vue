<template>
	<div class="container">
		<div class="row">
			<div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
				<form class="text-center border border-dark p-5"
					style="margin-top: 70px; height: auto; padding-top: 100px !important"
					v-on:submit.prevent="createSubmitDonorForm()">
					<!--INÍCIO BLOCO: Nome-->
					<div class="form-group">
						<input type="text" id="nome" name="nome" class="form-control mb-5"
							placeholder="Digite seu Nome" v-model="donorForm.nome" :class="{
								'is-invalid': isSubmitted && $v.donorForm.nome.$error,
							}" />
						<div v-if="isSubmitted && !$v.donorForm.nome.required" class="invalid-feedback">
							O campo Nome é obrigatório!
						</div>
					</div>
					<!--FIM BLOCO: Nome-->
					
					<!--INÍCIO BLOCO: Rua-->
					<div class="form-group">
						<input type="text" id="rua" name="rua" class="form-control mb-5"
							placeholder="Digite seu Rua" v-model="donorForm.rua" :class="{
								'is-invalid': isSubmitted && $v.donorForm.rua.$error,
							}" />
						<div v-if="isSubmitted && !$v.donorForm.rua.required" class="invalid-feedback">
							O campo rua é obrigatório!
						</div>
					</div>
					<!--FIM BLOCO: Rua-->
					
					
					<!--INÍCIO BLOCO: Numero-->
					<div class="form-group">
						<input type="text" id="numero" name="numero" class="form-control mb-5"
							placeholder="Digite seu Numero" v-model="donorForm.numero" :class="{
								'is-invalid': isSubmitted && $v.donorForm.numero.$error,
							}" />
						<div v-if="isSubmitted && !$v.donorForm.numero.required" class="invalid-feedback">
							O campo Numero é obrigatório!
						</div>
					</div>
					<!--FIM BLOCO: Numero-->
					
					<!--INÍCIO BLOCO: Complemento-->
					<div class="form-group">
						<input type="text" id="complemento" name="complemento" class="form-control mb-5"
							placeholder="Digite seu Complemento" v-model="donorForm.complemento" :class="{
								'is-invalid': isSubmitted && $v.donorForm.complemento.$error,
							}" />
						<div v-if="isSubmitted && !$v.donorForm.complemento.required" class="invalid-feedback">
							O campo complemento é obrigatório!
						</div>
					</div>
					<!--FIM BLOCO: Complemento-->

					
					<!--INÍCIO BLOCO: Documento-->
					<div class="form-group">
						<input type="text" id="documento" name="documento" class="form-control mb-5"
							placeholder="Digite seu Documento" v-model="donorForm.documento" :class="{
								'is-invalid': isSubmitted && $v.donorForm.documento.$error,
							}" />
						<div v-if="isSubmitted && !$v.donorForm.documento.required" class="invalid-feedback">
							O campo documento é obrigatório!
						</div>
					</div>
					<!--FIM BLOCO: Documento-->

					<!--INÍCIO BLOCO: Botão-->
					<center>
						<button @click="submitCreatePessoa" class="btn btn-dark btn-block  w-75 my-4" cl>
							Entrar
						</button>
					</center>
					<!--FIM BLOCO: Botão-->
				</form>
			</div>
		</div>
	</div>
</template>

<script src="./Donor.js"></script>

<style src="" scoped>

</style>
