/* Scroll to a target with animation.
 *
 * |Name   |Type                 |Desc          |
 * |-------|---------------------|--------------|
 * |target |element string number|Scroll target |
 * |options|object               |Scroll options|
 * 
 * ### Options
 * 
 * |Name     |Type           |Default |Desc                                   |
 * |---------|---------------|--------|---------------------------------------|
 * |tolerance|number         |0       |Tolerance of target to scroll          |
 * |duration |number         |800     |Scroll duration                        |
 * |easing   |string function|outQuart|Easing function                        |
 * |callback |function       |noop    |Function to run once scrolling complete|
 *
 * ```javascript
 * scrollTo('body', {
 *     tolerance: 0,
 *     duration: 800,
 *     easing: 'outQuart',
 *     callback: function () {}
 * });
 * ```
 */

/* module
 * env: browser
 * test: browser
 */

_('Tween defaults noop isNum $offset');

function exports(target, options) {
    options = options || {};
    defaults(options, defOpts);

    if (!isNum(target)) target = $offset(target).top;

    new Tween({
        y: window.pageYOffset
    })
        .on('update', function(target) {
            window.scroll(0, target.y);
        })
        .on('end', function() {
            options.callback();
        })
        .to(
            {
                y: target - options.tolerance
            },
            options.duration,
            options.easing
        )
        .play();
}

var defOpts = {
    tolerance: 0,
    duration: 800,
    easing: 'outQuart',
    callback: noop
};
