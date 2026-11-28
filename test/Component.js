it('set get and html sync', function() {
    const container = document.createElement('div');
    let fromOption;
    let changed;

    class Comp extends Component {
        constructor(container, options) {
            super(container);
            this.setup(
                {
                    defaults: { a: 0, b: 2 },
                    option: {
                        a: this.onA
                    }
                },
                options
            );
            this.html('<div></div>');
        }
        onA = (val, oldVal) => {
            fromOption = [val, oldVal];
        };
    }

    const component = new Comp(container, { a: 1 });
    expect(component.get('a')).to.equal(1);
    expect(component.get('b')).to.equal(2);
    expect(fromOption).to.eql([1, undefined]);

    component.on('change', function(name, val, oldVal) {
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

    class Comp extends Component {
        constructor(container, options) {
            super(container);
            this.setup(
                {
                    defaults() {
                        return { n: 1 };
                    }
                },
                options
            );
            this.html('<span class="label"></span>');
        }
    }

    const component = new Comp(container, { n: 2 });
    expect(component.get('n')).to.equal(2);
    expect(component.find('.label').length).to.equal(1);

    component.destroy();
});

it('events hash', function() {
    const container = document.createElement('div');
    document.body.appendChild(container);

    class Comp extends Component {
        constructor(container, options) {
            super(container);
            this.setup(
                {
                    events: {
                        'click .go': this.onGo,
                        click: this.onRoot
                    }
                },
                options
            );
            this.clicked = 0;
            this.rootClicked = 0;
            this.html('<button class="go">go</button>');
        }
        onGo = () => {
            this.clicked++;
        };
        onRoot = () => {
            this.rootClicked++;
        };
    }

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

it('counter', function() {
    class Badge extends Component {
        constructor(container, options) {
            super(container);
            this.setup(
                {
                    defaults: { count: 0 },
                    option: {
                        count: this.onCount
                    }
                },
                options
            );
            this.html('<span class="count"></span>');
        }
        onCount = val => {
            this.find('.count').text(String(val));
        };
    }

    class Counter extends Component {
        constructor(container, options) {
            super(container);
            this.setup(
                {
                    defaults: { value: 0, disabled: false },
                    option: {
                        value: this.onValue,
                        disabled: this.onDisabled
                    },
                    events: {
                        'click .inc': this.inc,
                        'click .dec': this.dec
                    }
                },
                options
            );
            this.html(
                '<button class="dec">-</button>' +
                    '<span class="val"></span>' +
                    '<button class="inc">+</button>' +
                    '<span class="badge"></span>'
            );
            this._badge = new Badge(this.find('.badge').get(0), {
                count: this.get('value')
            });
        }
        onValue = val => {
            this.find('.val').text(String(val));
            if (this._badge) this._badge.set('count', val);
        };
        onDisabled = val => {
            this.$container[val ? 'addClass' : 'rmClass']('disabled');
        };
        inc = () => {
            if (this.get('disabled')) return;
            this.set('value', this.get('value') + 1);
        };
        dec = () => {
            if (this.get('disabled')) return;
            this.set('value', this.get('value') - 1);
        };
        destroy() {
            this._badge.destroy();
            super.destroy();
        }
    }

    const container = document.createElement('div');
    document.body.appendChild(container);
    const counter = new Counter(container, { value: 1 });
    expect(counter.get('value')).to.equal(1);
    expect(counter.find('.val').text()).to.equal('1');
    expect(counter._badge.find('.count').text()).to.equal('1');

    let changed;
    counter.on('change', function(name, val) {
        changed = [name, val];
    });
    container.querySelector('.inc').click();
    expect(counter.get('value')).to.equal(2);
    expect(changed).to.eql(['value', 2]);
    expect(counter._badge.find('.count').text()).to.equal('2');

    counter.set('disabled', true);
    expect(counter.$container.hasClass('disabled')).to.be.true;

    counter.destroy();
    document.body.removeChild(container);
});
