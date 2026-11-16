# Licia Reference: a

## abbrev

Calculate the set of unique abbreviations for a given set of strings.

<details>
<summary>Type Definition</summary>

```typescript
function abbrev(...names: string[]): types.PlainObj<string>;
```

</details>

|Name  |Desc            |
|------|----------------|
|names |List of names   |
|return|Abbreviation map|

```javascript
abbrev('lina', 'luna');
// -> {li: 'lina', lin: 'lina', lina: 'lina', lu: 'luna', lun: 'luna', luna: 'luna'}
```

## after

Create a function that invokes once it's called n or more times.

<details>
<summary>Type Definition</summary>

```typescript
function after<T extends types.AnyFn>(n: number, fn: T): T;
```

</details>

|Name  |Desc                          |
|------|------------------------------|
|n     |Number of calls before invoked|
|fn    |Function to restrict          |
|return|New restricted function       |

```javascript
const fn = after(5, function() {
    // -> Only invoke after fn is called 5 times.
});
```

## ajax

Perform an asynchronous HTTP request.

<details>
<summary>Type Definition</summary>

```typescript
namespace ajax {
    function get(
        url: string,
        data: string | {},
        success: types.AnyFn,
        dataType?: string
    ): XMLHttpRequest;
    function get(
        url: string,
        success: types.AnyFn,
        dataType?: string
    ): XMLHttpRequest;
    function post(
        url: string,
        data: string | {},
        success: types.AnyFn,
        dataType?: string
    ): XMLHttpRequest;
    function post(
        url: string,
        success: types.AnyFn,
        dataType?: string
    ): XMLHttpRequest;
}
function ajax(options: {
    type?: string;
    url: string;
    data?: string | {};
    dataType?: string;
    contentType?: string;
    success?: types.AnyFn;
    error?: types.AnyFn;
    complete?: types.AnyFn;
    timeout?: number;
}): XMLHttpRequest;
```

</details>

|Name   |Desc        |
|-------|------------|
|options|Ajax options|

Available options:

|Name                                         |Desc                       |
|---------------------------------------------|---------------------------|
|type=get                                     |Request type               |
|url                                          |Request url                |
|data                                         |Request data               |
|dataType=json                                |Response type(json, xml)   |
|contentType=application/x-www-form-urlencoded|Request header Content-Type|
|success                                      |Success callback           |
|error                                        |Error callback             |
|complete                                     |Callback after request     |
|timeout                                      |Request timeout            |

### get

Shortcut for type = GET;

### post

Shortcut for type = POST;

|Name    |Desc            |
|--------|----------------|
|url     |Request url     |
|data    |Request data    |
|success |Success callback|
|dataType|Response type   |

```javascript
ajax({
    url: 'http://example.com',
    data: { test: 'true' },
    error() {},
    success(data) {
        // ...
    },
    dataType: 'json'
});

ajax.get('http://example.com', {}, function(data) {
    // ...
});
```

## allKeys

Retrieve all the names of object's own and inherited properties.

<details>
<summary>Type Definition</summary>

```typescript
namespace allKeys {
    interface IOptions {
        prototype?: boolean;
        unenumerable?: boolean;
    }
}
function allKeys(
    obj: any,
    options: { symbol: true } & allKeys.IOptions
): Array<string | Symbol>;
function allKeys(
    obj: any,
    options?: ({ symbol: false } & allKeys.IOptions) | allKeys.IOptions
): string[];
```

</details>

|Name   |Desc                       |
|-------|---------------------------|
|obj    |Object to query            |
|options|Options                    |
|return |Array of all property names|

Available options:

|Name              |Desc                     |
|------------------|-------------------------|
|prototype=true    |Include prototype keys   |
|unenumerable=false|Include unenumerable keys|
|symbol=false      |Include symbol keys      |

Members of Object's prototype won't be retrieved.

```javascript
const obj = Object.create({ zero: 0 });
obj.one = 1;
allKeys(obj); // -> ['zero', 'one']
```

## ansiColor

Ansi colors.

<details>
<summary>Type Definition</summary>

```typescript
namespace ansiColor {
    type IFn = (str: string) => string;
}
const ansiColor: {
    black: ansiColor.IFn;
    red: ansiColor.IFn;
    green: ansiColor.IFn;
    yellow: ansiColor.IFn;
    blue: ansiColor.IFn;
    magenta: ansiColor.IFn;
    cyan: ansiColor.IFn;
    white: ansiColor.IFn;
    gray: ansiColor.IFn;
    grey: ansiColor.IFn;
    bgBlack: ansiColor.IFn;
    bgRed: ansiColor.IFn;
    bgGreen: ansiColor.IFn;
    bgYellow: ansiColor.IFn;
    bgBlue: ansiColor.IFn;
    bgMagenta: ansiColor.IFn;
    bgCyan: ansiColor.IFn;
    bgWhite: ansiColor.IFn;
    blackBright: ansiColor.IFn;
    redBright: ansiColor.IFn;
    greenBright: ansiColor.IFn;
    yellowBright: ansiColor.IFn;
    blueBright: ansiColor.IFn;
    magentaBright: ansiColor.IFn;
    cyanBright: ansiColor.IFn;
    whiteBright: ansiColor.IFn;
    bgBlackBright: ansiColor.IFn;
    bgRedBright: ansiColor.IFn;
    bgGreenBright: ansiColor.IFn;
    bgYellowBright: ansiColor.IFn;
    bgBlueBright: ansiColor.IFn;
    bgMagentaBright: ansiColor.IFn;
    bgCyanBright: ansiColor.IFn;
    bgWhiteBright: ansiColor.IFn;
};
```

</details>

### Available colors

black, red, green, yellow, blue, magenta, cyan, white, gray, grey

bgBlack, bgRed, bgGreen, bgYellow, bgBlue, bgMagenta, bgCyan, bgWhite,

blackBright, redBright, greenBright, yellowBright, blueBright, magentaBright, cyanBright, whiteBright

bgBlackBright, bgRedBright, bgGreenBright, bgYellowBright, bgBlueBright, bgMagentaBright, bgCyanBright, bgWhiteBright

```javascript
ansiColor.red('Warning');
```

## arrToMap

Make an object map using array of strings.

<details>
<summary>Type Definition</summary>

```typescript
function arrToMap<T>(
    arr: string[],
    val?: T
): { [key: string]: T };
```

</details>

|Name    |Desc            |
|--------|----------------|
|arr     |Array of strings|
|val=true|Key value       |
|return  |Object map      |

```javascript
const needPx = arrToMap([
    'column-count',
    'columns',
    'font-weight',
    'line-weight',
    'opacity',
    'z-index',
    'zoom'
]);
const key = 'column-count';
let val = '5';
if (needPx[key]) val += 'px';
console.log(val); // -> '5px'
```

## atob

Use Buffer to emulate atob when running in node.

<details>
<summary>Type Definition</summary>

```typescript
function atob(str: string): string;
```

</details>

```javascript
atob('SGVsbG8gV29ybGQ='); // -> 'Hello World'
```

## average

Get average value of given numbers.

<details>
<summary>Type Definition</summary>

```typescript
function average(...numbers: number[]): number;
```

</details>

|Name   |Desc                |
|-------|--------------------|
|numbers|Numbers to calculate|
|return |Average value       |

```javascript
average(5, 3, 1); // -> 3
```
