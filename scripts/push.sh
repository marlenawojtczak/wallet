#!/usr/bin/env bash

for folder in services/*; do
    if [[ -f ${folder}/Dockerfile ]]; then
        container=$(basename "${folder}")

        docker tag wallet-"${container}" platyna100/wallet-"${container}":figma
        docker push platyna100/wallet-"${container}":figma
    fi
done
