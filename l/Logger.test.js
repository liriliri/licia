it('basic', function () 
{
    var logger = new Logger('Eris', Logger.level.ERROR);
    expect(logger.name).to.equal('Eris');
    expect(logger.getLevel()).to.equal(Logger.level.ERROR);

    function all(type, argList) 
    {
        expect(type).to.equal(type);
        expect(argList).to.eql(['test', 'test2']);
    }

    logger.on('all', all).debug('test', 'test2').off('all', all);

    function info(argList) 
    {
        expect(argList).to.eql(['test']);
    }
    logger.level = Logger.level.INFO;
    logger.on('trace', info).info('test').off('trace', info);

    logger.formatter = function (type, argList) 
    {
        argList.unshift(this.name + ' ' + new Date().getTime());

        return argList;
    };
    logger.trace('test').debug('test').warn('test').error('test');

    logger.setLevel('silent');
    expect(logger.getLevel()).to.equal(Logger.level.SILENT);
});