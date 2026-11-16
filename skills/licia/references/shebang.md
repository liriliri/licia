## shebang

Get command from a shebang.

<details>
<summary>Type Definition</summary>

```typescript
function shebang(str: string): string | void;
```

</details>

|Name  |Desc                 |
|------|---------------------|
|str   |String to get command|
|return|Shebang command      |

```javascript
shebang('#!/usr/bin/env node'); // -> '/usr/bin/env node'
shebang('#!/bin/bash'); // -> '/bin/bash'
shebang('node'); // -> undefined
```
