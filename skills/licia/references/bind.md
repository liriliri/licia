## bind

Create a function bound to a given object.

<details>
<summary>Type Definition</summary>

```typescript
function bind(
    fn: types.AnyFn,
    ctx: any,
    ...args: any[]
): types.AnyFn;
```

</details>

|Name  |Desc                    |
|------|------------------------|
|fn    |Function to bind        |
|ctx   |This binding of given fn|
|args  |Optional arguments      |
|return|New bound function      |

```javascript
const fn = bind(
    function(msg) {
        console.log(this.name + ':' + msg);
    },
    { name: 'eustia' },
    'I am a utility library.'
);
fn(); // -> 'eustia: I am a utility library.'
```
