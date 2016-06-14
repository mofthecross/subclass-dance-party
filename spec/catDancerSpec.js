describe('CatDancer', function() {

  var CatDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    CatDancer = new catDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(CatDancer.$node).to.be.an.instanceof(jQuery);
  });

  // it('should have a step function that makes its node do something', function() {
  //   sinon.spy(CatDancer.$node, 'dance');
  //   CatDancer.step();
  //   expect(CatDancer.$node.called).to.be.true;
  // });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(CatDancer, 'step');
      expect(CatDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(CatDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(CatDancer.step.callCount).to.be.equal(2);
    });
  });
});
