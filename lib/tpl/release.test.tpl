const chai = require('chai');
const <%=modName%> = require('licia/<%=modName%>');

const expect = chai.expect;

describe('<%=modName%>', function () {
<%=testHelper%>

<%=data%>
});
