## scrollTo

Scroll to a target with animation.

<details>
<summary>Type Definition</summary>

```typescript
function scrollTo(
    target: Element | string | number,
    options: {
        tolerance?: number;
        duration?: number;
        easing?: string | Function;
        callback?: types.AnyFn;
    }
);
```

</details>

|Name   |Desc          |
|-------|--------------|
|target |Scroll target |
|options|Scroll options|

### options

|Name           |Desc                                   |
|---------------|---------------------------------------|
|tolerance=0    |Tolerance of target to scroll          |
|duration=800   |Scroll duration                        |
|easing=outQuart|Easing function                        |
|callback=noop  |Function to run once scrolling complete|

```javascript
scrollTo('body', {
    tolerance: 0,
    duration: 800,
    easing: 'outQuart',
    callback: function() {}
});
```
