/* Use Blob when available, otherwise BlobBuilder.
 *
 * ### constructor
 *
 * |Name   |Desc      |
 * |-------|----------|
 * |parts  |Blob parts|
 * |options|Options   |
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
    function Blob(parts, options) {
        options = options || {};

        const blobBuilder = new BlobBuilder();

        each(parts, function(part) {
            blobBuilder.append(part);
        });

        return options.type
            ? blobBuilder.getBlob(options.type)
            : blobBuilder.getBlob();
    };

const BlobBuilder =
    root.BlobBuilder ||
    root.WebKitBlobBuilder ||
    root.MSBlobBuilder ||
    root.MozBlobBuilder;
