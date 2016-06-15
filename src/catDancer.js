var catDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<img class="catDancer dancer" src ="http://www.bernbabybern.co/assets/img/dancing-bernie.gif" height="150px"></img> ');
  makeDancer.call(this, top, left, timeBetweenSteps);
};

catDancer.prototype = Object.create(makeDancer.prototype);
// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function

catDancer.prototype.constructor = catDancer;

catDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
  // this.$node.animate({right: '300px'});
  // this.$node.slideDown();
};

catDancer.prototype.setPosition = function(top, left) {
  makeDancer.prototype.setPosition.call(this, top, left);
};

catDancer.prototype.interact = function() {
  this.$node.addClass("bounceClass");
};



