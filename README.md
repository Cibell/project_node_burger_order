
# 💻 Projeto Node.Js Api

<img src="https://github.com/Cibell/project_node_burguer_order/blob/master/assetes/node1.png?raw=true?raw=true" width= "400px;" height="350px"/> <img src="https://github.com/Cibell/project_node_burguer_order/blob/master/assetes/node2.png?raw=true?raw=true?raw=true" width= "400px;" height="350px"/>


## :white_check_mark: Requirementos ##

Antes de você começar precisa ter o [Git](https://git-scm.com) e [Node](https://nodejs.org/en/) instalado.


# :computer: Tecnologias

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Node.Js](https://nodejs.org/en/)

## :checkered_flag: Iniciando ##

```bash
# Clone this project
$ git clone https://github.com/Cibell/project_node_burguer_order.git
# Access
 cd movies
# Install dependencies
$ yarn or npm 
# Run the project
$ yarn dev or npm run dev 
# The server will initialize in the <http://localhost:3000>
```
<br><br>
# 🚀 Regras do desafio

Crie uma aplicação que fará o cadastro dos pedidos de uma hamburgueria, e você deve utilizar Node e Express.

Rotas
POST /order: A rota deve receber o pedido do cliente, o nome do cliente e o valor do pedido, essas informações devem ser passadas dentro do corpo(body) da requisição, e com essas informações você deve registrar o novo pedido dentro de um array no seguinte formato: { id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8", order: "X- Salada, 2 batatas grandes, 1 coca-cola", clientName:"José", price: 44.50, status:"Em preparação" }. Não se esqueça que o ID deve ser gerado por você, dentro do código utilizando UUID V4, assim que o pedido é criado, você deve sempre colocar o status como "Em preparação".

GET /order: Rota que lista todos os pedidos já feitos.

PUT /order/:id: Essa rota deve alterar um pedido já feito. Pode alterar,um ou todos os dados do pedido.O id do pedido deve ser enviado nos parâmetros da rota.

DELETE /order/:id: Essa rota deve deletar um pedido já feito com o id enviado nos parâmetros da rota.

GET /order/:id: Essa rota recebe o id nos parâmetros e deve retornar um pedido específico.

PATCH /order/:id: Essa rota recebe o id nos parâmetros e assim que ela for chamada, deve alterar o status do pedido recebido pelo id para "Pronto".

Exemplo
Se eu chamar a rota POST /order repassando { order: "X- Salada, 2 batatas grandes, 1 coca-cola", clienteName:"José", price: 44.50 }, o array deve ficar assim:

[
  {
    id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8",
    order: "X- Salada, 2 batatas grandes, 1 coca-cola",
    clienteName:"José", 
    price: 44.50,
    status:"Em preparação"
  }
];
Se eu chamar a rota PATCH /order/ac3ebf68-e0ad-4c1d-9822-ff1b849589a8, o array deve ficar assim:

[
  {
    id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8",
    order: "X- Salada, 2 batatas grandes, 1 coca-cola",
    clienteName:"José", 
    price: 44.50,
    status:"Pronto"
  }
];
Middlewares
Crie um middleware que será utilizado em todas rotas que recebem o parâmetro ID, então ele deve verificar se o ID passado existe. Se não existir retorne um erro, caso contrário permita a requisição continuar normalmente;

Crie um middleware que é chamado em todas requisições que tenha um console.log que mostra o método da requisiçao(GET,POST,PUT,DELETE, etc) e também a url da requisição.

Exemplo
[GET] - /order


# :closed_book: Licença

Lançado em 2022. Este projeto está sob a ![APM](https://img.shields.io/apm/l/dev)<br>
Made with love by [Cibele Cordeiro](https://github.com/Cibell) 💜🚀



