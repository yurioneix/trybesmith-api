# Trybesmith API

Projeto desenvolvido no módulo de Backend da Trybe, que consiste numa API de uma loja de itens medievais, utilizando Typescript, Express, Sequelize bem como testes com Jest, Mocha, Sinon, Chai e chai-http.

<br>

## Instalação

<details>
  <summary><strong>🐳 Especificações sobre uso do Docker</strong></summary>

> Rode os serviços `app-trybesmith` e `db` com o comando `docker-compose up -d --build`.

- Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers
- Esses serviços irão inicializar um container chamado `trybesmith_api` e outro chamado `trybesmith_db`.
- A partir daqui você pode rodar o container `trybesmith_api` via CLI ou abri-lo no VS Code.

  > Instale as dependências [**Caso existam**] com `npm install`
  > Rode o comando `npm run db:reset` para criar o banco de dados, as tabelas que serão utilizadas e populá-las.
  > Use o comando `docker exec -it trybesmith_api bash` para entrar no container.

  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Para visualizar o logs do nodemon em seu terminal use os seguintes comandos:
  > `docker ps`: para visualizar os containers ativos e pegar o `CONTAINER ID`;
  > `docker logs -f <id_do_container>`: para visualizar os logs do seu servidor com nodemon;

</details>

<br>

## Endpoints

- <strong> POST `/products` </strong>

<details>
  <summary>Cadastra novos produtos</summary>

  - O endpoint deve receber a seguinte estrutura:
    ```json
    {
      "name": "Martelo de Thor",
      "price": "30 peças de ouro",
      "orderId": 4
    }
    ```
  - As ordens dos pedidos de id 1 a 3 já foram criados pelo seeders no banco de dados, sendo assim novos produtos devem passar um novo `orderId`, pois os produtos são exclusivos.

  - O resultado retornado para cadastrar o produto com sucesso deverá ser conforme exibido abaixo, com um _status http_ `201`:

    ```json
    {
      "id": 6,
      "name": "Martelo de Thor",
      "price": "30 peças de ouro"
    }
    ```

</details>

<br>

- <strong> GET `/products`</strong>

<details>
  <summary>Lista todos os produtos cadastrados</summary>

  - O resultado retornado para listar produtos com sucesso deverá ser conforme exibido abaixo, com um _status http_ `200`:
    
    ```json
    [
      {
        "id": 1,
        "name": "Pedra Filosofal",
        "price": "20 gold",
        "orderId": null
      },
      {
        "id": 2,
        "name": "Lança do Destino",
        "price": "100 diamond",
        "orderId": 1
      }
    ]
    ```
</details>

<br>

- <strong>GET `/orders`</strong>

<details>
  <summary>Lista todos os pedidos</summary>

  - Quando houver mais de um pedido, o resultado retornado para listar pedidos com sucesso deverá ser conforme exibido abaixo, com um _status http_ `200`:

    ```json
    [
      {
        "id": 1,
        "userId": 2,
        "productIds": [1, 2]
      },
      {
        "id": 2,
        "userId": 1,
        "productIds": [3, 4]
      }
    ]
    ```

</details>

<br>

- <strong> POST `/login` </strong>

<details>
  <summary>Login de pessoas usuárias</summary>

  - O endpoint deve receber a seguinte estrutura:
    ```json
    {
      "username": "string",
      "password": "string"
    }
    ```
    
  - Se o _login_ não tiver o campo "username", o resultado retornado deverá ser um _status http_ `400` e
    ```json
    { "message": "\"username\" and \"password\" are required" }
    ```

  - Se o _login_ não tiver o campo "password", o resultado retornado deverá ser um _status http_ `400` e
    ```json
    { "message": "\"username\" and \"password\" are required" }
    ```
    
  - Se o _login_ tiver um username que não exista no banco de dados ele será considerado inválido e o resultado retornado deverá ser um _status http_ `401` e
    ```json
    { "message": "Username or password invalid" }
    ```

   - Se o login foi feito com sucesso, o resultado deverá ser um _status http_ `200` e deverá retornar um _token_ no formato abaixo (a _token_ não precisa ser exatamente igual a essa):
      ```json
        {
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
        }
      ```


</details>
