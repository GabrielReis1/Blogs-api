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

## Orientações
 
  **:warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**


  > :information_source: Rode os serviços `node` e `db` com o comando `docker-compose up -d --build`.

  - Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers;

  - Esses serviços irão inicializar um container chamado `blogs_api` e outro chamado `blogs_api_db`;

  - A partir daqui você pode rodar o container `blogs_api` via CLI ou abri-lo no VS Code;

  > :information_source: Use o comando `docker exec -it blogs_api bash`.

  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > :information_source: Instale as dependências [**Caso existam**] com `npm install`. (Instale dentro do container)
  
  - **:warning: Atenção:** Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 

  - **:warning: Atenção:** O **git** dentro do container não vem configurado com suas credenciais. Ou faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

  - **:warning: Atenção:** Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

  - ✨ **Dica:** A extensão `Remote - Containers` (que estará na seção de extensões recomendadas do VS Code) é indicada para que você possa desenvolver sua aplicação no container Docker direto no VS Code, como você faz com seus arquivos locais.

  <br />

## Endpoints
### Usuários
- **POST /users**: Cria um novo usuário.
- **POST /login**: Autentica um usuário e retorna um token JWT.

### Posts
- **GET /posts**: Lista todos os posts.
- **GET /posts/:id**: Obtém um post pelo ID. :warning: ainda não foi implementado
- **POST /posts**: Cria um novo post (requer autenticação). :warning: ainda não foi implementado
- **PUT /posts/:id**: Atualiza um post pelo ID (requer autenticação). :warning: ainda não foi implementado
- **DELETE /posts/:id**: Deleta um post pelo ID (requer autenticação). :warning: ainda não foi implementado

### Categorias
- **GET /categories**: Lista todas as categorias.
- **POST /categories**: Cria uma nova categoria (requer autenticação).

## Relações
- **User-Posts**: Um usuário pode ter vários posts, e cada post pertence a um único usuário.
- **Posts-Categories**: Um post pode ter várias categorias, e uma categoria pode estar associada a vários posts.
