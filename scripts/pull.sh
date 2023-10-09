#!/usr/bin/env bash

for image in $(cat docker-stack.yaml | envsubst | grep "image:" | awk '{ print $2 }'); do
    echo "Pull image $image"
    docker pull ${image}
done
