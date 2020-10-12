/* Wrap a string to a given length.
 *
 * |Name  |Desc                          |
 * |------|------------------------------|
 * |txt   |Text to wrap                  |
 * |width |Text width                    |
 * |return|String wrapped at given length|
 */

/* example
 * wordWrap('Licia is a utility library.', 10);
 * // -> 'Licia is \na utility \nlibrary.'
 */

/* module
 * env: all
 * since: 1.27.0
 */

/* typescript
 * export declare function wordWrap(txt: string, width: number): string;
 */

_('map reduce concat last trim');

exports = function(txt, width) {
    const lines = txt.split('\n');

    return map(lines, line => wrap(line, width)).join('\n');
};

const regWordBoundary = /(\S+\s+)/;

function wrap(txt, width) {
    const chunks = reduce(
        txt.split(regWordBoundary),
        (chunks, word) => {
            if (trim(word) === '') return chunks;

            if (word.length > width) {
                chunks = concat(
                    chunks,
                    word.match(new RegExp(`.{1,${width}}`, 'g'))
                );
            } else {
                chunks.push(word);
            }

            return chunks;
        },
        []
    );

    const lines = reduce(
        chunks,
        (lines, chunk) => {
            const lastLine = last(lines);
            if (lastLine.length + chunk.length > width) {
                if (trim(lastLine) === '') {
                    lines.pop();
                }
                lines.push(chunk);
            } else {
                lines[lines.length - 1] = lastLine + chunk;
            }

            return lines;
        },
        [chunks.shift()]
    );

    return lines.join('\n');
}
