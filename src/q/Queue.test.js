it('basic', function() {
    const queue = new Queue();

    expect(queue.size).to.equal(0);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).to.equal(2);
    expect(queue.size).to.equal(1);
    expect(queue.peek()).to.equal(3);
    expect(queue.size).to.equal(1);

    expect(queue.toArr()).to.eql([3]);

    queue.clear();
    expect(queue.dequeue()).to.be.an('undefined');
    expect(queue.peek()).to.be.an('undefined');
});

it('forEach', function() {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);

    let sum = 0;

    queue.forEach(function(val) {
        sum += val;
    });

    expect(sum).to.equal(10);

    sum = 0;

    queue.forEach(function(val, i) {
        sum += val + this[i];
    }, queue.toArr());

    expect(sum).to.equal(20);
});
