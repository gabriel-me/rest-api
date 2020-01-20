# API RESTful

Uma API RESTful de usuários (sign in/sign up) escrito em NodeJS

## Pré requisitos

- Git (https://git-scm.com)
- Node (https://nodejs.org)

## Desafios propostos

#### Obrigatórios

- ✔️ Persistência de dados
- ✔️ Gestão de dependências via gerenciador de pacotes (npm)
- ✔️ Utilização de Eslint
- ✔️ API em Express, Hapi ou similares.
- ✔️ Utilizar banco NoSQL

#### Desejáveis

- ✔️ JWT como token
- ❌ Testes unitários
- ✔️ Criptografia não reversível (hash) na senha e no token
- ✔️ MongoDB

## Iniciando MongoDB

- `mongod`

## Instalando/Iniciando aplicação

- `git clone https://github.com/gabriel-me/rest-api.git`
- `cd rest-api`
- `npm install`
- `npm start`

## Endpoints

### Login `POST`
```
http://localhost:8082/api/authenticate
```
HEADERS
```
Content-Type: application/json
```
BODY
```json
{
	"email": "gabriel.marquesdesouza28@qgmail.com",
	"password": "2a1sd2qwe12qwe"
}
```

### Adicionar usuário `POST`
```
http://localhost:8082/api/users
```
HEADERS
```
Content-Type: application/json
```
BODY
```json
{
	"name": "Gabriel Marques de Souza",
	"email": "gabriel.marquesdesouza28@gmail.com",
	"password": "as2d1qwe1qw2e1",
	"phones": [
		{
			"ddd": "18",
			"number": "996635011"
		}
	]
}
```

### Selecionar usuário `GET`
```
http://localhost:8082/api/users/:id
```
HEADERS
```
Content-Type: application/json
Authentication: token
```