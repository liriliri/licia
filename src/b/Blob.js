/* Use Blob when available, otherwise BlobBuilder.
 *
 * ### constructor
 *
 * |Name |Desc      |
 * |-----|----------|
 * |parts|Blob parts|
 * |opts |Options   |
 */

/* example
 * const blob = new Blob([]);
 */

/* module
 * env: browser
 */

/* typescript
 */

_('root each');

exports =
    root.Blob ||
    function Blob(parts, opts) {
        opts = opts || {};

        const blobBuilder = new BlobBuilder();

        each(parts, function(part) {
            blobBuilder.append(part);
        });

        return opts.type
            ? blobBuilder.getBlob(opts.type)
            : blobBuilder.getBlob();
    };

const BlobBuilder =
    root.BlobBuilder ||
    root.WebKitBlobBuilder ||
    root.MSBlobBuilder ||
    root.MozBlobBuilder;
