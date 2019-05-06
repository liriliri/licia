# Licia

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![License][license-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/licia.svg
[npm-url]: https://npmjs.org/package/licia
[travis-image]: https://img.shields.io/travis/liriliri/licia.svg
[travis-url]: https://travis-ci.org/liriliri/licia
[license-image]: https://img.shields.io/npm/l/licia.svg

Licia 是一套在开发中实践积累起来的实用 JavaScript 工具库。该库目前拥有超过 300 个模块，包括 Dom 操作，cookie 设置，类创建，模板函数，日期格式化等实用模块，同时配套有打包工具 Eustia 进行定制化，使JS脚本加载量缩减在 10KB 以下，极大优化移动端页面的加载速度。

目前拥有的所有模块可[点此](https://licia.liriliri.io/module_cn.html)查看。

## 开发背景

Licia 从一开始就不是为了单纯地替代 underscore 或 lodash 而生。它的目标是提供一系列在日常开发中使用率较高的 JavaScript 模块。因此，每一个新加入的模块都是在项目中实际使用到时才被添加进去。当前已经累积 300+ 模块，而且还在不断更新中，已经可以满足移动端日常开发的绝大部分需求。

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

你也可以直接使用在线工具进行自定义工具库的生成，请[点此](https://eustia.liriliri.io/builder.html)查看使用。

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

## 提交新模块

在无法找到所需模块的情况下，你可以发起 issue 建议或者自己添加模块合并到该项目中去。

关于如何编写模块，请查看[Eustia文档](https://eustia.liriliri.io/docs.html#create-module)中的相关说明。

### 基本原则

每个模块都必须满足以下几点要求：

* 必须有详细的使用说明文档（英文，格式参考其它已有模块）。
* 必须有单元测试。
* 必须有 typescript 定义。
* 必须指明运行环境，node，浏览器或全部。
* 模块名只能包含 **a-zA-Z0-9$** 等字符。
* 不能存在功能高度相似的模块，例如不能添加 leftPad 模块因为已经有模块 lpad 了。
* 模块可以依赖其它模块，但所有代码都必须写在一个文件，不能超过 500 行，包括使用说明和空行。

### 怎么添加

* Fork 该仓库。
* `npm i && npm link`将 **licia** 命令行工具添加到系统中。
* 创建一个文件名为模块名的 js 文件，还有相应的单元测试文件，以 test.js 结尾。
* 编写模块代码，使用文档（顶部块注释，Markdown 格式）和单元测试。
* `licia test <module-name>`执行测试。如果模块只能跑在浏览器端，使用`-b`选项。
* `npm run cov`检查测试覆盖率。
* 输入`npm run update`命令更新 **index.json** 和 **DOC.md** 文件。

做完这一切就可以发起 pull request 了:)
