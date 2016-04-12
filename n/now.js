/* Gets the number of milliseconds that have elapsed since the Unix epoch. */

now = Date.now || function ()
{
    return new Date().getTime();
};