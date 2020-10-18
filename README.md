# movie-search-app

## Running the application

- to run the application .env file needs to be created to the root-directory with following content (see .env-example)

```
  OMDB_API_KEY=<api-key>
  NYT_API_KEY=<api-key>
  API_SERVER_PORT=3000
  UI_SERVER_PORT=3400
```

- the application can be started with a command: `docker-compose up`
- this will start two Docker containers `movies.ui` and `movies.api` in production mode.

## Implementation

- Backend is implemented using [NestJs](https://nestjs.com/) framework. Implementation can be found backend-folder. Refer to [README.md](./backend/README.md) in this folder for more details.

- UI is implemented using [React](https://reactjs.org/) library and the app is bootstrapped with [create-react-app](https://create-react-app.dev/). Implementation can be found from the frontend -folder. Refer to [README.md](./frontend/README.md) in this folder for more details.
