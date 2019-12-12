const queue = new PriorityQueue(function(a, b) {
    if (a.priority > b.priority) return 1;
    if (a.priority === b.priority) return -1;
    return 0;
});
queue.enqueue({
    priority: 1000,
    value: 'apple'
});
queue.enqueue({
    priority: 500,
    value: 'orange'
});
expect(queue.size).to.equal(2);
expect(queue.dequeue()).to.eql({ priority: 1000, value: 'apple' });
expect(queue.peek()).to.eql({ priority: 500, value: 'orange' });
queue.clear();
expect(queue.size).to.equal(0);
