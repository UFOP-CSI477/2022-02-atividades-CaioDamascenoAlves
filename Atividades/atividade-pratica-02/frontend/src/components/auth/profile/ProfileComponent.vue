<template>
	<div>
		<div class="container">
			<div class="collapse navbar-collapse justify-content-end" id="navbarNav">
				<ul class="navbar-nav">
					<li class="nav-item active">
						<a class="nav-link" @click="logOutUser">Log Out</a>
					</li>
				</ul>
			</div>
		</div>
		<section>
			<div class="container mt-5">
				<div class="row">
					<div class="col-md-12">
						<ul class="list-group mb-5">
							<li class="list-group-item  bg-dark text-center text-light">Dados de Login</li>
							<li class="list-group-item">E-mail: {{ user.email }}</li>
						</ul>

						<ul class="list-group mb-5">
							<li
								class="list-group-item bg-dark text-center text-light d-flex justify-content-between align-items-center">
								<span>Seu Tipo Sanguineo</span>
								<button class="btn btn-success ml-auto" @click="navigateToUpdateTipoSanguineo">Editar
									Tipo Sanguíneo</button>
							</li>
							<li class="list-group-item">Tipo Sanguineo: {{ tiposSanguineos.tipo }}</li>
							<li class="list-group-item">Fator Sanguineo: {{ tiposSanguineos.fator }}</li>
						</ul>


						<ul class="list-group ">
							<li class="list-group-item bg-dark text-center text-light d-flex justify-content-between align-items-center">Dados Pessoais
								<button class="btn btn-success ml-auto" @click="navigateToUpdateDonor">Editar Dados Pessoais</button>
							</li>
							<li class="list-group-item">Nome: {{ donor.nome }}</li>
							<li class="list-group-item">Rua: {{ donor.rua }}</li>
							<li class="list-group-item">Numero: {{ donor.numero }}</li>
							<li class="list-group-item">Complemento: {{ donor.complemento }}</li>
							<li class="list-group-item">Documento: {{ donor.documento }}</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script src="./Profile.js"></script>

<style src="" scoped>

</style>
