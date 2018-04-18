/* A tiny JavaScript debugging utility.
 *
 * |Name  |Type    |Desc                           |
 * |------|--------|-------------------------------|
 * |name  |string  |Namespace                      |
 * |return|function|Function to print decorated log|
 *
 * ```javascript
 * var d = debug('test');
 * d('doing lots of uninteresting work');
 * d.enabled = false;
 * ```
 */

/* module
 * env: all
 * test: all
 */ 

_('toArr now format ms'); 

function exports(name) 
{
    var prevTime;

    function debug() 
    {
        if (!debug.enabled) return;

        var args = toArr(arguments);

        var cur = now(),
            duration = cur - (prevTime || cur);
        prevTime = cur;
        
        var content = format.apply(null, args);

        /* eslint-disable no-console */
        console.log(name + ': ' + content + ' +' + ms(duration));
    }

    debug.enabled = true;

    return debug;
} 