# API de Doação de Sangue

## Essa é uma API desenvolvida para gerenciamento de doações de sangue, ela foi construída utilizando Node.js, MongoDB e Express.

### Funcionalidades:
    Cadastro de pessoas
    Cadastro de tipos sanguíneos
    Cadastro de locais de coleta
    Cadastro de doações
    Consulta de pessoas, tipos sanguíneos, locais de coleta e doações
    Alteração de pessoas, tipos sanguíneos, locais de coleta e doações
    Exclusão de pessoas, tipos sanguíneos, locais de coleta e doações
    
### Como começar

Para utilizar essa API, é necessário ter o Node.js e o MongoDB instalados em sua máquina. Além do servidor do Redis, caso estaja usando windows sera necessario virtuallizar uma maquina com algum sistema Linux.

Clone o repositório e execute o seguinte comando para instalar as dependências:
```
npm install
```
Inicie o MongoDB em sua máquina. Em seguida, execute o seguinte comando para iniciar a API:
```
npm start
```
A API estará disponível em http://localhost:3000/.

### Comandos úteis

#### Aqui estão alguns comandos úteis para gerenciar a API:
    Iniciar a API: npm start
    Executar testes: npm test
    Gerar relatório de cobertura de testes: npm run test:cover
    
### Rotas
    Cadastro de pessoas: POST http://localhost:3000/api/pessoas/
    Consulta de pessoas: GET http://localhost:3000/api/pessoas/
    Consulta de uma pessoa por ID: GET http://localhost:3000/api/pessoas/:id
    Alteração de uma pessoa por ID: PUT http://localhost:3000/api/pessoas/:id
    Exclusão de uma pessoa por ID: DELETE http://localhost:3000/api/pessoas/:id
    Cadastro de tipos sanguíneos: POST http://localhost:3000/api/tipos/
    Consulta de tipos sanguíneos: GET http://localhost:3000/api/tipos/
    Consulta de um tipo sanguíneo por ID: GET http://localhost:3000/api/tipos/:id
    Alteração de um tipo sanguíneo por ID: PUT http://localhost:3000/api/tipos/:id
    Exclusão de um tipo sanguíneo por ID: DELETE http://localhost:3000/api/tipos/:id
    Cadastro de locais de coleta: POST http://localhost:3000/api/local_coleta/
    Consulta de locais de coleta: GET http://localhost:3000/api/local_coleta/
    Consulta de um local de coleta por ID: GET http://localhost:3000/api/local_coleta/:id
    Consulta de um local de coleta por nome: GET http://localhost:3000/api/local_coleta/nome/:nome
    Alteração de um local de coleta por ID: PUT http://localhost:3000/api/local_coleta/:id
    Exclusão de um local de coleta por ID: DELETE http://localhost:3000/api/local_coleta/:id
    Cadastro de doações: POST http://localhost:3000/api/doacoes/
    Consulta de doações: GET http://localhost:3000/api/doacoes/
    Consulta de uma doação por ID: GET http://localhost:3000/api/doacoes/:id
    Alteração de uma doação por ID: PUT http://localhost:3000/api/doacoes/:id
    Exclusão de uma doação por ID: DELETE http://localhost:3000/api/doacoes/:id

Lembre-se de que essas rotas podem sofrer alterações dependendo de como você implementou sua estrutura de arquivos.

E é isso. Com essas informações, você já tem tudo o que precisa para começar a trabalhar com essa API. Boa sorte!
