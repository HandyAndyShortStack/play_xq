describe('Phantom', function() {

  it('can sucessfully load a page', function(done) {
    visit('/', function(phantom, page, status) {
      expect(status).toEqual('success');
      phantom.exit();
      done();
    });
  });

  it('can execute javascript on the page', function(done) {
    visit('/', function(phantom, page, status) {
      page.evaluate(function() {
        return document.title;
      }, function(value) {
        expect(value).toMatch('xiangqi');
        phantom.exit();
        done();
      });
    });
  });
});
