it('prop', function() {
    const obj = { b: { c: 3 }, d: 4, e: 5 };

    defineProp(obj);

    defineProp(obj, 'a', {
        get: function() {
            return this.e * 2;
        }
    });
    expect(obj.a).to.equal(10);

    defineProp(obj, 'b.c', {
        set: function(val) {
            this.e = val;
        }.bind(obj)
    });
    obj.b.c = 2;
    expect(obj.a).to.equal(4);

    defineProp(obj, 'b.d.a', {
        get: function() {
            return 2;
        }
    });
    expect(obj.b.d.a).to.equal(2);
});

it('props', function() {
    const obj = { a: 1, b: 2, c: 3 };
    defineProp(obj, {
        a: {
            get: function() {
                return this.c;
            }
        },
        b: {
            set: function(val) {
                this.c = val / 2;
            }
        }
    });
    expect(obj.a).to.equal(3);
    obj.b = 4;
    expect(obj.a).to.equal(2);
});
