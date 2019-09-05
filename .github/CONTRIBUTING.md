# Contributing Guide

## Submitting New Modules

Unable to find one suitable? Fork it on GitHub, add the module and submit a pull
request.

Please check [Eustia Documentation](https://eustia.liriliri.io/docs.html#create-module)
about how to write an eustia module.

### Rules

* Must have full documentation about usage. (example is required)
* Must have test.
* Must have typescript definition.
* Must specify running environment, node, browser, miniprogram or all.
* Must named with **a-zA-Z0-9$** characters only.
* Must not be repeated. (e.g. leftPad is not allowed because there is already a
  module called lpad)
* Must within a file, less than 500 lines. (with comments and blank lines counted)  

### How to Add

* Fork and clone the repository.
* `npm i && npm link` to register **licia** command in your system.
* Create a js file named with the module name and its corresponding test file.
* Write the source code along with the documentaion and test. (documentation is the first block comment written in markdown)
* `licia test <module-name>` run the test. (use `-b` if test should run in a browser)
* Update **index.json** and **DOC.md** by running `npm run update`.

Now it's time to submit a pull request:)