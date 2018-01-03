#!/usr/bin/env sh
rm -r build
mkdir build
cd build
mkdir bin controllers helpers middlewares routes
mkdir routes/api

cd ../

./node_modules/.bin/babel src/server.js --out-file build/server.js
./node_modules/.bin/babel src/bin/www --out-file build/bin/www
./node_modules/.bin/babel src/controllers --out-dir build/controllers
./node_modules/.bin/babel src/middlewares --out-dir build/middlewares
./node_modules/.bin/babel src/helpers --out-dir build/helpers
./node_modules/.bin/babel src/routes --out-dir build/routes
