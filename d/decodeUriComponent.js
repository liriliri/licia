/* Better decodeURIComponent that does not throw if input is invalid.
 *
 * |Name  |Type  |Desc            |
 * |------|------|----------------|
 * |str   |string|String to decode|
 * |return|string|Decoded string  |
 * 
 * ```javascript
 * decodeUriComponent('%%25%'); // -> '%%%'
 * ```
 */ 

/* module
 * env: all
 * test: all
 */ 

_('each ucs2 map utf8');

function exports(str) 
{
    try 
    {
        return decodeURIComponent(str);
    } catch (e) 
    {
        var replaceMap = {};

        var matches = str.match(regMatcher);

        each(matches, function (match) 
        {
            str = str.replace(match, decode(match));
        });

        return str;
    }
} 

function decode(str) 
{
    str = str.split('%').slice(1);
    
    var bytes = map(str, hexToInt);

    str = ucs2.encode(bytes);
    str = utf8.decode(str);

    return str;
}

function hexToInt(numStr) 
{
    return +('0x' + numStr);
}

var regMatcher = /(%[a-f0-9]{2})+/gi;
