[中文](README_CN.md)

# Licia

[![Join the chat at https://gitter.im/liriliri/licia][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![License][license-image]][npm-url]

[gitter-image]: https://badges.gitter.im/liriliri/licia.svg
[gitter-url]: https://gitter.im/liriliri/licia?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge
[npm-image]: https://img.shields.io/npm/v/licia.svg
[npm-url]: https://npmjs.org/package/licia
[travis-image]: https://img.shields.io/travis/liriliri/licia.svg
[travis-url]: https://travis-ci.org/liriliri/licia
[codecov-image]: https://codecov.io/github/liriliri/licia/coverage.svg?branch=master
[codecov-url]: https://codecov.io/github/liriliri/licia?branch=master
[license-image]: https://img.shields.io/npm/l/licia.svg

[Licia](https://licia.liriliri.io/) is a utility library that focus on getting daily works done. Unlike other libraries such as underscore, mout, which strictly separates its functions into several categories like array, string and function etc. licia is just a deadly simple collection of over 400 micro modules dealing problems in different aspects. 

## Benefits

Installing one library brings you tons of useful utilities: 

* A dom module with jQuery coding style. 
* A cookie library. 
* dateFormat that is good enough to handle most date related work.
* A Promise polyfill. 
* A micro event emitter library. 
* Ajax and its Promise version fetch.
* Useful functions from underscore, such as shuffle, unique. 
* mkdir, like mkdirp the module that has many dependents in npm.
* ...

## Usage

Just install **licia** and use it like any other npm utility modules such as lodash.

```bash
npm i licia --save
```

```javascript
const uuid = require('licia/uuid');

console.log(uuid()); // -> 0e3b84af-f911-4a55-b78a-cedf6f0bd815
```

There is also an online tool to build a customized utility library, check [here](https://licia.liriliri.io/builder.html).

## Contribution

Read [Contributing Guide](.github/CONTRIBUTING.md) for development setup instructions.