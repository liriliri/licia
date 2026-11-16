## fuzzySearch

Simple fuzzy search.

<details>
<summary>Type Definition</summary>

```typescript
function fuzzySearch(
    needle: string,
    haystack: any[],
    options?: {
        caseSensitive?: boolean;
        key?: string | string[];
    }
): any[];
```

</details>

|Name     |Desc            |
|---------|----------------|
|needle   |String to search|
|haystacks|Search list     |
|options  |Search options  |

Available options:

|Name               |Desc                                        |
|-------------------|--------------------------------------------|
|caseSensitive=false|Whether comparisons should be case sensitive|
|key                |Object key path if item is object           |

```javascript
fuzzySearch('lic', ['licia', 'll', 'lic']); // -> ['lic', 'licia']
fuzzySearch(
    'alpha-test',
    [
        {
            name: 'alpha-test-1'
        },
        {
            name: 'beta-test'
        }
    ],
    {
        key: 'name'
    }
); // -> [{ name: 'alpha-test-1' }]
```
