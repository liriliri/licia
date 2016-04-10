/* Convert string to "camelCase" text.
 *
 * |Name|Type|Desc|
 * |--------------|
 */

camelize = function (str, char)
{
    char = char || '-';

    return str.replace(new RegExp(char + '+(.)?', 'g'), function (match, char)
    {
        return char ? char.toUpperCase() : '';
    });
};