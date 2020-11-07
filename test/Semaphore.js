it('basic', done => {
    let num = 0;

    const sem = new Semaphore(1);
    for (let i = 0; i < 10; i++) {
        sem.wait(() => {
            num++;
            setTimeout(() => sem.signal(), 20);
        });
    }
    expect(num).to.equal(1);
    setTimeout(() => {
        expect(num).to.equal(10);
        done();
    }, 500);
});
