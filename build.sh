#!/bin/bash
set -e
#VERSION=$(git rev-list HEAD --count)
VERSION='0.0.1'
docker build -t shanabunny/comic:${VERSION} .
docker push shanabunny/comic:${VERSION}

echo ${VERSION}

