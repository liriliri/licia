/* Simple logger with level filter.
 *
 * ### constructor
 *
 * |Name       |Type  |Desc        |
 * |-----------|------|------------|
 * |name       |string|Logger name |
 * |level=DEBUG|number|Logger level|
 *
 * ### setLevel
 *
 * Set level.
 *
 * |Name |Type         |Desc        |
 * |-----|-------------|------------|
 * |level|number string|Logger level|
 *
 * ### getLevel
 *
 * Get current level.
 *
 * ### trace, debug, info, warn, error
 *
 * Logging methods.
 *
 * ### Log Levels
 *
 * TRACE, DEBUG, INFO, WARN, ERROR and SILENT.
 */

/* example
 * const logger = new Logger('licia', Logger.level.ERROR);
 * logger.trace('test');
 *
 * // Format output.
 * logger.formatter = function (type, argList) {
 *     argList.push(new Date().getTime());
 *
 *     return argList;
 * };
 *
 * logger.on('all', function (type, argList) {
 *     // It's not affected by log level.
 * });
 *
 * logger.on('debug', function (argList) {
 *     // Affected by log level.
 * });
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare class Logger extends Emitter {
 *     name: string;
 *     formatter(type: string, argList: any[]): any[];
 *     constructor(name: string, level?: string | number);
 *     setLevel(level: string | number): Logger;
 *     getLevel(): number;
 *     trace(...args: any[]): Logger;
 *     debug(...args: any[]): Logger;
 *     info(...args: any[]): Logger;
 *     warn(...args: any[]): Logger;
 *     error(...args: any[]): Logger;
 *     static level: Enum;
 * }
 */

_('Emitter Enum toArr isUndef clone isStr isNum');

exports = Emitter.extend(
    {
        initialize: function Logger(name, level) {
            this.name = name;

            this.setLevel(isUndef(level) ? exports.level.DEBUG : level);
            this.callSuper(Emitter, 'initialize', arguments);
        },
        setLevel: function(level) {
            if (isStr(level)) {
                level = exports.level[level.toUpperCase()];
                if (level) this._level = level;
                return this;
            }
            if (isNum(level)) this._level = level;

            return this;
        },
        getLevel: function() {
            return this._level;
        },
        formatter: function(type, argList) {
            return argList;
        },
        trace: function() {
            return this._log('trace', arguments);
        },
        debug: function() {
            return this._log('debug', arguments);
        },
        info: function() {
            return this._log('info', arguments);
        },
        warn: function() {
            return this._log('warn', arguments);
        },
        error: function() {
            return this._log('error', arguments);
        },
        _log: function(type, argList) {
            argList = toArr(argList);
            if (argList.length === 0) return this;

            this.emit('all', type, clone(argList));

            if (exports.level[type.toUpperCase()] < this._level) return this;
            this.emit(type, clone(argList));
            /* eslint-disable no-console */
            const consoleMethod =
                type === 'debug' ? console.log : console[type];
            consoleMethod.apply(console, this.formatter(type, argList));

            return this;
        }
    },
    {
        level: new Enum({
            TRACE: 0,
            DEBUG: 1,
            INFO: 2,
            WARN: 3,
            ERROR: 4,
            SILENT: 5
        })
    }
);
