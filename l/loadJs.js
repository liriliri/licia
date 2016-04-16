/* Inject script tag into page with given src value.
 */

exports = function (url, cb)
{
    var script = document.createElement('script');
    script.src = url;
    script.onload = function ()
    {
        var isNotLoaded = script.readyState &&
            script.readyState != "complete" &&
            script.readyState != "loaded";

        cb && cb(!isNotLoaded);
    };
    document.body.appendChild(script);
};