## parseArgs

Parse command line argument options, the same as minimist.

<details>
<summary>Type Definition</summary>

```typescript
function parseArgs(
    args: string[],
    options: {
        names: any;
        shorthands: any;
    }
): any;
```

</details>

|Name   |Desc           |
|-------|---------------|
|args   |Argument array |
|options|Parse options  |
|return |Parsed result  |

### options

|Name      |Desc             |
|----------|-----------------|
|names     |option names     |
|shorthands|option shorthands|

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
