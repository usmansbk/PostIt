#!/bin/sh
rm -rf ./server/build && mkdir ./server/build
./node_modules/.bin/babel ./server/source -d ./server/build
