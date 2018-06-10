/* Object values validation.
 *
 * ### constructor
 *
 * |Name   |Type  |Desc                    |
 * |-------|------|------------------------|
 * |options|object|Validation configuration|
 *
 * ### validate
 *
 * Validate object.
 *
 * |Name  |Type  |Desc                            |
 * |------|------|--------------------------------|
 * |obj   |object|Object to validate              |
 * |return|*     |Validation result, true means ok|
 *
 * ### addPlugin
 *
 * [static] Add plugin.
 *
 * |Name  |Type    |Desc              |
 * |------|--------|------------------|
 * |name  |string  |Plugin name       |
 * |plugin|function|Validation handler|
 *
 * ### Default Plugins
 *
 * Required, number, boolean, string and regexp.
 *
 * ```javascript
 * Validator.addPlugin('custom', function (val, key, config)
 * {
 *     if (typeof val === 'string' && val.length === 5) return true;
 *
 *     return key + ' should be a string with length 5';
 * });
 * var validator = new Validator({
 *     'test': {
 *         required: true,
 *         custom: true
 *     }
 * });
 * validator.validate({}); // -> 'test is required'
 * validator.validate({test: 1}); // -> 'test should be a string with length 5';
 * validator.validate({test: 'licia'}); // -> true
 * ```
 */

/* module
 * env: all
 * test: all
 */

_('Class keys safeGet isFn isUndef isNum isStr isBool');

exports = Class(
    {
        className: 'Validator',
        initialize: function(options) {
            this._options = options;
            this._optKeys = keys(options);
        },
        validate: function(obj) {
            obj = obj || {};

            var options = this._options,
                objKeys = this._optKeys;

            for (var i = 0, len = objKeys.length; i < len; i++) {
                var key = objKeys[i];

                var result = this._validateVal(
                    safeGet(obj, key),
                    options[key],
                    key
                );

                if (result !== true) return result;
            }

            return true;
        },
        _validateVal: function(val, rules, objKey) {
            var plugins = exports.plugins;

            if (isFn(rules)) return rules(val);

            var ruleKeys = keys(rules);

            for (var i = 0, len = ruleKeys.length; i < len; i++) {
                var key = ruleKeys[i],
                    config = rules[key],
                    result = true;

                if (isFn(config)) result = config(val, objKey);

                var plugin = plugins[key];
                if (plugin) result = plugin(val, objKey, config);

                if (result !== true) return result;
            }

            return true;
        }
    },
    {
        plugins: {
            required: function(val, key, config) {
                if (config && isUndef(val)) return key + ' is required';

                return true;
            },
            number: function(val, key, config) {
                if (config && !isUndef(val) && !isNum(val))
                    return key + ' should be a number';

                return true;
            },
            boolean: function(val, key, config) {
                if (config && !isUndef(val) && !isBool(val))
                    return key + ' should be a boolean';

                return true;
            },
            string: function(val, key, config) {
                if (config && !isUndef(val) && !isStr(val))
                    return key + ' should be a string';

                return true;
            },
            regexp: function(val, key, config) {
                if (isStr(val) && !config.test(val))
                    return (
                        key + ' should match given regexp ' + config.toString()
                    );

                return true;
            }
        },
        addPlugin: function(name, plugin) {
            exports.plugins[name] = plugin;
        }
    }
);
