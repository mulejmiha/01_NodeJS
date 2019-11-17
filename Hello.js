
const http = require('http') // Import a module
const url = require('url') // Import Node url module
const qs = require('querystring')
const content = '<!DOCTYPE html>' +
    '<html>' +
    '    <head>' +
    '        <meta charset="utf-8" />' +
    '        <title>ECE AST</title>' +
    '    </head>' + 
    '    <body>' +
    '         <p>Hello World !</p>' +
    '    </body>' +
    '</html>'

const serverHandle = function (req, res) {
  const route = url.parse(req.url)
  const path = route.pathname // Retrieve and print the current path
  const params = qs.parse(route.query)   // Retrieve and print the queryParams
  
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  if (path === '/hello' && 'name' in params) {
    if(params['name'] == 'Miha'){
      res.write('Hello ' + params['name'] + 'Whats up')
    }else {
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.write('Not found man ')
    }
  } else {
    res.write('Hello anonymous')
  }

  const queryParams = qs.parse(url.parse(req.url).query);
  console.log(queryParams);

  res.write(content)
  res.end();
}

  http.createServer(function (req, res){
    serverHandle(req, res);
 
  }).listen(8080, "127.0.0.1")
  



// curl localhost:8080 or go to http://localhost:8080
