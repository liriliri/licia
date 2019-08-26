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
 */

/* example
 * scrollTo('body', {
 *     tolerance: 0,
 *     duration: 800,
 *     easing: 'outQuart',
 *     callback: function () {}
 * });
 */

/* module
 * env: browser
 * test: browser
 */

/* typescript
 * export declare namespace scrollTo {
 *     interface IOptions {
 *         tolerance?: number;
 *         duration?: number;
 *         easing?: string | Function;
 *         callback?: Function;
 *     }
 * }
 * export declare function scrollTo(
 *     target: Element | string | number,
 *     options: scrollTo.IOptions
 * );
 */

_('Tween defaults noop isNum $offset');

exports = function(target, options) {
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
};

const defOpts = {
    tolerance: 0,
    duration: 800,
    easing: 'outQuart',
    callback: noop
};
