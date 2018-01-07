#!/usr/bin/env sh

## Set evnironment variable for CI
export NODE_ENV=test
export TEST_DB_USERNAME=postgres
export TEST_DB_PASSWORD=null
export TEST_DB_NAME=postit_test
export CODECLIMATE_REPO_TOKEN=b95782ae5d24665d875eca8e39db4206a35ac1ec33c4e57c660c6956cbe443e7

## Set environment variables for local development
export DEV_DB_USERNAME=usman
export DEV_DB_PASSWORD=null
export DEV_DB_NAME=postit_dev
export DEV_DB_HOSTNAME='127.0.0.1'

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
