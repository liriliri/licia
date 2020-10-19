/* Get viewport scale.
 */

/* example
 * viewportScale(); // -> 3
 */

/* module
 * env: browser
 */

/* typescript
 * export declare function viewportScale(): number;
 */

_('meta clamp trim each map isNaN');

exports = function() {
    let viewport = meta('viewport');

    if (!viewport) return 1;

    viewport = map(viewport.split(','), function(val) {
        return trim(val);
    });

    let minScale = 0.25,
        maxScale = 5,
        initialScale = 1;

    each(viewport, function(val) {
        val = val.split('=');

        const key = val[0];
        val = val[1];

        if (key === 'initial-scale') initialScale = +val;
        if (key === 'maximum-scale') maxScale = +val;
        if (key === 'minimum-scale') minScale = +val;
    });

    const ret = clamp(initialScale, minScale, maxScale);

    // Some will use ';' to be the separator, need to avoid the wrong result.
    if (isNaN(ret)) return 1;

    return ret;
};
