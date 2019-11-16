const url = require('url')
const content = '<!DOCTYPE html>' +
    '<html>' +
    '    <head>' +
    '        <meta charset="utf-8" />' +
    '        <title>ECE AST</title>' +
    '    </head>' + 
    '    <body>' +
    '         <p>Hello world!</p>' +
    '    </body>' +
    '</html>'

module.exports = {
  serverHandle: function (req, res) {
    const route = url.parse(req.url)
      
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(content)
    res.end();
  }};