#!/usr/bin/env bash

docker stack rm wallet
sleep 10
docker stack deploy -c docker-stack.yaml wallet --prune --with-registry-auth
