## CN

Create JavaScript class.

|参数名|类型|说明|
|-----|----|---|
|methods  |object  |Public methods                   |
|[statics]|object  |Static methods                   |
|return   |function|Function used to create instances|

```javascript
var People = Class({
    initialize: function People(name, age)
    {
        this.name = name;
        this.age = age;
    },
    introduce: function ()
    {
        return 'I am ' + this.name + ', ' + this.age + ' years old.';
    }
});

var Student = People.extend({
    initialize: function Student(name, age, school)
    {
        this.callSuper(People, 'initialize', arguments);

        this.school = school;
    },
    introduce: function ()
    {
        return this.callSuper(People, 'introduce') + '\n I study at ' + this.school + '.';
    }
}, {
    is: function (obj)
    {
        return obj instanceof Student;
    }
});

var a = new Student('allen', 17, 'Hogwarts');
a.introduce(); // -> 'I am allen, 17 years old. \n I study at Hogwarts.'
Student.is(a); // -> true
```