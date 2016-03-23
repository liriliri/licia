evalCss = function (css)
{
    var style = document.createElement('style');
    style.textContent = css;
    style.type = 'text/css';
    document.body.appendChild(style);
};