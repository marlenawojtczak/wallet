# Linux

## FRONTEND

### Installing and running Frontend manually

#### Installation

    npm i --prefix frontend

#### Running Frontned

    npm start --prefix frontend

FRONTEND runs on [localhost:4000](localhost:4000)

### Running Frontend in Docker from Main branch

All images are stored in Docker Hub. To run frontend in Docker, you need to have Docker installed on your machine. If you do, you can simply run this command:

    docker run -d -p 4000:4000 platyna100/wallet-frontend

### Running Frontend in Docker from your local changes

#### Building Docker image

    docker build -t frontend -f frontend/Dockerfile frontend

#### Running Docker image

    docker run -d -p 4000:4000 frontend

FRONTEND runs on [localhost:4000](localhost:4000)

#### Listing all running Docker containers

    docker ps

#### Stopping and removing all Docker containers

    docker rm -f $(docker ps -a -q)

# Windows

## FRONTEND

### Installing and running Frontend manually

Unfortunately, when using Windows, you have to go from the main directory to the directory with the frontend. To do this, use the command:

    cd frontend

#### Installation

    npm i

#### Running Frontned

    npm start

FRONTEND runs on [localhost:4000](localhost:4000)

<!--
## BACKEND

INSTALATION: `npm i --prefix backend`

RUN: `npm run start:dev --prefix backend`

BACKEND runs on PORT 3000 -->
