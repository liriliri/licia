# Eris

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![License][license-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/eustia-module.svg
[npm-url]: https://npmjs.org/package/eustia-module
[travis-image]: https://img.shields.io/travis/liriliri/eris.svg
[travis-url]: https://travis-ci.org/liriliri/eris
[license-image]: https://img.shields.io/npm/l/eustia-module.svg

Eustia官方模块

Eris是一套在开发中实践积累起来的实用JavaScript工具库。该库目前拥有超过180个模块，包括Dom操作，cookie设置，类创建，模板函数，日期格式化等实用模块，同时配套有打包工具Eustia进行定制化，使JS脚本加载量缩减在10KB以下，极大优化移动端页面的加载速度。

目前拥有的所有模块可[点此](http://liriliri.github.io/eustia/module.html)查看。

## 开发背景

Eris从一开始就不是为了单纯地替代underscore或lodash而生。它的目标是提供一系列在日常开发中使用率较高的JavaScript模块。因此，每一个新加入的模块都是在项目中实际使用到时才被添加进去。当前已经累积180+模块，而且还在不断更新中，已经可以满足移动端日常开发的绝大部分需求。

你不再需要引入zepto了，因为已经有个类jQuery的模块了；不再需要引入cookie库了，因为已经有cookie操作模块了；不再需要moment了，因为有个dateFormat可以满足大部分格式化需求了；不再需要引入Promise pollyfill，因为已经有个通过Promise A+测试的Promise库了；不再需要引入EventEmitter库了，因为已经有了；不再需要引入ajax库了，因为有ajax，而且还有fetch；不再需要引入underscore，仅仅是为了使用一个打乱数组的shuffle函数；还有那个引用数奇高的mkdirp模块，再也不需要再把它装到node_modules里去了……

## 使用方法

推荐使用官方打包工具[eustia](http://liriliri.github.io/eustia/)针对项目定制工具库按需引入。当然安装**eustia-module**模块然后直接引用也是可以的。

```bash
npm i eustia-module --save
```

```javascript
var uuid = require('eustia-module/uuid');

console.log(uuid()); // -> 0e3b84af-f911-4a55-b78a-cedf6f0bd815
```

## 提交新模块

在无法找到所需模块的情况下，你可以发起issue建议或者自己添加模块合并到该项目中去。

关于如何编写模块，请查看[Eustia文档](http://liriliri.github.io/eustia/docs.html#create-module)中的相关说明。

### 基本原则

每个模块都必须满足以下几点要求：

* 必须有详细的使用说明文档（英文，格式参考其它已有模块）。
* 必须有单元测试。
* 模块名只能包含**a-zA-Z$**等字符。
* 不能存在功能高度相似的模块，例如不能添加leftPad模块因为已经有模块lpad了。
* 模块可以依赖其它模块，但所有代码都必须写在一个文件，不能超过500行，包括使用说明和空行。

### 怎么添加

* Fork该仓库。
* `npm i && npm link`将**eris**命令行工具添加到系统中。
* 创建一个文件名为模块名的js文件，还有相应的单元测试文件，以test.js结尾。
* 编写模块代码，使用文档（顶部块注释，Markdown格式）和单元测试。
* `eris test <module-name>`生成测试文件（如果模块只能跑在浏览器端，使用`-k`选项）， 接着输入`mocha test/<module-name>`或者`karma start`执行测试。
* `npm run cov`检查测试覆盖率，需要安装istanbul。
* 将模块名添加到**test.json**中相应部分以进行持续集成。
* 输入`npm run update`命令更新**eris.json**和**doc.md**文件。

做完这一切就可以发起pull request了:)
