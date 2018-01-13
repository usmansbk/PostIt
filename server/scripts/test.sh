#!/bin/sh

nyc --reporter=lcov --reporter=text-lcov jasmine JASMINE_CONFIG_PATH=server/tests/spec/support/jasmine.json
