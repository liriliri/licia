/* Simple logger with level filter.
 *
 * ### constructor
 * 
 * |Name |Type  |Desc        |
 * |-----|------|------------|
 * |name |string|Logger name |
 * |level|number|Logger level|
 * 
 * ### trace, debug, info, warn, error
 * 
 * Logging methods.
 * 
 * ### Log Levels
 * 
 * TRACE, DEBUG, INFO, WARN, ERROR and SILENT.
 * 
 * ```javascript
 * var logger = new Logger('eris', logger.level.ERROR);
 * logger.trace('test');
 * 
 * logger.formatter = function (type, argList)
 * {
 *     argList.push(new Date().getTime());
 * 
 *     return argList;
 * };
 * 
 * logger.on('all', function (type, argList) 
 * {
 *     // It's not affected by log level.
 * });
 * 
 * logger.on('debug', function (argList) 
 * {
 *     // Affected by log level.
 * });
 * ```
 */

_('Emitter Enum dateFormat toArr isUndef');

exports = Emitter.extend({
    initialize: function Logger(name, level) 
    {
        this.name = name;
        this.level = isUndef(level) ? exports.level.DEBUG : level;

        this.callSuper(Emitter, 'initialize', arguments);
    },
    formatter: function (type, argList) 
    {
        argList.push(dateFormat('yyyy-mm-dd HH:MM:ss') + ' ' + this.name + ' [' + type.toUpperCase() + ']');

        return argList;
    },
    trace: function () 
    {
        this._log('trace', arguments);
    },
    debug: function () 
    {
        this._log('debug', arguments);
    },
    info: function ()
    {
        this._log('info', arguments);
    },
    warn: function () 
    {
        this._log('warn', arguments);
    },
    error: function ()
    {
        this._log('error', arguments);
    },
    _log: function (type, argList) 
    {
        argList = toArr(argList);
        if (argList.length === 0) return;

        this.emit('all', type, argList);

        if (exports.level[type.toUpperCase()] < this.level) return;
        this.emit(type, argList);
        var consoleMethod = type === 'debug' ? console.log : console[type];
        consoleMethod.apply(console, this.formatter(type, argList));
    }
}, {
    level: new Enum({
        TRACE: 0,
        DEBUG: 1,
        INFO: 2,
        WARN: 3,
        ERROR: 4,
        SILENT: 5
    })
});