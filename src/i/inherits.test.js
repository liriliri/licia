it('basic', function() {
    function People(name) {
        this._name = name;
    }
    People.prototype = {
        getName: function() {
            return this._name;
        },
        is: function() {
            return 'People';
        }
    };

    function Student(name) {
        this._name = name;
    }
    inherits(Student, People);

    Student.prototype.is = function() {
        return 'Student';
    };

    const s = new Student('RedHood');

    expect(s.getName()).to.equal('RedHood');
    expect(s.is()).to.equal('Student');
    expect(s instanceof People).to.be.true;
});
