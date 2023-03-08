<template>
	<div class="container">
	  <div class="row">
		<div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
		  <form class="text-center border border-dark p-5"
			style="margin-top: 70px; height: auto; padding-top: 100px !important"
			v-on:submit.prevent="updateTipoSanguineoForm()">
			<!--INÍCIO BLOCO: Tipo-->
			<div class="form-group">
			  <input type="tipo" id="tipo" name="tipo" class="form-control mb-5"
				placeholder="Digite seu tipo Sanguineo" v-model="tipoSanguineoForm.tipo" :class="{
				  'is-invalid': isSubmitted && $v.tipoSanguineoForm.tipo.$error,
				}" />
			  <div v-if="isSubmitted && !$v.tipoSanguineoForm.tipo.required" class="invalid-feedback">
				O campo tipo é obrigatório!
			  </div>
			</div>
			<!--FIM BLOCO: Tipo-->
  
			<!--INÍCIO BLOCO: fator-->
			<div class="form-group">
			  <input type="fator" id="fator" name="fator" class="form-control mb-5"
				placeholder="Digite o Fator sanguineo" v-model="tipoSanguineoForm.fator" :class="{
				  'is-invalid': isSubmitted && $v.tipoSanguineoForm.fator.$error,
				}" />
			  <div v-if="isSubmitted && !$v.tipoSanguineoForm.fator.required" class="invalid-feedback">
				O campo fator é obrigatório!
			  </div>
			</div>
			<!--FIM BLOCO: fator-->
			<!--INÍCIO BLOCO: Botão-->
			<center>
			  <button class="btn btn-dark btn-block  w-75 my-4">
				Atualizar
			  </button>
			</center>
			<!--FIM BLOCO: Botão-->
		  </form>
		</div>
	  </div>
	</div>
  </template>

  <script src="./EditTipoSanguineo.js"></script>