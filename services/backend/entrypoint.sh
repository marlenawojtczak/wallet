#!/bin/bash

if [[ -d "/run/secrets" ]]; then
    mapfile -t secrets < <(ls /run/secrets)

    for name in "${secrets[@]}"
    do
        secret="/run/secrets/${name}"
        if [[ -f ${secret} ]]; then
            value=$(cat "${secret}")
            export "${name}"="${value}" && \
            printf "\nexport %s=%s\n" "${name}" "${value}" >> ~/.bashrc
        fi
    done
fi

exec "$@"
