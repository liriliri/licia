/* Gets the number of milliseconds that have elapsed since the Unix epoch. */

exports = Date.now || function ()
{
    return new Date().getTime();
};