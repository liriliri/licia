/* Convert callback based functions into Promises.
 * 
 * |Name             |Type    |Desc                                  |
 * |-----------------|--------|--------------------------------------|
 * |fn               |function|Callback based function               |
 * |[multiArgs=false]|boolean |If callback has multiple success value|
 * |return           |boolean |Result function                       |
 * 
 * If multiArgs is set to true, the resulting promise will always fulfill with an array of the callback's success values.
 * 
 * ```javascript
 * var fs = require('fs');
 * 
 * var readFile = promisify(fs.readFile);
 * readFile('test.js', 'utf-8').then(function (data) 
 * {
 *     // Do something with file content.
 * });
 * ```
 */

/* module
 * env: all
 * test: all
 */ 

_('restArgs root Promise'); 

exports = function (fn, multiArgs) 
{
    return restArgs(function (args) 
    {
        return new exports.Promise(function (resolve, reject) 
        {
            args.push(restArgs(function callback(err, values) 
            {
                if (err) return reject(err);

                if (!multiArgs) return resolve(values[0]);

                resolve(values);
            }));

            fn.apply(this, args);
        });
    });
}; 

exports.Promise = root.Promise || Promise;