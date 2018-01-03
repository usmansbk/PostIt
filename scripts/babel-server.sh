#!/usr/bin/env sh
cd server
mkdir build
cd build
mkdir bin controllers helpers middlewares routes
mkdir routes/api

cd ../..

./node_modules/.bin/babel server/src/server.js --out-file server/build/server.js
./node_modules/.bin/babel server/src/bin/www --out-file server/build/bin/www
./node_modules/.bin/babel server/src/controllers --out-dir server/build/controllers
./node_modules/.bin/babel server/src/middlewares --out-dir server/build/middlewares
./node_modules/.bin/babel server/src/helpers --out-dir server/build/helpers
./node_modules/.bin/babel server/src/routes --out-dir server/build/routes
