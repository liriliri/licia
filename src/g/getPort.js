/* Get an available TCP port.
 *
 * |Name  |Type        |Desc           |
 * |------|------------|---------------|
 * |[port]|number array|Preferred ports|
 * |return|Promise     |Available port |
 *
 * If preferred ports are not available, a random port will be returned.
 */

/* example
 * getPort([3000, 3001]).then(port => {
 *     console.log(port);
 * });
 */

/* module
 * env: node
 * test: node
 * since: 1.1.0
 */

/* typescript
 * export declare function getPort(port?: number | number[]): Promise<number>;
 */

_('toArr');

const net = require('net');

exports = function(ports) {
    ports = toArr(ports);
    ports.push(0);

    return ports.reduce((seq, port) => {
        return seq.catch(() => isAvailable(port));
    }, Promise.reject());
};

// Passing 0 will get an available random port.
function isAvailable(port) {
    return new Promise((resolve, reject) => {
        const server = net.createServer();

        server.unref();
        server.on('error', reject);
        const options = {};
        options.port = port;
        server.listen(options, () => {
            const { port } = server.address();
            server.close(() => {
                resolve(port);
            });
        });
    });
}
