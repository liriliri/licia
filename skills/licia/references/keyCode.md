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
