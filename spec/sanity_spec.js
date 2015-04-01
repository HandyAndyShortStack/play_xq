describe('Phantom', function() {

  it('can sucessfully load a page', function(done) {
    visit('localhost:4010', function(ph, page, status) {
      expect(status).toEqual('success');
      ph.exit();
      done();
    });
  });

  it('loads the page title', function(done) {
    visit('localhost:4010', function(ph, page, status) {
      page.evaluate(function() {
        return document.title;
      }, function(value) {
        expect(value).toMatch('xiangqi');
        ph.exit();
        done();
      });
    });
  });
});
