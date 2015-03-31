var phantom = require('phantom');

describe('Phantom', function() {
  var ph;
  var page;
  var status;

  beforeEach(function(done) {
    phantom.create(function(_ph) {
      ph = _ph;
      ph.createPage(function(_page) {
        page = _page;
        page.open('http://localhost:4010', function(_status) {
          status = _status
          done();
        });
      });
    });
  });

  afterEach(function() {
    ph.exit();
  });

  it('can sucessfully load a page', function() {
    expect(status).toEqual('success');
  });

  it('loads the page title', function(done) {
    page.evaluate(function() {
      return document.title;
    }, function(value) {    
      expect(value).toMatch('xiangqi');
      done()
    });
  });

  afterAll(function() {
    ph.exit();
  })
})
