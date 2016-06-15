$(document).ready(function() {
  window.resizeTo(500, 500)
  window.dancers = [];
  window.danceFunctions = [];

  // resize window viewport


  resizeDiv();


  window.onresize = function(event) {
    resizeDiv();
  }

  function resizeDiv() {
    vpw = $(window).width();
    vph = $(window).height();
    $('body').css({'height': 500 + 'px'});
  }



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
      300 * Math.random(),
      300 * Math.random(),
      Math.random() * 500
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer.$node);
    window.danceFunctions.push(dancer);
  });



  $('.lineUp').on('click', function(event) {
    var sizeTop = 50;
    window.danceFunctions.forEach(function(dancer) {
      if (dancer.constructor.name === 'catDancer') {
        dancer.setPosition(window.innerHeight/2, 0);
      } else if (dancer.constructor.name === 'putinDancer') {
        dancer.setPosition(window.innerHeight, 100);
      } else if (dancer.constructor.name === 'snoopDogDancer') {
        dancer.setPosition(300, 130);
      }



    //   $(dancer).addClass('lineUp');
    //   dancer.setPosition(sizeTop, window.innerWidth / 2)
    });

  });



// changing background

  $('.disco').on('click', function() {
    $('body').css({'background-image': ' url("http://i277.photobucket.com/albums/kk45/men_of_fire/DISCO.gif")'});
    $('body').css({'background-image': ' url(http://www.cyborg-art.dk/Internet_Temp/the_crockett_club_final_2k.jpg)'});
  });

// //make dancer interact with each other;
  $('.interact').on('click', function() {
    window.danceFunctions.forEach(function(dancer) {
      if (dancer.constructor.name === 'catDancer') {
        dancer.setPosition(window.innerHeight / 2, 0);
        $(dancer.node).toggle();
      } else if (dancer.constructor.name === 'putinDancer') {
        dancer.setPosition(window.innerHeight / 10, window.innerWidth / 10);
      } else if (dancer.constructor.name === 'snoopDogDancer') {
        dancer.setPosition(window.innerHeight/4, 0);
      }
      
    });
  });

});