tests((tpl, data, util) => template(tpl, util)(data))([
    ['Hello <%= name %>!', { name: 'licia' }, 'Hello licia!'],
    ['<p><%- name %></p>', { name: '<licia>' }, '<p>&lt;licia&gt;</p>'],
    ['<%if (echo) {%>Hello licia!<%}%>', { echo: true }, 'Hello licia!'],
    [
        '<p><%= util["upperCase"](name) %></p>',
        { name: 'licia' },
        {
            upperCase: function(str) {
                return str.toLocaleUpperCase();
            }
        },
        '<p>LICIA</p>'
    ],
    [
        '<p>\u2028<%= "\\u2028\\u2029" %>\u2029</p>',
        '<p>\u2028\u2028\u2029\u2029</p>'
    ]
]);
