## CN

使构造函数继承另一个构造函数原型链上的方法。

|参数名|类型|说明|
|-----|----|---|
|Class|function|子类|
|SuperClass|function|父类|

```javascript
function People(name) {
    this._name = name;
}
People.prototype = {
    getName: function () {
        return this._name;
    }
};
function Student(name) {
    this._name = name;
}
inherits(Student, People);
var s = new Student('RedHood');
s.getName(); // -> 'RedHood'
```