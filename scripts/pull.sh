#!/usr/bin/env bash

for image in $(cat docker-stack.yml | envsubst | grep "image:" | awk '{ print $2 }'); do
    echo "Pull image $image"
    docker pull ${image}
done
