// TODO

var regSpace = /^\s+/;

ltrim = function (str, chars)
{
    if (chars == null) return str.replace(regSpace, '');

    var start   = 0,
        len     = str.length,
        charLen = chars.length,
        found   = true,
        i, c;

    while (found && start < len)
    {
        found = false;
        i = -1;
        c = str.charAt(start);

        while (++i < charLen)
        {
            if (c === chars[i])
            {
                found = true;
                start++;
                break;
            }
        }
    }

    return (start >= len) ? '' : str.substr(start, len);
};