/* Scroll to a target with animation.
 *
 * |Name   |Desc          |
 * |-------|--------------|
 * |target |Scroll target |
 * |options|Scroll options|
 *
 * ### Options
 *
 * |Name           |Desc                                   |
 * |---------------|---------------------------------------|
 * |tolerance=0    |Tolerance of target to scroll          |
 * |duration=800   |Scroll duration                        |
 * |easing=outQuart|Easing function                        |
 * |callback=noop  |Function to run once scrolling complete|
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
 */

/* typescript
 * export declare function scrollTo(
 *     target: Element | string | number,
 *     options: {
 *         tolerance?: number;
 *         duration?: number;
 *         easing?: string | Function;
 *         callback?: types.AnyFn;
 *     }
 * );
 */

_('Tween defaults noop isNum $offset types');

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
