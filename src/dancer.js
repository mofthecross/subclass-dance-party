var makeDancer = function(top, left, timeBetweenSteps) {
  this.step();
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(this.top, this.left);
};

makeDancer.prototype.step = function() {
    // the basic dancer     doesn't do anything interesting at all on each step,
    // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See 
  var styleSettings = {
    top: top,
    left: left,
    // position: 'absolute'
  };

  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function() {
  var lineSettings = {
    bottom: '0px',
    left: auto,
    right: auto
  };

  // this.$node.css(lineSettings);
};


makeDancer.prototype.interact = function() {
  this.$node.addClass("bounceClass");
}