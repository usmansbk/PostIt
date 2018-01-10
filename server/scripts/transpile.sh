#!/usr/bin/env sh

## Transpile src/ codes to build/
./node_modules/.bin/babel server/src --out-dir server/build
./node_modules/.bin/babel server/src/bin/www --out-file server/build/bin/www
