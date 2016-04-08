// TODO

/* function
 * camelCase: Convert string to "camelCase" text.
 */

camelize = function (str, char)
{
    char = char || '-';

    return str.replace(new RegExp(char + '+(.)?', 'g'), function (match, char)
    {
        return char ? char.toUpperCase() : '';
    });
};