#!/usr/bin/env bash

for folder in services/*; do
    if [[ -f ${folder}/Dockerfile ]]; then
        container=$(basename "${folder}")

        docker tag wallet_"${container}" platyna100/wallet_"${container}":stack
        docker push platyna100/wallet_"${container}":stack
    fi
done
