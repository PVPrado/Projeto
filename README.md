# ⚽ Projeto Trybe Futebol Clube 

O projeto é fullstack e representa uma simulação de uma tabela de um campeonato de futebol.

# 🔥 Visão Geral

O projeto aborda os conceitos de **API Rest** com CRUD completo em **TypeScript**, com utilização da ORM **Sequelize**, além de construir o projeto de acordo com o paradigma de orientação a objetos (**POO**) e **SOLID**. **Docker** para rodar o frontend, backend e database, separados e utilizando a arquitetura **MSC**.

# 🔨 Tecnologias

- Ambiente de execução: **NodeJS**
- Linguagem de programação: **TypeScript**
- Framework: **Express**
- ORM (Object-Relational Mapping): **Sequelize**
- Contêineres: **Docker**

# 🛠️ Instalação

Para utilizar ou testar este projeto, siga os passos abaixo:

Clone o repositório para o seu ambiente local:

```bash
git clone git@github.com:PVPrado/Projeto-TFC
```

Navegue até o diretório do projeto:

```bash
cd Projeto-TFC
```

Entre na parte de backend do projeto:

```bash
cd ./app/backend
```
Instale todas as dependências com o comando:

```bash
npm install
```

Inicie o projeto com o comeando: 

```bash
docker compose up -d
```

Para rodar os testes use:

```bash
npm run test
```

Para rodar os testes criados:

```bash
cd ./app/backend/ && npm run test:coverage
```
