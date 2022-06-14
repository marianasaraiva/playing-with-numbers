# :joystick: Playing with numbers
<p align="right">
  <img src="https://img.shields.io/badge/In Progress-red?style=for-the-badge">
</p>


Desenvolvimento de aplicação Full Stack, construindo uma API para gerenciar as infomações do jogo de matemática em formato de tabuada.

## Imagem tela inicial do projeto
<h3 align="center">Tela inicial</h3>
<p align="center">
  <img src="https://github.com/marianasaraiva/playing-with-numbers/blob/styles/front-end/src/image/InitialScreen.png" alt="Playing with numbers Gif"/>
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
    - Express
    - Sequelize
    - Sequelize-cli
    - Nodemon
    - Mysql2
    - Dotenv
    - Cors
    - Joi
    - Jsonwebtoken

### O que foi desenvolvido
API para gerenciar usuários e jogos de tabuada, armazenando e fornecendo as informações relacionadas à aplicação. 

Foi desenvolvida a rota `/user` com intuito de cadastrar, editar, listar e permitir login de usuários no jogo. A rota `/login` tem a função de validar o acesso do usuário à plataforma. Além dessas, a rota `/avatar` consegue listar os avatares disponíveis para exibi-los no front-end e associar a imagem escolhida ao respectivo usuário, deixando a aplicação mais atrativa ao público alvo.

Outra rota desenvolvida foi a `/ranking` responsável por listar as pontuações de forma ordenada e realizar a inserção da pontuação ao final de cada jogo. Por fim, a rota `/game` é responsável por listar todos os jogos da aplicação ou ainda selecionar um jogo específico.

### Documentação da API
A ferramenta escolhida para documentar a API foi o Postman. Esta escolha se deu pela facilidade em compartilhar as informações dos endpoints em tempo real, uma vez que ao atualizar a aplicação localmente, os demais membros da equipe recebem essa atualização instantaneamente.

Acesse a documentação [aqui](https://documenter.getpostman.com/view/20099081/UyxgK8Ei).

## Front-end
### Habilidades
Criar a interface do usuário para o jogo, consumindo as informações oriundas da API.

Tecnologias
  - As tecnologias utilizadas foram:
    - React Native
    - Axios
    - Expo
    - React-navigation
    - Context API

### O que foi desenvolvido
App desenvolvido em **React Native**, abordando as 4 operações (soma, subtração, divisão e multiplicação) para a alfabetização de crianças, de forma criativa e lúdica para envolver este público no universo da matemática, gerando interesse e aprendizado.

Na tela `home` é possível escolher a opção de logar ou registrar-se, caso a criança ainda não tenha sido cadastrado. Na tela `login` a criança loga e o sistema realiza as validações  das informações fornecidas, `nickname` e `password`, para gerar o acesso ao game. Após receber o acesso, a criança pode escolher qual operação deseja treinar, levando para jogo em si, na tela `play`. Esta é composta por 10 desafios e ao finalizar a criança recebe um feedback do seu desempenho, pontuando 10 caso seja acerte todas os desafios ou -5 caso erre ou deixe de preencher algum. Neste momento, ela pode optar por reiniciar uma nova partida ou ser direcionada a tela de `ranking`. 

## Docker
### Habilidades
Criar orquestração de containers para facilitar o desenvolvimento e garantir o mesmo ambiente para criação e execução do jogo.

### O que foi desenvolvido
Criação de um arquivo `docker-compose.yml` contendo 3 serviços:
  - `mysql`: banco de dados utilizado pela aplicação.
  - `back-end`: api que controla o acesso do front-end ao banco de dados.
  - `front-end`: interface que relaciona a interação do usuário com a api e banco de dados.

:warning: A porta mapeada pelo serviço de front-end utilizida para o mobile é 19000 e para web é 19006.

## Features
As features programadas são: 
  - Verificar lógica relacionada as operações de subtração e divisão.
  - Implementação do sistema de pontuação e a tela do `ranking`.

## Como acessar o projeto
Abrir o terminal e digitar as informações na sequência:
- Realizar o clone do projeto: 
  - SSH: `git clone git@github.com:marianasaraiva/playing-with-numbers.git`
  - HTTPS: `git clone https://github.com/marianasaraiva/playing-with-numbers.git`

- Ter o ambiente configurado para utilização de docker:
  - `docker-compose up`
 
- Escolher a forma de acesso do app.
  - Mobile: ter o aplicativo **Expo Go** no celular e escanear o QR code que aparece no terminal
  - Web: acessar pelo browser o endereço `localhost:19006`

## Autores
- GitHub - [Tainá Santana](https://github.com/tainnaps)
- GitHub - [Mariana Saraiva](https://github.com/marianasaraiva)
