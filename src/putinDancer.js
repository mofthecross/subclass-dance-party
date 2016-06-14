var putinDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="putinDancer dancer" src ="https://lh6.googleusercontent.com/-UsIw4WQLtJ0/VGNIWkWql7I/AAAAAAAARMc/NDu7vQo2LLk/w506-h750/putin.gif"></img> ');

};

putinDancer.prototype = Object.create(makeDancer.prototype);
// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function

putinDancer.prototype.constructor = putinDancer;
putinDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
  this.$node.animate({height: '500px'});
  this.$node.slideUp(10000);
  this.$node.slideDown();
};



