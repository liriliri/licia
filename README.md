[中文](README_CN.md)

# Licia

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![License][license-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/licia.svg
[npm-url]: https://npmjs.org/package/licia
[travis-image]: https://img.shields.io/travis/liriliri/licia.svg
[travis-url]: https://travis-ci.org/liriliri/licia
[license-image]: https://img.shields.io/npm/l/licia.svg

[Licia](https://licia.liriliri.io/) is a utility library that focus on getting daily works done. Unlike other libraries such as underscore, mout, which strictly separates its functions into several categories like array, string and function etc, licia is just a deadly simple collection of over 300 micro modules dealing problems in different aspects. For example, dom manipulation, cookies, class creation, template, date format, ajax, url, event emitter and a bunch more, even Promise.

## Benefits

The library focus on getting things done, especially for mobile web development. You don’t need to use Zepto since there is a dom module with jQuery coding style. You don’t need to include a cookie library because a cookie module is already there. You don’t need moment, a dateFormat is good enough to handle most date related work. No need for Promise polyfill because there is already one. Same reason for micro event emitter libs. Ajax is not needed since we have not only ajax but also its Promise version fetch. You don’t need to include underscore anymore just because you want to use its shuffle function. As for mkdirp, the module that has many dependents in npm, there is no need for you to install it into your node_modules folder over and over again…

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