const stripIndent = util.stripIndent;

it('basic', () => {
    test(
        stripIndent`
        .name {
            background: #000;
            color: red;
        }`,
        [
            {
                type: 'rule',
                selector: '.name',
                declarations: [
                    {
                        type: 'declaration',
                        property: 'background',
                        value: '#000'
                    },
                    {
                        type: 'declaration',
                        property: 'color',
                        value: 'red'
                    }
                ]
            }
        ]
    );
});

it('comment', () => {
    expect(css.stringify(css.parse('/* comment */'))).to.equal('');
});

it('media', () => {
    test(
        stripIndent`
        @media only screen and (max-width: 600px) {
            body {
                background-color: black;
            }
        }`,
        [
            {
                type: 'media',
                media: 'only screen and (max-width: 600px)',
                rules: [
                    {
                        type: 'rule',
                        selector: 'body',
                        declarations: [
                            {
                                type: 'declaration',
                                property: 'background-color',
                                value: 'black'
                            }
                        ]
                    }
                ]
            }
        ]
    );
});

it('import charset namespace', () => {
    test('@import "custom.css";', [
        {
            type: 'import',
            import: '"custom.css"'
        }
    ]);
    test('@charset "utf-8";', [
        {
            type: 'charset',
            charset: '"utf-8"'
        }
    ]);
    test('@namespace url(http://www.w3.org/1999/xhtml);', [
        {
            type: 'namespace',
            namespace: 'url(http://www.w3.org/1999/xhtml)'
        }
    ]);
});

it('keyframes', () => {
    test(
        stripIndent`
        @-webkit-keyframes slideIn {
            from {
                transform: translateX(0%);
            }
            to {
                transform: translateX(100%);
            }
        }`,
        [
            {
                type: 'keyframes',
                name: 'slideIn',
                vendor: '-webkit-',
                keyframes: [
                    {
                        type: 'keyframe',
                        selector: 'from',
                        declarations: [
                            {
                                type: 'declaration',
                                property: 'transform',
                                value: 'translateX(0%)'
                            }
                        ]
                    },
                    {
                        type: 'keyframe',
                        selector: 'to',
                        declarations: [
                            {
                                type: 'declaration',
                                property: 'transform',
                                value: 'translateX(100%)'
                            }
                        ]
                    }
                ]
            }
        ]
    );
});

it('font-face', () => {
    test(
        stripIndent`
        @font-face {
            font-family: "Open Sans";
            src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2");
        }
        `,
        [
            {
                type: 'font-face',
                declarations: [
                    {
                        type: 'declaration',
                        property: 'font-family',
                        value: '"Open Sans"'
                    },
                    {
                        type: 'declaration',
                        property: 'src',
                        value:
                            'url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2")'
                    }
                ]
            }
        ]
    );
});

it('supports', () => {
    test(
        stripIndent`
        @supports (display: grid) {
            div {
                display: grid;
            }
        }`,
        [
            {
                type: 'supports',
                supports: '(display: grid)',
                rules: [
                    {
                        type: 'rule',
                        selector: 'div',
                        declarations: [
                            {
                                type: 'declaration',
                                property: 'display',
                                value: 'grid'
                            }
                        ]
                    }
                ]
            }
        ]
    );
});

function test(cssStr, parsedObj) {
    parsedObj = {
        type: 'stylesheet',
        rules: parsedObj
    };
    const stylesheet = css.parse(cssStr);
    expect(stylesheet).to.eql(parsedObj);
    expect(
        css.stringify(stylesheet, {
            indent: '    '
        })
    ).to.equal(cssStr);
}
