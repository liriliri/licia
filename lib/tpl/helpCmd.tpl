Usage:

<% util.each(usage, function (value) { %>    <%=util.cyan('licia')%> <%=value%> <%='\n'%><% }); %>
<% if (options) { %>Options:
<%     util.each(options, function (option) { %>    <%=util.yellow(util.rpad((option.shorthand ? option.shorthand + ', ' : '    ') + option.flag, 18))%><%=option.desc%><%='\n'%><% }); %>
<% } %>Description:

    <%=desc%>