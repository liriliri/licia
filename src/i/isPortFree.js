/* Check if a TCP port is free.
 *
 * |Name  |Type   |Desc                      |
 * |------|-------|--------------------------|
 * |port  |number |TCP port                  |
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
 * export declare function isPortFree(port: number): boolean;
 */

const net = require('net');

exports = function(port) {
    return new Promise(resolve => {
        const server = net.createServer();

        server.unref();
        server.on('error', () => resolve(false));
        server.listen(
            {
                port
            },
            () => {
                server.close(() => {
                    resolve(true);
                });
            }
        );
    });
};
