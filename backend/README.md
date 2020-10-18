# movie-app-backend

Backend is implemented using [NestJs](https://nestjs.com/) framework, which uses ExpressJs under the hood.

## To start backend in dev-mode

Create an environment file to `../.env`.

This file should have following content (see to .env-example)

```
  OMDB_API_KEY=<api-key>
  NYT_API_KEY=<api-key>
  API_SERVER_PORT=3000
  UI_SERVER_PORT=3400
```

To start developing run:

```
  npm install
  npm run start:dev
```

## Used third party APIs

OMDB API: ​http://www.omdbapi.com/

NYT API: ​https://developer.nytimes.com/docs/movie-reviews-api/1/overview
