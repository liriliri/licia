# Eris

Eustia official module repository.

> To check all current available functions, see 
[doc.md](doc.md).

## Another Lodash?

No. The goal of Eustia is to provide a huge number of useful and small
JavaScript codes, not just functions, but also modules and classes. Think of it
as a mini version of npm suitable for tiny packages.

## Usage

It is recommended to use the official bundler [eustia](http://liriliri.github.io/eustia/).

But if you don't like it, just install **eustia-module** and use it like 
any other npm utility modules such as lodash.

```bash
npm i eustia-module --save
```

```javascript
var uuid = require('eustia-module/uuid');
 
console.log(uuid()); // -> 0e3b84af-f911-4a55-b78a-cedf6f0bd815 
```

## Submitting New Modules

Unable to find one suitable? Fork it on GitHub, add the module and submit a pull
request.

Please check [Eustia Documentation](http://liriliri.github.io/eustia/docs.html#create-module) 
about how to write an eustia module.

> To run test for a specified module, run `node test <moduleName>` to generate 
test files first.

### Rules

* Must have full documentation about usage.
* Must have test.
* Must named with **a-zA-Z$** characters only.
* Must not be repeated. (e.g. leftPad is not allowed because there is already a
  module called lpad)
