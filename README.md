# API de Blog

## Descrição
Este projeto consiste no desenvolvimento de uma API e um banco de dados para a produção de conteúdo para um blog. A aplicação foi desenvolvida em Node.js utilizando o pacote Sequelize para realizar operações CRUD (Create, Read, Update, Delete) de posts.

## Funcionalidades
- **CRUD de Posts**: Criação, leitura, atualização e exclusão de posts.
- **Autenticação de Usuários**: Criação de usuários e login para autenticação.
- **Gerenciamento de Categorias**: Criação e gerenciamento de categorias, permitindo a categorização de posts.
- **Relação entre Usuários e Posts**: Cada post está associado a um usuário.
- **Relação entre Posts e Categorias**: Posts podem ser associados a múltiplas categorias e vice-versa.

## Tecnologias Utilizadas
- Node.js
- Express.js
- Sequelize (ORM)
- MYSQL (ou outro banco de dados SQL de sua escolha)
- JWT (JSON Web Tokens) para autenticação

## Instalação e Execução
1. Clone este repositório: `git clone git@github.com:GabrielReis1/Blogs-api.git`
2. Instale as dependências: `npm install`
3. Configure o banco de dados no arquivo `.env`:
    ```
    DB_HOST=localhost
    DB_USER=seu-usuario
    DB_PASS=sua-senha
    DB_NAME=nome-do-banco
    JWT_SECRET=sua-chave-secreta
    ```
4. Rode os serviços `node` e `db` com o comando `docker-compose up -d --build`.

  - Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers;

  - Esses serviços irão inicializar um container chamado `blogs_api` e outro chamado `blogs_api_db`;

  - A partir daqui você pode rodar o container `blogs_api` via CLI ou abri-lo no VS Code;

  > :information_source: Use o comando `docker exec -it blogs_api bash`.

  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > :information_source: Instale as dependências [**Caso existam**] com `npm install`. (Instale dentro do container)
  
  - **:warning: Atenção:** Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 

  - **:warning: Atenção:** Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

  - ✨ **Dica:** A extensão `Remote - Containers` (que estará na seção de extensões recomendadas do VS Code) é indicada para que você possa desenvolver sua aplicação no container Docker direto no VS Code, como você faz com seus arquivos locais.
5. Execute as migrações do Sequelize para criar as tabelas no banco de dados: `npx sequelize db:migrate`
  <br />

## Endpoints
### Usuários
- **POST /users**: Cria um novo usuário.
  O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "displayName": "Nome Ficticio",
    "email": "nomeficticio@email.com",
    "password": "123456",
    "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
    // a imagem não é obrigatória
  }
  ```
- **POST /login**: Autentica um usuário e retorna um token JWT.
  O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "email": "nomeficticio@email.com",
    "password": "123456"
  }
  ```
   - Se o user for criado com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `201`:
    ```json
      {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
      }
      ```

### Posts
- **GET /posts**: Lista todos os posts. :warning: ainda não foi implementado
- **GET /posts/:id**: Obtém um post pelo ID. :warning: ainda não foi implementado
- **POST /posts**: Cria um novo post (requer autenticação).
  O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key",
    "categoryIds": [1, 2]
  }
  ```
  <br/
    > :warning: No Headers da requisição devera conter o Authorization com o token gerado ao fazer login.

- **PUT /posts/:id**: Atualiza um post pelo ID (requer autenticação). :warning: ainda não foi implementado
- **DELETE /posts/:id**: Deleta um post pelo ID (requer autenticação). :warning: ainda não foi implementado

### Categorias
- **GET /categories**: Lista todas as categorias.
- Ao listar categorias com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:
    ```json
    [
      {
          "id": 1,
          "name": "Inovação"
      },
      {
          "id": 2,
          "name": "Escola"
      },

      /* ... */
    ]
    ```
    
    > :warning: No Headers da requisição devera conter o Authorization com o token gerado ao fazer login.


- **POST /categories**: Cria uma nova categoria (requer autenticação).

- O corpo da requisição deverá seguir o formato abaixo:
    ```json
    {
        "name": "Typescript"
    }
    ```
    
    > :warning: No Headers da requisição devera conter o Authorization com o token gerado ao fazer login.

## Relações
- **User-Posts**: Um usuário pode ter vários posts, e cada post pertence a um único usuário.
- **Posts-Categories**: Um post pode ter várias categorias, e uma categoria pode estar associada a vários posts.
