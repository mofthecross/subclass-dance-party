var catDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<img class="catDancer dancer" src ="http://4.bp.blogspot.com/-zT6FO4bjJpY/Ve2dL9abmJI/AAAAAAAAj5s/4P9BXXtdAqY/s1600/stretching_cat_cut_out.png" height="200px"></img> ');
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

catDancer.prototype.setPosition = function() {
  makeDancer.prototype.setPosition.call(this, window.innerHeight, window.innerWidth / 2  );
};



