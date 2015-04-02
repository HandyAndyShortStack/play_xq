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

  it('circles available moves for the selected piece', function(done) {
    visit('/', function(phantom, page, status) {
      page.evaluate(function() {
        $('image[data-rank=7][data-file=1]').click();
        return $('circle').length;
      }, function(value) {
        expect(value).toEqual(13);
        phantom.exit();
        done();
      });
    });
  });

  it('still selects a piece if it has no available moves', function(done) {
    visit('/', function(phantom, page, status) {
      page.evaluate(function() {
        $('image[data-rank=6][data-file=4]').click();
        $('circle[data-rank=5][data-file=4]').click();
        $('image[data-rank=3][data-file=4]').click();
        $('circle[data-rank=4][data-file=4]').click();
        $('image[data-rank=7][data-file=7]').click();
        $('circle[data-rank=7][data-file=4]').click();
        $('image[data-rank=4][data-file=4]').click();
        return $('circle').length;
      }, function(value) {
        expect(value).toEqual(1);
        phantom.exit();
        done();
      });
    });
  });

  it('does not highlight a piece of the side not to move', function(done) {
    visit('/', function(phantom, page, status) {
      page.evaluate(function() {
        $('image[data-rank=3][data-file=6]').click();
        return $('circle[data-rank=3][data-file=6]').length;
      }, function(value) {
        expect(value).toEqual(0);
        phantom.exit();
        done();
      });
    });
  });

  describe('a piece is highlighted', function() {

    describe('clicking a piece', function() {

      it('highlights a new piece if it is of the side to move', function(done) {
        visit('/', function(phantom, page, status) {
          page.evaluate(function() {
            $('image[data-rank=7][data-file=7]').click();
            $('image[data-rank=6][data-file=6]').click();
            return $('circle').length;
          }, function(value) {
            expect(value).toEqual(2);
            phantom.exit();
            done();
          });
        });
      });

      it('does not highlight a new piece if it is not of the side to move', function(done) {
        visit('/', function(phantom, page, status) {
          page.evaluate(function() {
            $('image[data-rank=7][data-file=7]').click();
            $('image[data-rank=0][data-file=0]').click();
            return $('circle').length;
          }, function(value) {
            expect(value).toEqual(0);
            phantom.exit();
            done();
          });
        });
      });
    });

    describe('moving a piece', function() {
    });
  });
});
