## Semaphore

Limit simultaneous access to a resource.

<details>
<summary>Type Definition</summary>

```typescript
class Semaphore {
    constructor(counter?: number);
    wait(fn: () => void): void;
    signal(): void;
}
```

</details>

### constructor

|Name     |Desc           |
|---------|---------------|
|counter=1|Initial counter|

### wait

Wait to execute until counter is bigger than 0.

|Name|Desc               |
|----|-------------------|
|fn  |Function to execute|

### signal

Wake up one waiter if any.

```javascript
const sem = new Semaphore(10);
require('http')
    .createServer((req, res) => {
        sem.wait(function() {
            res.end('.');
            setTimeout(() => sem.signal(), 500);
        });
    })
    .listen(3000);
```
