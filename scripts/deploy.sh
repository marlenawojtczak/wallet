#!/usr/bin/env bash

docker stack rm wallet
docker stack deploy -c docker-stack.yml wallet --prune --with-registry-auth
