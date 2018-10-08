## CN

Inherit the prototype methods from one constructor into another.

|参数名|类型|说明|
|-----|----|---|
|Class     |function|Child Class|
|SuperClass|function|Super Class|

```javascript
function People(name)
{
    this._name = name;
}
People.prototype = {
    getName: function ()
    {
        return this._name;
    }
};
function Student(name)
{
    this._name = name;
}
inherits(Student, People);
var s = new Student('RedHood');
s.getName(); // -> 'RedHood'
```