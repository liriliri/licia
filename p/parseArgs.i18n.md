## CN

Parse command line argument options, the same as minimist.

|参数名|类型|说明|
|-----|----|---|
|args  |array |Argument array |
|opts  |object|Parse options  |
|返回值|object|Parsed result  |

### options

|参数名|类型|说明|
|-----|----|---|
|names     |object|option names     |
|shorthands|object|option shorthands|

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