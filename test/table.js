const stripIndent = util.stripIndent;

const data = [
    ['', 'firstName', 'lastName'],
    ['daughter', 'Emily', 'Smith'],
    ['father', 'John', 'Smith'],
    ['mother', 'Jane', 'Smith']
];

it('stringify', () => {
    test([
        data,
        stripIndent`
            ┌──────────┬───────────┬──────────┐
            │          │ firstName │ lastName │
            ├──────────┼───────────┼──────────┤
            │ daughter │ Emily     │ Smith    │
            ├──────────┼───────────┼──────────┤
            │ father   │ John      │ Smith    │
            ├──────────┼───────────┼──────────┤
            │ mother   │ Jane      │ Smith    │
            └──────────┴───────────┴──────────┘`
    ]);
});

it('custom table borders', () => {
    test([
        data,
        {
            border: {
                topJoin: '─',
                bodyJoin: ' ',
                joinJoin: '─',
                bottomJoin: '─'
            }
        },
        stripIndent`
            ┌─────────────────────────────────┐
            │            firstName   lastName │
            ├─────────────────────────────────┤
            │ daughter   Emily       Smith    │
            ├─────────────────────────────────┤
            │ father     John        Smith    │
            ├─────────────────────────────────┤
            │ mother     Jane        Smith    │
            └─────────────────────────────────┘`
    ]);
});

it('parse', () => {
    expect(
        table.parse(`
            ┌──────────┬───────────┬──────────┐
            │          │ firstName │ lastName │ 
            ├──────────┼───────────┼──────────┤
            │ daughter │ Emily     │ Smith    │
            ├──────────┼───────────┼──────────┤
            │ father   │ John      │ Smith    │
            ├──────────┼───────────┼──────────┤
            │ mother   │ Jane      │ Smith    │
            └──────────┴───────────┴──────────┘`)
    ).to.eql(data);
    expect(
        table.parse(
            `
                     firstName lastName
            daughter Emily     Smith
            father   John      Smith
            mother   Jane      Smith`,
            {
                border: {
                    bodyLeft: '',
                    bodyJoin: ' ',
                    bodyRight: ''
                }
            }
        )
    ).to.eql(data);
    expect(
        table.parse(`
            ┌─────┬───────┬───────┬─────────────────┐
            │  PID│TTY    │TIME   │CMD              │
            ├─────┼───────┼───────┼─────────────────┤
            │68667│ttys000│0:00.01│login -fp runzisu│
            └─────┴───────┴───────┴─────────────────┘`)
    ).to.eql([
        ['PID', 'TTY', 'TIME', 'CMD'],
        ['68667', 'ttys000', '0:00.01', 'login -fp runzisu']
    ]);
    expect(
        table.parse(
            `
              PID TTY           TIME CMD
            68667 ttys000    0:00.01 login -fp runzisu`,
            {
                border: {
                    bodyLeft: '',
                    bodyJoin: ' ',
                    bodyRight: ''
                }
            }
        )
    ).to.eql([
        ['PID', 'TTY', 'TIME', 'CMD'],
        ['68667', 'ttys000', '0:00.01', 'login -fp runzisu']
    ]);
    expect(
        table.parse(
            `  
              PID USER         PR  NI VIRT  RES  SHR S %CPU %MEM     TIME+ ARGS
            19132 shell        20   0 2.0G 4.0M 3.0M R 27.7  0.1   0:00.13 top -n 1
            11635 shell        20   0 2.0G 1.9M 1.8M S  5.5  0.0   5:15.83 process-tracker --interval 1000`,
            {
                border: {
                    bodyLeft: '',
                    bodyJoin: ' ',
                    bodyRight: ''
                }
            }
        )
    ).to.eql([
        [
            'PID',
            'USER',
            'PR',
            'NI',
            'VIRT',
            'RES',
            'SHR',
            'S',
            '%CPU',
            '%MEM',
            'TIME+',
            'ARGS'
        ],
        [
            '19132',
            'shell',
            '20',
            '0',
            '2.0G',
            '4.0M',
            '3.0M',
            'R',
            '27.7',
            '0.1',
            '0:00.13',
            'top -n 1'
        ],
        [
            '11635',
            'shell',
            '20',
            '0',
            '2.0G',
            '1.9M',
            '1.8M',
            'S',
            '5.5',
            '0.0',
            '5:15.83',
            'process-tracker --interval 1000'
        ]
    ]);
});
