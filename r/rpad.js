// TODO

/* function
 *
 * rpad: Pads string on the right side if it's shorter than length.
 * string(string): The string to pad.
 * length(number): Padding length.
 * chars(string): String used as padding.
 * return(string): Resulted string.
 */

_('repeat');

rpad = function (str, len, chars)
{
    var strLen = str.length;

    return strLen < len ? str + repeat(chars, len - strLen): str;
};