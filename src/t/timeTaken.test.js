it('basic', function() {
    const execTime = timeTaken(function() {
        for (let i = 0; i < 10000; i++);
    });

    expect(execTime).to.be.a('number');
});
