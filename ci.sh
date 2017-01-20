#!/usr/bin/env bash
set -e
node test has && mocha test/has
node test noop && mocha test/noop
