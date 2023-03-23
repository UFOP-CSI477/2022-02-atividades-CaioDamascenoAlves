<template>
  <section class="h-100 gradient-form" style="background-color: #fff">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-xl-10 offset-2">
          <h3 class="form-label" for="nome">Adoção</h3>

          <div class="card rounded-3 text-black">
            <div class="row g-0">
              <div class="col-lg-6">
                <div class="card-body mx-md-4">
                  <div class="text-center">
                    <img
                      src="https://img.freepik.com/vetores-premium/ilustracao-de-adocao-animal-jovens-sao-voluntarios-em-personagens-de-desenhos-animados-de-abrigo-de-caes-em-fundo-branco-conceito-de-cuidados-de-estimacao-voluntario-ativista-adotando-animal-abandonado-e-sem-teto_151150-1364.jpg"
                      style="width: 185px"
                      alt="logo"
                    />
                    <!-- <img src="https://cdn-icons-png.flaticon.com/512/3047/3047928.png"
											style="width: 185px;" alt="logo"> -->
                    <h4 class="mt-1">PETADO</h4>
                  </div>

                  <form v-on:submit.prevent="createSubmitAdocaoForm()">
                    <!--INÍCIO BLOCO: Data-->
                    <div class="form-outline mb-4">
                      <label class="form-label" for="data">Data</label>

                      <input
                        type="date"
                        id="data"
                        name="data"
                        class="form-control"
                        placeholder="Inclua seu Nome"
                        v-model="adocaoForm.data"
                        :class="{
                          'is-invalid':
                            isSubmitted && $v.adocaoForm.data.$error,
                        }"
                      />
                      <div
                        v-if="isSubmitted && !$v.adocaoForm.data.required"
                        class="invalid-feedback text-center"
                      >
                        O campo nome é obrigatório!
                      </div>
                    </div>
                    <!--FIM BLOCO: Data-->

                    <!--INÍCIO BLOCO: Botão-->
                    <div class="text-center pb-1">
                      <button
                        class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                        type="button"
                        @click="submitCreateAdocao"
                      >
                        Adotar
                      </button>
                    </div>
                    <!--FIM BLOCO: Botão-->
                  </form>
                </div>
              </div>
              <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                <!-- <div>
                  <h3>Dados da Pessoa</h3>
                  <p>Nome: {{ user.name }}</p>
                  <p>Email: {{ user.email }}</p>
                  <p>Telefone: {{ pessoa.rua }}</p>
                  <p>Telefone: {{ pessoa.numero }}</p>
                  <p>Telefone: {{ pessoa.complemento }}</p>
                </div>
                <div>
                  <h3>Dados do Pet</h3>
                  <p>Nome: {{ pet.nome }}</p>
                  <p>Idade: {{ pet.idade }}</p>
                  <p>Tipo: {{ pet.tipo }}</p>
                  <p>Raça: {{ pet.raca }}</p>
                </div> -->
                <div>
                  <h3>Dados da Doação</h3>
                  <p>Data: {{ doacao }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script src="./CreateAdocao.js"></script>
<style>
.gradient-custom-2 {
  /* fallback for old browsers */
  background: #fccb90;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(
    to right,
    #2427ee,
    #d8363a,
    #dd3675,
    #6645b4
  );

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, #0292c9, #e72e3d);
}

@media (min-width: 768px) {
  .gradient-form {
    height: 100vh !important;
  }
}

@media (min-width: 769px) {
  .gradient-custom-2 {
    border-top-right-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
  }
}
</style>
