var nodeStatic = require('node-static');
var cowsay = require('cowsay');

var file = new nodeStatic.Server('./build');
var port = process.env.PORT || 4010;

require('http').createServer(function (request, response) {
  request.addListener('end', function () {
    file.serve(request, response);
  }).resume();
}).listen(port);

console.log(cowsay.say({
  text: 'Your server is up and running on port ' + port + ', boss!',
  e: 'oO',
  T: 'U '
}));
