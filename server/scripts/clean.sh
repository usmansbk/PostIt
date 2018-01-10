#!/usr/bin/env sh

## Make required build directories
if test -d ./server/build;
then
  rm -r server/build
fi
mkdir server/build
cd server/build
mkdir bin controllers helpers middlewares routes
mkdir routes/api
cd ../../
