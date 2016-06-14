describe('SnoopDogDancer', function() {

  var SnoopDogDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    SnoopDogDancer = new snoopDogDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(SnoopDogDancer.$node).to.be.an.instanceof(jQuery);
  });

  // it('should have a step function that makes its node blink', function() {
  //   sinon.spy(SnoopDogDancer.$node, 'toggle');
  //   SnoopDogDancer.step();
  //   expect(SnoopDogDancer.$node.toggle.called).to.be.true;
  // });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(SnoopDogDancer, 'step');
      expect(SnoopDogDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(SnoopDogDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(SnoopDogDancer.step.callCount).to.be.equal(2);
    });
  });
});
