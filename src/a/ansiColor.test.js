/* eslint-disable no-console */
const TEXT = 'foo bar baz';

it('colors', () => {
    [
        'black',
        'red',
        'green',
        'yellow',
        'blue',
        'magenta',
        'cyan',
        'white',
        'gray',
        'grey'
    ].forEach(color => {
        console.log(ansiColor[color](TEXT));
    });
});

it('background colors', () => {
    [
        'bgBlack',
        'bgRed',
        'bgGreen',
        'bgYellow',
        'bgBlue',
        'bgMagenta',
        'bgCyan',
        'bgWhite'
    ].forEach(color => {
        console.log(ansiColor[color](TEXT));
    });
});

it('bright colors', () => {
    [
        'blackBright',
        'redBright',
        'greenBright',
        'yellowBright',
        'blueBright',
        'magentaBright',
        'cyanBright',
        'whiteBright'
    ].forEach(color => {
        console.log(ansiColor[color](TEXT));
    });
});

it('bright background colors', () => {
    [
        'bgBlackBright',
        'bgRedBright',
        'bgGreenBright',
        'bgYellowBright',
        'bgBlueBright',
        'bgMagentaBright',
        'bgCyanBright',
        'bgWhiteBright'
    ].forEach(color => {
        console.log(ansiColor[color](TEXT));
    });
});
