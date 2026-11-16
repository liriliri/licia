# Licia Reference: k

## kebabCase

Convert string to "kebabCase".

<details>
<summary>Type Definition</summary>

```typescript
function kebabCase(str: string): string;
```

</details>

|Name  |Desc              |
|------|------------------|
|str   |String to convert |
|return|Kebab cased string|

```javascript
kebabCase('fooBar'); // -> foo-bar
kebabCase('foo bar'); // -> foo-bar
kebabCase('foo_bar'); // -> foo-bar
kebabCase('foo.bar'); // -> foo-bar
```

## keyCode

Key codes and key names conversion.

<details>
<summary>Type Definition</summary>

```typescript
function keyCode(name: string): number;
function keyCode(code: number): string;
```

</details>

Get key code's name.

|Name  |Desc                  |
|------|----------------------|
|code  |Key code              |
|return|Corresponding key name|

Get key name's code.

|Name  |Desc                  |
|------|----------------------|
|name  |Key name              |
|return|Corresponding key code|

```javascript
keyCode(13); // -> 'enter'
keyCode('enter'); // -> 13
```

## keys

Create an array of the own enumerable property names of object.

<details>
<summary>Type Definition</summary>

```typescript
function keys(obj: any): string[];
```

</details>

|Name  |Desc                   |
|------|-----------------------|
|obj   |Object to query        |
|return|Array of property names|

```javascript
keys({ a: 1 }); // -> ['a']
```

## kill

Kill process.

<details>
<summary>Type Definition</summary>

```typescript
function kill(pid: number): void;
```

</details>

|Name|Desc|
|----|----|
|pid |Process ID|

```javascript
kill(9420);
```
