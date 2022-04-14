/* Read cgroup metrics inside container.
 */

/* module
 * env: node
 * test: manual
 */

_('memoize each trim toNum');

const fs = require('fs');

const cpu = {
    stat() {
        let usage = 0;
        let user = 0;
        let system = 0;
        if (isV2()) {
            const data = parseKeyValue(read('cpu.stat'));
            usage = toNum(data['usage_usec']);
            user = toNum(data['user_usec']);
            system = toNum(data['system_usec']);
        }

        return {
            usage,
            user,
            system
        };
    }
};

const isV2 = memoize(function() {
    return fs.existsSync(resolve('cgroup.controllers'));
});

function read(p) {
    return fs.readFileSync(resolve(p), 'utf8');
}

function parseKeyValue(data) {
    const ret = {};

    each(data.split('\n'), line => {
        line = trim(line);
        if (line) {
            line = line.split(/\s+/);
            ret[line[0]] = line[1];
        }
    });

    return ret;
}

function resolve(p) {
    return `/sys/fs/cgroup/${p}`;
}

exports = {
    cpu,
    version() {
        return isV2() ? 2 : 1;
    }
};
