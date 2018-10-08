## CN

Scroll to a target with animation.

|参数名|类型|说明|
|-----|----|---|
|target |element string number|Scroll target |
|options|object               |Scroll options|

### Options

|Name     |Type           |Default |Desc                                   |
|---------|---------------|--------|---------------------------------------|
|tolerance|number         |0       |Tolerance of target to scroll          |
|duration |number         |800     |Scroll duration                        |
|easing   |string function|outQuart|Easing function                        |
|callback |function       |noop    |Function to run once scrolling complete|

```javascript
scrollTo('body', {
    tolerance: 0,
    duration: 800,
    easing: 'outQuart',
    callback: function () {}
});
```