const last = util.last;

it('basic', () => {
    const comments = [];
    const starts = [];
    const texts = [];
    const ends = [];

    parseHtml(
        `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
        </head>
        <body>
            <!--start-->            
            <!--end-->
            <script>
                for (let i = 0; i < 10000; i++) {
                    console.log(i);
                }
            </script>            
        </body>
        </html>
    `,
        {
            comment(text) {
                comments.push(text);
            },
            text(text) {
                texts.push(text);
            },
            start(tag, attrs) {
                starts.push({
                    tag,
                    attrs
                });
            },
            end(tag) {
                ends.push(tag);
            }
        }
    );

    expect(comments).to.eql(['start', 'end']);
    expect(texts.length).to.equal(18);
    expect(starts.length).to.equal(8);
    expect(starts[0]).to.eql({
        tag: 'html',
        attrs: {
            lang: 'en'
        }
    });
    expect(last(ends)).to.equal('html');
});
