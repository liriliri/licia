# Licia Reference: o

## objToStr

Alias of Object.prototype.toString.

<details>
<summary>Type Definition</summary>

```typescript
function objToStr(val: any): string;
```

</details>

|Name  |Desc                                |
|------|------------------------------------|
|val   |Source value                        |
|return|String representation of given value|

```javascript
objToStr(5); // -> '[object Number]'
```

## omit

Opposite of pick.

<details>
<summary>Type Definition</summary>

```typescript
function omit(
    obj: any,
    filter: string | string[] | Function
): any;
```

</details>

|Name  |Desc           |
|------|---------------|
|obj   |Source object  |
|filter|Object filter  |
|return|Filtered object|

```javascript
omit({ a: 1, b: 2 }, 'a'); // -> {b: 2}
omit({ a: 1, b: 2, c: 3 }, ['b', 'c']); // -> {a: 1}
omit({ a: 1, b: 2, c: 3, d: 4 }, function(val, key) {
    return val % 2;
}); // -> {b: 2, d: 4}
```

## once

Create a function that invokes once.

<details>
<summary>Type Definition</summary>

```typescript
function once(fn: types.AnyFn): types.AnyFn;
```

</details>

|Name  |Desc                   |
|------|-----------------------|
|fn    |Function to restrict   |
|return|New restricted function|

```javascript
function init() {}
const initOnce = once(init);
initOnce();
initOnce(); // -> init is invoked once
```

## open

Open stuff like url, files.

<details>
<summary>Type Definition</summary>

```typescript
function open(target: string): any;
```

</details>

|Name  |Desc         |
|------|-------------|
|target|Stuff to open|
|return|Child process|

```javascript
open('https://eustia.liriliri.io/');
```

## openFile

Open file dialog to select file in browser.

<details>
<summary>Type Definition</summary>

```typescript
function openFile(options?: {
    accept?: string;
    multiple?: boolean;
}): Promise<File[]>;
```

</details>

|Name   |Desc          |
|-------|--------------|
|options|Dialog options|
|return |Files promise |

Available options:

|Name          |Desc                        |
|--------------|----------------------------|
|accept        |File types                  |
|multiple=false|Select multiple files or not|

```javascript
openFile({ multiple: true }).then(fileList => {
    console.log(fileList);
});
```

## optimizeCb

Used for function context binding.

<details>
<summary>Type Definition</summary>

```typescript
function optimizeCb(
    fn: types.AnyFn,
    ctx: any,
    argCount?: number
): types.AnyFn;
```

</details>

## ordinal

Add ordinal indicator to number.

<details>
<summary>Type Definition</summary>

```typescript
function ordinal(num: number): string;
```

</details>

|Name  |Desc                   |
|------|-----------------------|
|num   |Number to add indicator|
|return|Result ordinal number  |

```javascript
ordinal(1); // -> '1st'
ordinal(2); // -> '2nd'
```

## orientation

Screen orientation helper.

<details>
<summary>Type Definition</summary>

```typescript
namespace orientation {
    interface IOrientation extends Emitter {
        get(): string;
    }
}
const orientation: orientation.IOrientation;
```

</details>

### on

Bind change event.

### off

Unbind change event.

### get

Get current orientation(landscape or portrait).

```javascript
orientation.on('change', function(direction) {
    console.log(direction); // -> 'portrait'
});
orientation.get(); // -> 'landscape'
```
