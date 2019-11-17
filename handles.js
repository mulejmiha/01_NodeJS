const url = require('url') // Import Node url module
const qs = require('querystring')

module.exports = {
  serverHandle: function (req, res) {
    const route = url.parse(req.url)
    const path = route.pathname // Retrieve and print the current path
    const params = qs.parse(route.query)   // Retrieve and print the queryParams
      
    res.writeHead(200, {'Content-Type': 'text/html'});


    if (path === '/hello' && 'Name' in params) {      
      if(params['Name'] == 'Miha'){
        res.write('Hello ' + params['Name'] + ' whats up')
      }else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('Who is this?')
      }
    } else {
      res.write('Hello anonymous')
    }
  
    const queryParams = qs.parse(url.parse(req.url).query);
    console.log(queryParams);

    res.end(); //
  }};