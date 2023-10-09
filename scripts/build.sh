#!/usr/bin/env bash

for folder in services/*; do
    if [[ -f ${folder}/Dockerfile ]]; then
        container=$(basename "${folder}")

        docker build -t "${container}" -f "${folder}"/Dockerfile .
    fi
done
