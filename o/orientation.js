/* Screen orientation helper.
 *
 * ### on
 *
 * Bind change event.
 *  
 * ### off 
 * 
 * Unbind change event.
 * 
 * ### get
 * 
 * Get current orientation, landscape or landscape.
 * 
 * ```javascript
 * orientation.on('change', function (direction) 
 * {
 *     // Do something.
 * });
 * orientation.get(); // -> 'landscape'
 * ```
 */

_('Emitter safeGet');

var screen = window.screen;

exports = {
    get: function () 
    {
        if (screen) 
        {
            var orientation = safeGet(screen, 'orientation.type');
            if (orientation) return orientation.split('-').shift();
        } 

        return window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'; 
    }
};

Emitter.mixin(exports);

window.addEventListener('orientationchange', function () 
{
    setTimeout(function () 
    {
        exports.emit('change', exports.get());
    }, 200);
}, false);