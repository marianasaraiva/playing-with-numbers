# :joystick: Playing with numbers
<p align="right">
  <img src="https://img.shields.io/badge/In Progress-red?style=for-the-badge">
</p>


Desenvolvimento de aplicação Full Stack, construindo uma API para gerenciar as infomações do jogo de matemática em formato de tabuada.

## Gifs do projeto
<h3 align="center">Exemplo</h3>
<p align="center">
  <img src="" alt="Playing with numbers Gif"/>
</p>

## Back-end
### Habilidades
Construir uma API para gerenciamento de jogos, relacionando os usuários, games, avatares e ranking.

ORM
  - Desenvolver utilizando ORM: 
    - Criação e mapeamento dos entidades - Migrations, seeders and Models
    - Habilidade de associação das entidades no banco de dados
    - Utilização de métodos de queries para as models
    
MSC
  - Estruturar o back-end conforme as boas práticas seguindo a arquitetura MSC:
    - Models: Responsável por comunicar com o bando de dados
    - Services: Aplicar as regras de négocio
    - Controllers: Responsável por receber as requisições e enviar as respostas, utilizando o express.
    
Tecnologias
  - As tecnologias utilizadas foram:
    - express
    - sequelize
    - sequelize-cli
    - nodemon
    - mysql2
    - dotenv
    - cors
    - joi
    - jsonwebtoken

### O que foi desenvolvido
API para gerenciar usuários e jogos de tabuada, armazenando e fornecendo as informações relacionadas à aplicação. 

Foi desenvolvida a rota `/user` com intuito de cadastrar, editar, listar e permitir login de usuários no jogo. A rota `/login` tem a função de validar o acesso do usuário à plataforma. Além dessas, a rota `/avatar` consegue listar os avatares disponíveis para exibi-los no front-end e associar a imagem escolhida ao respectivo usuário, deixando a aplicação mais atrativa ao público alvo.

Outra rota desenvolvida foi a `/ranking` responsável por listar as pontuações de forma ordenada e realizar a inserção da pontuação ao final de cada jogo. Por fim, a rota `/game` é responsável por listar todos os jogos da aplicação ou ainda selecionar um jogo específico.

### Documentação da API
A ferramenta escolhida para documentar a API foi o Postman. Esta escolha se deu pela facilidade em compartilhar as informações dos endpoints em tempo real, uma vez que ao atualizar a aplicação localmente, os demais membros da equipe recebem essa atualização instantaneamente.

Acesse a documentação [aqui](https://documenter.getpostman.com/view/20099081/UyxgK8Ei).

## Front-end
### Habilidades
### O que foi desenvolvido

## Docker
### Habilidades
### O que foi desenvolvido

## Features

## Como acessar o projeto

## Autores
- GitHub - [Tainá Santana](https://github.com/tainnaps)
- GitHub - [Mariana Saraiva](https://github.com/marianasaraiva)
