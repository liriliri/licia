## inherits

Inherit the prototype methods from one constructor into another.

<details>
<summary>Type Definition</summary>

```typescript
function inherits(
    Class: types.AnyFn,
    SuperClass: types.AnyFn
): void;
```

</details>

|Name      |Desc       |
|----------|-----------|
|Class     |Child Class|
|SuperClass|Super Class|

```javascript
function People(name) {
    this._name = name;
}
People.prototype = {
    getName: function() {
        return this._name;
    }
};
function Student(name) {
    this._name = name;
}
inherits(Student, People);
const s = new Student('RedHood');
s.getName(); // -> 'RedHood'
```
