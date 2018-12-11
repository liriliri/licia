const regStartOneSpace = /^ /gm;

exports = function(data) {
    return data.replace(regStartOneSpace, '');
}