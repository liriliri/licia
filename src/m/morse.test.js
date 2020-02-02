const txt = 'Hello, world.';
const morseCode =
    '.... . .-.. .-.. --- --..-- ....... .-- --- .-. .-.. -.. .-.-.-';

expect(morse.encode(txt)).to.equal(morseCode);
expect(morse.decode(morseCode)).to.equal(util.upperCase(txt));
