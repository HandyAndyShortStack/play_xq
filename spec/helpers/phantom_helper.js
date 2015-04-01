phantom = require('phantom');

visit = function(url, callback) {
  phantom.create(function(ph) {
    ph.createPage(function(page) {
      page.open('http://localhost:4010', function(status) {
        callback(ph, page, status, function() {
          ph.exit();
        });
      });
    });
  });
};
