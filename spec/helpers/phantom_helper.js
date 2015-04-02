var phantom = require('phantom');

var PORT = process.env.PORT || 4010;
var URL_ROOT = 'http://localhost:' + PORT;

visit = function(path, callback) {
  phantom.create(function(ph) {
    ph.createPage(function(page) {
      var url = URL_ROOT + path;
      page.open(url, function(status) {
        callback(ph, page, status);
      });
    });
  });
};
