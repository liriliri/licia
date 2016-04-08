/* function
 * now: Gets the number of milliseconds that have elapsed since the Unix epoch.
 * return(number): Current timestamp.
 */

now = Date.now || function ()
{
    return new Date().getTime();
};