#!/usr/bin/env bash
set -e
npm run lint
npm run test:mocha
npm run test:sauce