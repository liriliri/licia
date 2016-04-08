// TODO

var regSpace = /\s+$/;

rtrim = function (str, chars)
{
    if (chars == null) return str.replace(regSpace, '');

    var end     = str.length - 1,
        charLen = chars.length,
        found   = true,
        i, c;

    while (found && end >= 0)
    {
        found = false;
        i = -1;
        c = str.charAt(end);

        while (++i < charLen)
        {
            if (c === chars[i])
            {
                found = true;
                end--;
                break;
            }
        }
    }

    return (end >= 0) ? str.substring(0, end + 1) : '';
};