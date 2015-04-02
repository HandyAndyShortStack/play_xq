describe('piece movement', function() {

  it('highlights a piece in response to a click event', function(done) {
    visit('/', function(phantom, page, status) {
      page.evaluate(function() {
        $('image[data-rank=7][data-file=7]').click();
        return $('circle[data-rank=7][data-file=7]').length;
      }, function(value) {
        expect(value).toEqual(1);
        phantom.exit();
        done();
      });
    });
  });

  it('highlights possible moves for the selected piece', function(done) {
    visit('/', function(phantom, page, status) {
      page.evaluate(function() {
        $('image[data-rank=6][data-file=6]').click();
        return $('circle').length;
      }, function(value) {
        expect(value).toEqual(2);
        phantom.exit();
        done();
      });
    });
  });
});
