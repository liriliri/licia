it('inherit prototype methods', function ()
{
    function People(name)
    {
        this._name = name;
    }
    People.prototype = {
        getName: function ()
        {
            return this._name;
        },
        is: function ()
        {
            return 'People';
        }
    };

    function Student(name)
    {
        this._name = name;
    }
    inherits(Student, People);

    Student.prototype.is = function ()
    {
        return 'Student';
    };

    var s = new Student('redhood');

    expect(s.getName()).to.equal('redhood');
    expect(s.is()).to.equal('Student');
    expect(s instanceof People).to.be.true;
});