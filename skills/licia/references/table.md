## table

Output table string.

<details>
<summary>Type Definition</summary>

```typescript
namespace table {
    interface IOptions {
        border?: {
            topBody?: string;
            topJoin?: string;
            topLeft?: string;
            topRight?: string;
            bottomBody?: string;
            bottomJoin?: string;
            bottomLeft?: string;
            bottomRight?: string;
            bodyLeft?: string;
            bodyRight?: string;
            bodyJoin?: string;
            joinBody?: string;
            joinLeft?: string;
            joinRight?: string;
            joinJoin?: string;
        };
    }
    function parse(table: string, options?: IOptions): Array<string[]>;
}
function table(
    rows: Array<string[]>,
    options?: table.IOptions
): string;
```

</details>

|Name   |Desc         |
|-------|-------------|
|rows   |Table data   |
|options|Table options|
|return |Table string |

### parse

Parse table string back to object.

|Name   |Type         |
|-------|-------------|
|table  |Table string |
|options|Table options|
|return |Table data   |

```javascript
table([
    ['', 'firstName', 'lastName'],
    ['daughter', 'Emily', 'Smith'],
    ['father', 'John', 'Smith'],
    ['mother', 'Jane', 'Smith']
]);
```
