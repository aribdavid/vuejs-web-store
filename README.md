# como Rodar com o Docker

digite o comando abaixo para criar a imagem a partir do Dockerfile:

`docker build -t vuejs-web-store/docker-app .`

rode a aplicação a partir de um container docker:

`docker run -it -p 8080:8080 --rm --name docker-vuejs-app vuejs-web-store/docker-app` 

## Acessar aplicação com deploy feito no heroku

https://vuejs-web-store.herokuapp.com/


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
