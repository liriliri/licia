const str = 'Official site: http://eustia.liriliri.io';
expect(linkify(str)).to.equal(
    'Official site: <a href="http://eustia.liriliri.io">http://eustia.liriliri.io</a>'
);
expect(
    linkify(str, function(url) {
        return '<a href="' + url + '" target="_blank">' + url + '</a>';
    })
).to.equal(
    'Official site: <a href="http://eustia.liriliri.io" target="_blank">http://eustia.liriliri.io</a>'
);
