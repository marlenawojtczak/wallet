#!/usr/bin/env bash

for folder in services/*; do
    if [[ -f ${folder}/Dockerfile ]]; then
        container=$(basename "${folder}")

        docker tag "${container}" alframi410/"${container}":stack
        docker push alframi410/"${container}":stack
    fi
done
