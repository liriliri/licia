/* Pipe all streams together.
 *
 * |Name      |Desc           |
 * |----------|---------------|
 * |...streams|Streams to pipe|
 */

/* example
 * const fs = require('fs');
 * const through = require('licia/through');
 * pipe(
 *     fs.createReadStream('in.txt'),
 *     through(function(chunk, enc, cb) {
 *         this.push(chunk);
 *         cb();
 *     }),
 *     fs.createWriteStream('out.txt')
 * );
 */

/* module
 * env: node
 */

/* typescript
 * import stream = require('stream');
 * export declare function pipe(...streams: stream.Stream[]): void;
 */

_('reduce');

exports = function(...streams) {
    reduce(streams, (from, to) => from.pipe(to));
};
