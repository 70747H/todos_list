## Description

[Express](https://expressjs.com/) framework TypeScript todos app repository with in-memory storage, auth0, and docker.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run dev

# docker
$ docker build . -t todos-express-typescript-auth0-docker
$ docker run -p 3002:3002  todos-express-typescript-auth0-docker:latest
```

## Test

```
open postman folder
import environment file
import collection file

there's two users with their credentials inside the environment variables,
each with different role jhon: admin and harry: user.
```

## Stay in touch

- Author - Hussien Abdulrazek
- [Linkedin](https://www.linkedin.com/in/hussien-abdulrazek-3963b619a/)

## License

Repo is [MIT licensed](LICENSE).
