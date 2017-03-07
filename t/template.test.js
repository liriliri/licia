it('basic', function ()
{
    expect(template('Hello <%= name %>!')({name: 'eris'})).to.equal('Hello eris!');
    expect(template('<p><%- name %></p>')({name: '<eris>'})).to.equal('<p>&lt;eris&gt;</p>');
    expect(template('<%if (echo) {%>Hello eris!<%}%>')({echo: true})).to.equal('Hello eris!');
});