Usage:

<% util.each(usage, function (value) { %>    <%=util.cyan('licia')%> <%=value%><%='\n'%><% }); %>
Commands:

<% util.each(commands, function (command, key) { %>    <%=util.yellow(util.rpad(key, 10))%> <%=command%><%='\n'%><% }); %>
Run '<%=util.cyan('licia help <command>')%>' for more information on a specific command.