#!/usr/bin/env sh
rm -r build
mkdir build
cd build
mkdir bin controllers helpers middlewares routes
mkdir routes/api

cd ../..

./node_modules/.bin/babel src/server.js --out-file server/build/server.js
./node_modules/.bin/babel src/bin/www --out-file server/build/bin/www
./node_modules/.bin/babel src/controllers --out-dir server/build/controllers
./node_modules/.bin/babel src/middlewares --out-dir server/build/middlewares
./node_modules/.bin/babel src/helpers --out-dir server/build/helpers
./node_modules/.bin/babel src/routes --out-dir server/build/routes
