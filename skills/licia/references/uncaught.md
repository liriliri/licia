## uncaught

Handle global uncaught errors and promise rejections.

<details>
<summary>Type Definition</summary>

```typescript
const uncaught: {
    start(): void;
    stop(): void;
    addListener(fn: (err: Error) => void): void;
    rmListener(fn: (err: Error) => void): void;
    rmAllListeners(): void;
};
```

</details>

### start

Start handling of errors.

### stop

Stop handling.

### addListener

Add listener for handling errors.

|Name|Desc          |
|----|--------------|
|fn  |Error listener|

### rmListener

Remove listener.

### rmAllListeners

Remove all listeners.

```javascript
uncaught.start();
uncaught.addListener(err => {
    // Do something.
});
```
