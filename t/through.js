/* Tiny wrapper of stream Transform.
 *
 * |Name     |Type    |Desc                        |
 * |---------|--------|----------------------------|
 * |opts={}  |Object  |Options to initialize stream|
 * |transform|function|Transform implementation    |
 * |[flush]  |function|Flush implementation        |
 * 
 * ### obj
 * 
 * Shortcut for setting objectMode to true.
 * 
 * ### ctor
 * 
 * Return a class that extends stream Transform.
 *
 * ```javascript
 * fs.createReadStream('in.txt')
 *   .pipe(through(function (chunk, enc, cb) {
 *       // Do something to chunk
 *       this.push(chunk);
 *       cb();
 *   })).pipe(fs.createWriteStream('out.txt'));
 * ```
 */

/* module
 * env: node
 * test: node
 */

_('isFn extend inherits');

var Transform = require('stream').Transform;

exports = through(function(opts, transform, flush) {
    var t = new Transform(opts);

    t._transform = transform;
    if (flush) t._flush = flush;

    return t;
});

exports.obj = through(function(opts, transform, flush) {
    var t = new Transform(
        extend(
            {
                objectMode: true,
                highWaterMark: 16
            },
            opts
        )
    );

    t._transform = transform;
    if (flush) t._flush = flush;

    return t;
});

exports.ctor = through(function(opts, transform, flush) {
    function Through(override) {
        if (!(this instanceof Through)) return new Through(override);

        Transform.call(this, extend(opts, override));
    }

    inherits(Through, Transform);

    var proto = Through.prototype;
    proto._transform = transform;
    if (flush) proto._flush = flush;

    return Through;
});

function through(streamFactory) {
    return function(opts, transform, flush) {
        if (isFn(opts)) {
            flush = transform;
            transform = opts;
            opts = {};
        }

        if (!isFn(transform)) transform = defTransform;
        if (!isFn(flush)) flush = null;

        return streamFactory(opts, transform, flush);
    };
}

function defTransform(chunk, enc, cb) {
    cb(null, chunk);
}
