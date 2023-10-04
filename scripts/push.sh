#!/usr/bin/env bash

docker tag wallet-frontend platyna100/wallet-frontend:latest
docker push platyna100/wallet-frontend:latest
sleep 1
