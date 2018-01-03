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

## Transpile src/ codes to build/
./node_modules/.bin/babel server/src --out-dir server/build
./node_modules/.bin/babel server/src/bin/www --out-file server/build/bin/www

## Set environment variables for local development
export NODE_ENV=development
export DEV_DB_USERNAME=usman
export DEV_DB_PASSWORD=null
export DEV_DB_NAME=postit_dev
export DEV_DB_HOSTNAME='127.0.0.1'
export DEV_DB_PORT=5432
export JASMINE_CONFIG_PATH=server/tests/spec/support/jasmine.json
