var snoopDogDancer = function(top, left, timeBetweenSteps) {
  
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="snoopDancer dancer" src="http://www.officialpsds.com/images/thumbs/snoop-dogg-psd4606.png"></img>');
};

snoopDogDancer.prototype = Object.create(makeDancer.prototype);
// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function

snoopDogDancer.prototype.constructor = snoopDogDancer;


snoopDogDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
  this.$node.fadeToggle();
};



