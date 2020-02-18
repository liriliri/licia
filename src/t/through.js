/* Tiny wrapper of stream Transform.
 *
 * |Name     |Desc                        |
 * |---------|----------------------------|
 * |opts={}  |Options to initialize stream|
 * |transform|Transform implementation    |
 * |flush    |Flush implementation        |
 *
 * ### obj
 *
 * Shortcut for setting objectMode to true.
 *
 * ### ctor
 *
 * Return a class that extends stream Transform.
 */

/* example
 * const fs = require('fs');
 * fs.createReadStream('in.txt')
 *     .pipe(through(function (chunk, enc, cb) {
 *         // Do something to chunk
 *         this.push(chunk);
 *         cb();
 *     })).pipe(fs.createWriteStream('out.txt'));
 */

/* module
 * env: node
 */

/* typescript
 * import stream = require('stream');
 * export declare namespace through {
 *     interface ThroughConstructor extends stream.Transform {
 *         new (opts?: stream.DuplexOptions): stream.Transform;
 *         (opts?: stream.DuplexOptions): stream.Transform;
 *     }
 *     type TransformCallback = (err?: any, data?: any) => void;
 *     type TransformFunction = (
 *         this: stream.Transform,
 *         chunk: any, enc: string,
 *         callback: TransformCallback
 *     ) => void;
 *     type FlushCallback = (
 *         this: stream.Transform,
 *         flushCallback: () => void
 *     ) => void;
 *     function obj(
 *         transform?: TransformFunction,
 *         flush?: FlushCallback
 *     ): stream.Transform;
 *     function ctor(
 *         transform?: TransformFunction,
 *         flush?: FlushCallback
 *     ): ThroughConstructor;
 *     function ctor(
 *         opts?: stream.DuplexOptions,
 *         transform?: TransformFunction,
 *         flush?: FlushCallback
 *     ): ThroughConstructor;
 * }
 * export declare function through(
 *     transform?: through.TransformFunction,
 *     flush?: through.FlushCallback
 * ): stream.Transform;
 * export declare function through(
 *     opts?: stream.DuplexOptions,
 *     transform?: through.TransformFunction,
 *     flush?: through.FlushCallback
 * ): stream.Transform;
 */

_('isFn extend inherits');

const Transform = require('stream').Transform;

exports = through(function(opts, transform, flush) {
    const t = new Transform(opts);

    t._transform = transform;
    if (flush) t._flush = flush;

    return t;
});

exports.obj = through(function(opts, transform, flush) {
    const t = new Transform(
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

    const proto = Through.prototype;
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
