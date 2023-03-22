<template>
	<div class="container">
		<h1 class="text-center mb-5">Lista de Locais de Coleta</h1>
		<div class="row">
			<div class="col-md-4 mb-4" v-for="local in locais" :key="local._id">
				<div class="card shadow-sm">
					<div class="card-body">
						<h5 class="card-title">{{ local.nome }}</h5>
						<p class="card-text">Rua: {{ local.rua }}</p>
						<p class="card-text">Numero: {{ local.numero }}</p>
						<p class="card-text">Complemento: {{ local.complemento }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./Home.js"></script>

<style>
.card {
  border: none;
  background-color: #f8f9fa;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
.card-img-top {
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}
.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.card-text {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}
</style>
