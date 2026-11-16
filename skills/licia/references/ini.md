## ini

Ini parser and serializer.

<details>
<summary>Type Definition</summary>

```typescript
const ini: {
    parse(ini: string): any;
    stringify(
        obj: any,
        options?: {
            section?: string;
            whitespace: boolean;
        }
    ): string;
};
```

</details>

### parse

Parse ini string into js object.

|Name  |Desc            |
|------|----------------|
|ini   |Ini string      |
|return|Parsed js object|

### stringify

Stringify object into an ini formatted string.

|Name   |Desc                |
|-------|--------------------|
|obj    |Object to stringify |
|options|Stringify options   |
|return |Ini formatted string|

Options:

|Name            |Desc               |
|----------------|-------------------|
|section         |Top section        |
|whitespace=false|Whitespace around =|

```javascript
const config = ini.parse(`
; This is a comment
library = licia

[user.info]
name = surunzi
alias[] = redhoodsu
alias[] = red
`); // -> {library: 'licia', user: {info: {name: 'surunzi', alias: ['redhoodsu', 'red']}}}

ini.stringify(config);
```
