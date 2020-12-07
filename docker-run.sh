#!/bin/bash
PROJECT_NAME=primer-vue

# build a image
build() {
    docker build -t ${PROJECT_NAME}:dev .
}

# run the node
run() {
    docker run -it --rm --privileged=true \
        -p 8080:8080 \
        -v ~/source/${PROJECT_NAME}:/data \
        -w /data ${PROJECT_NAME}:dev sh
}

if [ "$1"x == "build"x ]; then
    build
fi

run
