$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer.$node);
  });


  $('.lineUp').on('click', function(event) {

    window.dancers.forEach(function(item) {
      $(item).css({right: '50%'});
    });
  });

// changing background

  $('.disco').on('click', function() {
    $('body').css({'background-image': ' url("http://i277.photobucket.com/albums/kk45/men_of_fire/DISCO.gif")'});
  });

// //make dancer interact with each other;
// $('interact').on('click', function() {
//   var index = []
//   var generateRandomIndex = function() {
//     var generate = Math.floor(Math.random() * window.dancers.length + 1)
//     index !== generate ? index = generate : index = generate++;
//   }
//   var dancer1 = window.dancers[randomIndex];
//   var dancer2 = window.dancers[ramdomIndex];
//   for (var i = 0; i < window.dancers.length; i+2)
// })

});