const os = require('os');
const homeDir = os.homedir();

const isWindows = util.isWindows;

it('basic', function() {
    if (isWindows) {
        expect(tildify(homeDir + '\\dev')).to.equal('~\\dev');
    } else {
        expect(tildify(homeDir + '/dev')).to.equal('~/dev');
        expect(tildify('/usr/dev')).to.equal('/usr/dev');
    }
});
