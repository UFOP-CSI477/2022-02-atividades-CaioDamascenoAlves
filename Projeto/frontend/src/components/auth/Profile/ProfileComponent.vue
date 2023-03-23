<template>
	<div class="container col-9 my-5">
		<div class="card">
			<div class="card-body">
				<h2 class="card-title">Perfil</h2>
				<hr>
				<div class="row">
					<div class="col-md-5">
						<h4 class="card-subtitle mb-2 text-muted">Dados do Usuário</h4>
						<p class="card-text"><strong>Nome:</strong> {{ user.name }}</p>
						<p class="card-text"><strong>E-mail:</strong> {{ user.email }}</p>
					</div>
					
					<div class="col-md-5">
						<h4 class="card-subtitle mb-2 text-muted">Dados de Pessoa
							<button class="btn btn-outline-danger btn-sm " @click="deletarPessoa">
								<font-awesome-icon :icon="['fas', 'trash']" /></button>
							<button class="btn btn-outline-warning btn-sm" @click="navigateToUpdatePessoa">
								<font-awesome-icon :icon="['fas', 'user-edit']" /> Editar</button>
						</h4>
						<p class="card-text"><strong>Rua:</strong> {{ pessoa.rua }}</p>
						<p class="card-text"><strong>Numero:</strong> {{ pessoa.numero }}</p>
						<p class="card-text"><strong>Complemento:</strong> {{ pessoa.complemento }}</p>
						<p class="card-text"><strong>Documento:</strong> {{ pessoa.documento }}</p>
					</div>
					<div class="col-md-5 my-5">
						<h4 class="card-subtitle mb-2 text-muted">Dados do Pet Doado
							<button class="btn btn-outline-danger btn-sm " @click="deletarPet">
								<font-awesome-icon :icon="['fas', 'trash']" /></button>
							<button class="btn btn-outline-success btn-sm " @click="navigateToUpdatePet">
								<font-awesome-icon :icon="['fas', 'paw']" /> Editar</button>
						</h4>
						<p class="card-text"><strong>Nome:</strong> {{ pet.nome }}</p>
						<p class="card-text"><strong>Espécie:</strong> {{ pet.tipo }}</p>
						<p class="card-text"><strong>Raça:</strong> {{ pet.raca }}</p>
						<p class="card-text"><strong>Idade:</strong> {{ pet.idade }}</p>
					</div>
					
					<div class="col-md-5 my-5">
						<h4 class="card-subtitle mb-2 text-muted">Doação
							<button class="btn btn-outline-danger btn-sm " @click="deletarDoacao">
								<font-awesome-icon :icon="['fas', 'trash']" /></button>
							<button class="btn btn-outline-primary btn-sm " @click="navigateToUpdateDoacao">
								<font-awesome-icon :icon="['fas', 'calendar']" /> Editar</button>
							</h4>
							<p class="card-text"><strong>Data:</strong> {{ doacao.data }}</p>
						</div>
						<!-- <div class="col-md-5 my-5" >
							<h4 class="card-subtitle mb-2 text-muted">Dados do Pet Adotado
								<button class="btn btn-outline-danger btn-sm " @click="navigateToUpdatePet">
								<font-awesome-icon :icon="['fas', 'trash']" /></button>
								<button class="btn btn-outline-success btn-sm " @click="navigateToUpdatePet">
									<font-awesome-icon :icon="['fas', 'paw']" /> Editar</button>
							</h4>
							<p class="card-text"><strong>Adocao:</strong> {{ adocao.adocao.doacao.pet.nome }}</p>
							<p class="card-text"><strong>Idade:</strong> {{ adocao.adocao.doacao.pet.idade }}</p>
							<p class="card-text"><strong>Tipo:</strong> {{ adocao.adocao.doacao.pet.tipo }}</p>
							<p class="card-text"><strong>Raça:</strong> {{ adocao.adocao.doacao.pet.raca }}</p>
						</div> -->
				</div>
			</div>
		</div>
	</div>
</template>
  
<script src="./Profile"></script>
  