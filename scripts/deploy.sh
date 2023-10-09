#!/usr/bin/env bash

docker stack rm wallet
docker stack deploy -c docker-stack.yaml wallet --prune --with-registry-auth
