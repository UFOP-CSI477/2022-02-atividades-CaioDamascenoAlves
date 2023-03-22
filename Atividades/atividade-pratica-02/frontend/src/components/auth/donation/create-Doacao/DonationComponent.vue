<template>
	<div class="container">
		<div class="row">
			<div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
				<h2>Doação</h2>
				<form class="text-center border border-dark p-5"
					style="margin-top: 70px; height: auto; padding-top: 100px !important"
					v-on:submit.prevent="CreateSubmitDonationForm()">
					<!--INÍCIO BLOCO: Data-->
					<div class="form-group">
						<input type="date" id="date" name="data" class="form-control mb-5"
							placeholder="Data da Doação" v-model="donationForm.data" :class="{
								'is-invalid': isSubmitted && $v.donationForm.data.$error,
							}" />
						<div v-if="isSubmitted && !$v.donationForm.data.required" class="invalid-feedback">
							O campo data é obrigatório!
						</div>
					</div>
					<!--FIM BLOCO: Data-->
					<!--INÍCIO BLOCO: Botão-->
					<center>
						<button @click="submitDonationForm" class="btn btn-dark btn-block  w-75 my-4" cl>
							Avançar
						</button>
					</center>
					<!--FIM BLOCO: Botão-->
				</form>
			</div>
		</div>
	</div>
</template>

<script src="./Donation.js"></script>

<style src="" scoped>

</style>
