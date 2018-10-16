## CN

命令行参数简单解析。

|参数名|类型|说明|
|-----|----|---|
|args|array|参数数组|
|opts|object|解析选项|
|返回值|object|解析结果|

### options

|参数名|类型|说明|
|-----|----|---|
|names|object|选项名及类型|
|shorthands|object|选项名缩写|

```javascript
parseArgs(['eustia', '--output', 'util.js', '-w'], {
    names: {
        output: 'string',
        watch: 'boolean'
    },
    shorthands: {
        output: 'o',
        watch: 'w'
    }
});
// -> {remain: ['eustia'], output: 'util.js', watch: true}
```