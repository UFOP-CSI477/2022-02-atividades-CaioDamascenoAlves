# **CSI606-2021-02 - Presencial - Proposta de Trabalho Final**

## *Aluna(o): Caio Damasceno Alves*

--------------

### Resumo

  Foi desenvolvido um sistema de adoação de pets visando ajudar ONG's, veterinarias e pessoas que possuem muitos pets e desejam doalos dando um novo lar para os animais.

<!-- Apresentar o tema. -->
### 1. Tema

ADOÇÃO DE PETS
<!-- Descrever e limitar o escopo da aplicação. -->
### 2. Escopo

O sistema possui funcionalidas CRUD de cinco entidades: User, Pessoa, Pet, Doação e Adoção.

A estrutura de pastas proporciona uma otima leitura dos codigos, cada parte com sua responsabilidade.

### API:
#### Pasta config, possui os arquivos para configuração da string de conexão no .env, arquivo de conexão com os bancos de dados NoSQL, MOngoDB e Redis.
#### Pasta controller com os modulos e metodos CRUD para cada entidade.
#### Pasta middleware com o metodo middleware de atenticaçaõ com JWT.
#### Pasta models com os os esquemas para cada entidade.
#### Pasta routes com os as rotas da API usando o middleware e metodos exeto nos metodos 'All'

Frontend:
Pasta assets: com os icones da aplicação.
Pasta components: contendo arquivos de hook de components da aplicação.
Pasta router: com o arquivo de rotas dos components e restrição de metadado de autenticação.
Pasta services: contendo os arquivos responsaveis pela criação da rota com o backend e consumo das rotas da API

<!-- Apresentar restrições de funcionalidades e de escopo. -->
### 3. Restrições

  Neste trabalho não serão considerados ...

<!-- Construir alguns protótipos para a aplicação, disponibilizá-los no Github e descrever o que foi considerado. //-->
### 4. Protótipo

  Protótipos para as páginas (descrever quais páginas) foram elaborados, e podem ser encontrados em...

### 5. Referências

  Referências podem ser incluídas, caso necessário. Utilize o padrão ABNT.
