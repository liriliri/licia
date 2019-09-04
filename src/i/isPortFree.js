/* Check if a TCP port is free.
 *
 * |Name  |Type   |Desc                      |
 * |------|-------|--------------------------|
 * |port  |number |TCP port                  |
 * |[host]|string |Host address              |
 * |return|Promise|True if given port is free|
 */

/* example
 * isPortFree(3000).then(isFree => {
 *     // Do something.
 * });
 */

/* module
 * env: node
 * test: node
 * since: 1.5.2
 */

/* typescript
 * export declare function isPortFree(
 *     port: number,
 *     host?: string
 * ): Promise<boolean>;
 */

const net = require('net');

exports = function(port, host) {
    return new Promise(resolve => {
        const server = net.createServer();

        server.unref();
        server.on('error', () => resolve(false));
        const options = {
            port
        };
        if (host) options.host = host;
        server.listen(options, () => {
            server.close(() => {
                resolve(true);
            });
        });
    });
};
