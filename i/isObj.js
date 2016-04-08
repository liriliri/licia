// TODO

/* function
 * isObj: Checks if value is the language type of Object.
 * value(*): The value to check.
 * return(boolean): Returns true if value is an object, else false.
 */

isObj = function (val)
{
    var type = typeof val;

    return type === 'function' || type === 'object';
};