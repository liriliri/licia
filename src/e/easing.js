/* Easing functions adapted from http://jqueryui.com/ .
 *
 * |Name   |Type  |Desc                  |
 * |-------|------|----------------------|
 * |percent|number|Number between 0 and 1|
 * |return |number|Calculated number     |
 */

/* example
 * easing.linear(0.5); // -> 0.5
 * easing.inElastic(0.5, 500); // -> 0.03125
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare const easing: {
 *     linear(percent: number): number;
 *     inQuad(percent: number): number;
 *     outQuad(percent: number): number;
 *     inOutQuad(percent: number): number;
 *     outInQuad(percent: number): number;
 *     inCubic(percent: number): number;
 *     outCubic(percent: number): number;
 *     inQuart(percent: number): number;
 *     outQuart(percent: number): number;
 *     inQuint(percent: number): number;
 *     outQuint(percent: number): number;
 *     inExpo(percent: number): number;
 *     outExpo(percent: number): number;
 *     inSine(percent: number): number;
 *     outSine(percent: number): number;
 *     inCirc(percent: number): number;
 *     outCirc(percent: number): number;
 *     inElastic(percent: number, elasticity?: number): number;
 *     outElastic(percent: number, elasticity?: number): number;
 *     inBack(percent: number): number;
 *     outBack(percent: number): number;
 *     inOutBack(percent: number): number;
 *     outInBack(percent: number): number;
 *     inBounce(percent: number): number;
 *     outBounce(percent: number): number;
 * };
 */

_('each upperFirst');

exports.linear = function(t) {
    return t;
};

const pow = Math.pow;
const sqrt = Math.sqrt;
const sin = Math.sin;
const min = Math.min;
const asin = Math.asin;
const PI = Math.PI;

const fns = {
    sine: function(t) {
        return 1 + sin((PI / 2) * t - PI / 2);
    },
    circ: function(t) {
        return 1 - sqrt(1 - t * t);
    },
    elastic: function(t, m) {
        m = m || DEFAULT_ELASTICITY;

        if (t === 0 || t === 1) return t;

        const p = 1 - min(m, 998) / 1000;
        const st = t / 1;
        const st1 = st - 1;
        const s = (p / (2 * PI)) * asin(1);

        return -(pow(2, 10 * st1) * sin(((st1 - s) * (2 * PI)) / p));
    },
    back: function(t) {
        return t * t * (3 * t - 2);
    },
    bounce: function(t) {
        let pow2,
            bounce = 4;

        /* eslint-disable no-empty */
        while (t < ((pow2 = pow(2, --bounce)) - 1) / 11) {}

        return (
            1 / pow(4, 3 - bounce) - 7.5625 * pow((pow2 * 3 - 2) / 22 - t, 2)
        );
    }
};

each(['quad', 'cubic', 'quart', 'quint', 'expo'], function(name, i) {
    fns[name] = function(t) {
        return pow(t, i + 2);
    };
});

const DEFAULT_ELASTICITY = 400;

each(fns, function(fn, name) {
    name = upperFirst(name);
    exports['in' + name] = fn;
    exports['out' + name] = function(t, m) {
        return 1 - fn(1 - t, m);
    };
    exports['inOut' + name] = function(t, m) {
        return t < 0.5 ? fn(t * 2, m) / 2 : 1 - fn(t * -2 + 2, m) / 2;
    };
    exports['outIn' + name] = function(t, m) {
        return t < 0.5
            ? (1 - fn(1 - 2 * t, m)) / 2
            : (fn(t * 2 - 1, m) + 1) / 2;
    };
});
