#!/usr/bin/env bash

for folder in services/*; do
    if [[ -f ${folder}/Dockerfile ]]; then
        container=$(basename "${folder}")

        docker tag wallet-"${container}" platyna100/wallet-"${container}":stack
        docker push platyna100/wallet-"${container}":stack
    fi
done
