#!/usr/bin/env bash

for folder in services/*; do
    if [[ -f ${folder}/Dockerfile ]]; then
        container=$(basename "${folder}")

        docker tag "${container}" platyna100/"${container}":stack
        docker push platyna100/"${container}":stack
    fi
done
