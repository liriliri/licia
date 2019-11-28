let linkedList;

beforeEach(function() {
    linkedList = new LinkedList();
});

it('basic', function() {
    expect(linkedList.push(5)).to.equal(1);
    expect(linkedList.push(4)).to.equal(2);
    expect(linkedList.toArr()).to.eql([5, 4]);

    expect(linkedList.pop()).to.equal(4);
    expect(linkedList.pop()).to.equal(5);
    expect(linkedList.pop()).to.be.an.undefined;
    expect(linkedList.size).to.equal(0);
    expect(linkedList.toArr()).to.eql([]);

    expect(linkedList.unshift(5)).to.equal(1);
    expect(linkedList.unshift(4)).to.equal(2);
    expect(linkedList.toArr()).to.eql([4, 5]);

    expect(linkedList.shift()).to.equal(4);
    expect(linkedList.shift()).to.equal(5);
    expect(linkedList.shift()).to.be.an.undefined;
    expect(linkedList.size).to.equal(0);
    expect(linkedList.toArr()).to.eql([]);

    linkedList.push(5);
    linkedList.push(4);
    const node = linkedList.tail;
    linkedList.push(3);
    expect(linkedList.find(value => value === 4)).to.equal(node);
    linkedList.rmNode(node);
    expect(linkedList.toArr()).to.eql([5, 3]);
});

it('forEach', function() {
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    let sum = 0;

    linkedList.forEach(function(val) {
        sum += val;
    });

    expect(sum).to.equal(10);
});
