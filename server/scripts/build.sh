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
./node_modules/.bin/babel server/src/server.js --out-file server/build/server.js
./node_modules/.bin/babel server/src/bin/www --out-file server/build/bin/www
./node_modules/.bin/babel server/src/controllers --out-dir server/build/controllers
./node_modules/.bin/babel server/src/middlewares --out-dir server/build/middlewares
./node_modules/.bin/babel server/src/helpers --out-dir server/build/helpers
./node_modules/.bin/babel server/src/routes --out-dir server/build/routes

## Set environment variables for development
export NODE_ENV=development
export DEV_DB_USERNAME=usman
export DEV_DB_PASSWORD=null
export DEV_DB_NAME=postit_dev
export DEV_DB_HOSTNAME='127.0.0.1'
export DEV_DB_PORT=5432
