it('set get and html sync', function() {
    const container = document.createElement('div');
    let fromOption;
    let changed;

    const Comp = Component.extend({
        defaults: { a: 0, b: 2 },
        option: {
            a(val, oldVal) {
                fromOption = [val, oldVal];
            }
        },
        initialize(container, options) {
            this.callSuper(Component, 'initialize', [container, options]);
            this.html('<div></div>');
        }
    });

    const component = new Comp(container, { a: 1 });
    expect(component.get('a')).to.equal(1);
    expect(component.get('b')).to.equal(2);
    expect(fromOption).to.eql([1, undefined]);

    component.on('changeOption', function(name, val, oldVal) {
        changed = [name, val, oldVal];
    });
    component.set('a', 1);
    expect(changed).to.be.undefined;
    component.set('a', 3);
    expect(changed).to.eql(['a', 3, 1]);
    expect(fromOption).to.eql([3, 1]);
    component.set({ b: 4 });
    expect(changed).to.eql(['b', 4, 2]);

    component.destroy();
});

it('defaults function', function() {
    const container = document.createElement('div');
    const Comp = Component.extend({
        defaults() {
            return { n: 1 };
        },
        initialize(container, options) {
            this.callSuper(Component, 'initialize', [container, options]);
            this.html('<span class="label"></span>');
        }
    });

    const component = new Comp(container, { n: 2 });
    expect(component.get('n')).to.equal(2);
    expect(component.find('.label').length).to.equal(1);

    component.destroy();
});

it('events hash', function() {
    const container = document.createElement('div');
    document.body.appendChild(container);

    const Comp = Component.extend({
        events: {
            'click .go': 'onGo',
            click: 'onRoot'
        },
        initialize(container, options) {
            this.callSuper(Component, 'initialize', [container, options]);
            this.html('<button class="go">go</button>');
            this.clicked = 0;
            this.rootClicked = 0;
        },
        onGo() {
            this.clicked++;
        },
        onRoot() {
            this.rootClicked++;
        }
    });

    const component = new Comp(container);
    container.querySelector('button').click();
    expect(component.clicked).to.equal(1);
    expect(component.rootClicked).to.equal(1);

    component.destroy();
    document.body.removeChild(container);
});

it('listen', function() {
    const container = document.createElement('div');
    document.body.appendChild(container);

    const component = new Component(container);
    component.html('<button class="ok">ok</button>');

    let count = 0;
    component.listen('click', '.ok', function() {
        count++;
    });
    container.querySelector('button').click();
    expect(count).to.equal(1);

    component.destroy();
    expect(container.innerHTML).to.equal('');

    document.body.removeChild(container);
});

it('extend counter', function() {
    const Badge = Component.extend({
        defaults: { count: 0 },
        option: {
            count(val) {
                this.find('.count').text(String(val));
            }
        },
        initialize(container, options) {
            this.callSuper(Component, 'initialize', [container, options]);
            this.html('<span class="count"></span>');
        }
    });

    const Counter = Component.extend({
        defaults: { value: 0, disabled: false },
        option: {
            value(val) {
                this.find('.val').text(String(val));
                if (this._badge) this._badge.set('count', val);
            },
            disabled(val) {
                this.$container[val ? 'addClass' : 'rmClass']('disabled');
            }
        },
        events: {
            'click .inc': 'inc',
            'click .dec': 'dec'
        },
        initialize(container, options) {
            this.callSuper(Component, 'initialize', [container, options]);
            this.html(
                '<button class="dec">-</button>' +
                    '<span class="val"></span>' +
                    '<button class="inc">+</button>' +
                    '<span class="badge"></span>'
            );
            this._badge = new Badge(this.find('.badge').get(0), {
                count: this.get('value')
            });
        },
        destroy() {
            this._badge.destroy();
            this.callSuper(Component, 'destroy');
        },
        inc() {
            if (this.get('disabled')) return;
            this.set('value', this.get('value') + 1);
            this.emit('change', this.get('value'));
        },
        dec() {
            if (this.get('disabled')) return;
            this.set('value', this.get('value') - 1);
            this.emit('change', this.get('value'));
        }
    });

    const container = document.createElement('div');
    document.body.appendChild(container);
    const counter = new Counter(container, { value: 1 });
    expect(counter.get('value')).to.equal(1);
    expect(counter.find('.val').text()).to.equal('1');
    expect(counter._badge.find('.count').text()).to.equal('1');

    let changed = 0;
    counter.on('change', function(val) {
        changed = val;
    });
    container.querySelector('.inc').click();
    expect(counter.get('value')).to.equal(2);
    expect(changed).to.equal(2);
    expect(counter._badge.find('.count').text()).to.equal('2');

    counter.set('disabled', true);
    expect(counter.$container.hasClass('disabled')).to.be.true;

    counter.destroy();
    document.body.removeChild(container);
});
