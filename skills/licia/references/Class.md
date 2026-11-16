## Class

Create JavaScript class.

<details>
<summary>Type Definition</summary>

```typescript
namespace Class {
    class Base {
        toString(): string;
    }
    class IConstructor extends Base {
        constructor(...args: any[]);
        static extend(methods: any, statics: any): IConstructor;
        static inherits(Class: types.AnyFn): void;
        static methods(methods: any): IConstructor;
        static statics(statics: any): IConstructor;
        [method: string]: any;
    }
}
function Class(methods: any, statics?: any): Class.IConstructor;
```

</details>

|Name   |Desc                             |
|-------|---------------------------------|
|methods|Public methods                   |
[statics|Static methods                   |
|return |Function used to create instances|

```javascript
const People = Class({
    initialize: function People(name, age) {
        this.name = name;
        this.age = age;
    },
    introduce: function() {
        return 'I am ' + this.name + ', ' + this.age + ' years old.';
    }
});

const Student = People.extend(
    {
        initialize: function Student(name, age, school) {
            this.callSuper(People, 'initialize', arguments);

            this.school = school;
        },
        introduce: function() {
            return (
                this.callSuper(People, 'introduce') +
                '\n I study at ' +
                this.school +
                '.'
            );
        }
    },
    {
        is: function(obj) {
            return obj instanceof Student;
        }
    }
);

const a = new Student('allen', 17, 'Hogwarts');
a.introduce(); // -> 'I am allen, 17 years old. \n I study at Hogwarts.'
Student.is(a); // -> true
```
