## MediaQuery

CSS media query listener.

<details>
<summary>Type Definition</summary>

```typescript
class MediaQuery extends Emitter {
    constructor(query: string);
    setQuery(query: string): void;
    isMatch(): boolean;
}
```

</details>

Extend from Emitter.

### constructor

|Name |Desc       |
|-----|-----------|
|query|Media query|

### setQuery

Update query.

### isMatch

Return true if given media query matches.

### Events

#### match

Triggered when a media query matches.

#### unmatch

Opposite of match.

```javascript
const mediaQuery = new MediaQuery('screen and (max-width:1000px)');
mediaQuery.isMatch(); // -> false
mediaQuery.on('match', () => {
    // Do something...
});
```
