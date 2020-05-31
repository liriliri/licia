/* scripts
 * before: npm i --prefix .licia ws && node ./lib/server start Socket
 * after: node ./lib/server stop Socket
 */

it('basic', done => {
    const ws = new Socket('ws://localhost:8001');
    ws.on('message', e => {
        expect(e.data).to.equal('Hello');
        ws.close(1000, 'Normal Closure');
    });
    ws.on('open', () => {
        ws.send('Hello');
    });
    ws.on('close', e => {
        expect(e.code).to.equal(1000);
        expect(e.reason).to.equal('Normal Closure');
        done();
    });
});

it('reconnect', done => {
    const ws = new Socket('ws://localhost:8001');
    let first = true;
    ws.on('open', () => {
        if (first) {
            ws.close(3001);
            first = false;
        } else {
            ws.close(1000);
        }
    });
    ws.on('close', e => {
        if (e.code === 1000) {
            done();
        }
    });
});
