#!/usr/bin/env bash
set -e
npm link
npm run lint
npm run test:mocha
