# Licia

[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Test coverage][codecov-image]][codecov-url]
[![Size][size-image]][npm-url]
[![License][license-image]][npm-url]
[![Join the chat at https://gitter.im/liriliri/licia][gitter-image]][gitter-url]

[gitter-image]: https://img.shields.io/gitter/room/liriliri/licia?style=flat-square
[gitter-url]: https://gitter.im/liriliri/licia?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge
[npm-image]: https://img.shields.io/npm/v/licia?style=flat-square 
[npm-url]: https://npmjs.org/package/licia
[ci-image]: https://img.shields.io/github/actions/workflow/status/liriliri/licia/main.yml?branch=master&style=flat-square
[ci-url]: https://github.com/liriliri/luna/actions/workflows/main.yml
[codecov-image]: https://img.shields.io/codecov/c/github/liriliri/licia?style=flat-square
[codecov-url]: https://codecov.io/github/liriliri/licia?branch=master
[license-image]: https://img.shields.io/npm/l/licia?style=flat-square
[size-image]: https://img.shields.io/bundlephobia/minzip/licia?style=flat-square

Licia 是一套在开发中实践积累起来的实用 JavaScript 工具库。该库目前拥有超过 400 个模块，包括 Dom 操作，cookie 设置，类创建，模板函数，日期格式化等实用模块，同时配套有打包工具 Eustia 进行定制化，使JS脚本加载量缩减在 10KB 以下，极大优化移动端页面的加载速度。

目前拥有的所有模块可[点此](https://licia.liriliri.io/docs_cn.html)查看。

## 开发背景

Licia 从一开始就不是为了单纯地替代 underscore 或 lodash 而生。它的目标是提供一系列在日常开发中使用率较高的 JavaScript 模块。因此，每一个新加入的模块都是在项目中实际使用到时才被添加进去。当前已经累积 400+ 模块，而且还在不断更新中，已经可以满足移动端日常开发的绝大部分需求。

你不再需要引入 zepto 了，因为已经有个类 jQuery 的模块了；不再需要引入 cookie 库了，因为已经有 cookie 操作模块了；不再需要 moment 了，因为有个 dateFormat 可以满足大部分格式化需求了；不再需要引入Promise pollyfill，因为已经有个通过 Promise A+ 测试的 Promise 库了；不再需要引入 EventEmitter 库了，因为已经有了；不再需要引入 ajax 库了，因为有 ajax，而且还有 fetch；不再需要引入 underscore，仅仅是为了使用一个打乱数组的 shuffle 函数；还有那个引用数奇高的mkdirp 模块，再也不需要再把它装到 node_modules 里去了……

## 使用方法

安装 **licia** 模块然后直接引用。

```bash
npm i licia --save
```

```javascript
var uuid = require('licia/uuid');

console.log(uuid()); // -> 0e3b84af-f911-4a55-b78a-cedf6f0bd815
```


需要 es 模块版本以支持 tree-shaking，可以使用 [licia-es](https://www.npmjs.com/package/licia-es)。你也可以直接使用在线工具进行自定义工具库的生成，请[点此](https://licia.liriliri.io/builder.html)查看使用。

## 在小程序中使用

### 使用 npm 安装

1、 安装 npm 包

```bash
npm i miniprogram-licia --save
```

2、点击开发者工具中的菜单栏：工具 --> 构建 npm

3、直接在代码中引入使用

```javascript
const licia = require('miniprogram-licia');

licia.md5('licia'); // -> 'e59f337d85e9a467f1783fab282a41d0'
licia.safeGet({a: {b: 1}}, 'a.b'); // -> 1
```

### 生成定制化 util.js

使用 npm 包的方式会将所有功能引入到代码包中，大概会增加 100 kb 的大小。如果你只想引入所需脚本，可以使用在线工具生成定制化 util 库。

1、访问 [https://licia.liriliri.io/builder.html](https://licia.liriliri.io/builder.html)

2、输入需要的模块名，点击生成下载 util.js。

3、将生成的工具库拷贝到小程序项目任意目录下然后直接引入使用。

```javascript
const util = require('../lib/util');

util.wx.getStorage({
  key: 'test'
}).then(res => console.log(res.data));
```