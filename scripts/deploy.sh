#!/usr/bin/env bash

docker rm $(docker ps -aq) --force
sleep 10
docker run -d -p 4000:4000 platyna100/wallet-frontend
