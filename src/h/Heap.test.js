it('basic', () => {
    const heap = new Heap();
    heap.add(2);
    heap.add(1);
    heap.add(4);
    heap.add(5);

    expect(heap.size).to.equal(4);
    expect(heap.poll()).to.equal(1);
    expect(heap.poll()).to.equal(2);
    expect(heap.size).to.equal(2);
    expect(heap.peek()).to.equal(4);
    expect(heap.size).to.equal(2);

    heap.clear();
    expect(heap.peek()).to.be.an('undefined');
    expect(heap.size).to.equal(0);
});

it('max', () => {
    const heap = new Heap(function(a, b) {
        return b - a;
    });
    heap.add(2);
    heap.add(1);
    heap.add(4);
    heap.add(5);

    expect(heap.poll()).to.equal(5);
    expect(heap.poll()).to.equal(4);
    expect(heap.size).to.equal(2);
});
