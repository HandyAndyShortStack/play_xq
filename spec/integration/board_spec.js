describe('the board', function() {

  it('exists', function(done) {
    visit('/', function(phantom, page, status) {
      page.evaluate(function() {
        return $('svg').length;
      }, function(value) {
        expect(value).toBeGreaterThan(0);
        phantom.exit();
        done();
      });
    });
  });

  it('has pieces on it', function(done) {
    visit('/', function(phantom, page, status) {
      page.evaluate(function() {
        return $('svg').find('image').length;
      }, function(value) {
        expect(value).toEqual(32);
        phantom.exit();
        done();
      });
    });
  });
});
