## compose

Compose a list of functions.

<details>
<summary>Type Definition</summary>

```typescript
function compose(...fn: types.AnyFn[]): types.AnyFn;
```

</details>

Each function consumes the return value of the function that follows.

|Name  |Desc                |
|------|--------------------|
|...fn |Functions to compose|
|return|Composed function   |

```javascript
const welcome = compose(
    function(name) {
        return 'hi: ' + name;
    },
    function(name) {
        return name.toUpperCase() + '!';
    }
);

welcome('licia'); // -> 'hi: LICIA!'
```
