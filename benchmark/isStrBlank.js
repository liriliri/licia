const trim = util.trim;
const randomId = util.randomId;
const each = util.each;

const tests = [
    ' ',
    randomId(1000),
    ` ${randomId(1000)} `,
    ` ${randomId(1000, ' \n\r\t\f\v')}`
];

benchmark({
    trim() {
        each(tests, test => trim(test) === '');
    },
    licia() {
        each(tests, test => isStrBlank(test));
    }
});
