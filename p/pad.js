// TODO

/* function
 * pad: Pads string on the left and right sides if it's shorter than length.
 * string(string): The string to pad.
 * length(number): The padding length.
 * chars(string): The string used as padding.
 */

_('repeat');

pad = function (str, len, chars)
{
    var padLen = len - str.length;

    return repeat(chars, Math.ceil(padLen / 2)) + str +
           repeat(chars, Math.floor(padLen /2));
};