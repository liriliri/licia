## CN

Tiny wrapper of stream Transform.

|参数名|类型|说明|
|-----|----|---|
|opts={}|Object  |Options to initialize stream|
|transform|function|Transform implementation    |
|[flush]  |function|Flush implementation        |

### obj

Shortcut for setting objectMode to true.

### ctor

Return a class that extends stream Transform.

```javascript
fs.createReadStream('in.txt')
  .pipe(through(function (chunk, enc, cb) {
      // Do something to chunk
      this.push(chunk);
      cb();
  })).pipe(fs.createWriteStream('out.txt'));
```