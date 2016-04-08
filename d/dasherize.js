// TODO

/* function
 *
 * dasherize:  Convert string to "dashCase".
 */

dasherize = function (str)
{
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};