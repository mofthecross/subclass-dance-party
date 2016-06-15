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
        dancer.setPosition(0, window.innerWidth / 4);
      } else if (dancer.constructor.name === 'putinDancer') {
        dancer.setPosition(0, window.innerWidth / 4);
      } else if (dancer.constructor.name === 'snoopDogDancer') {
        dancer.setPosition(0, window.innerWidth / 4);
      }



    //   $(dancer).addClass('lineUp');
    //   dancer.setPosition(sizeTop, window.innerWidth / 2)
    });

  });



// changing background

  $('.disco').on('click', function() {
    $('body').css({'background-image': 'url("http://www.cyborg-art.dk/Internet_Temp/the_crockett_club_final_2k.jpg")'});
    var discoball = $('<img class="discoball" src ="http://stardancer.net/wpimages/starball_w_stardancer.gif" height="200px"></img> ');
    $('.holder').append(discoball);
  });
  $('.tloin').on('click', function() {
    $('body').css({'background-image': 'url("http://sfcitizen.com/blog/wp-content/uploads/2013/05/7J7C9263-copy.jpg")'});
  });
  $('.dc').on('click', function() {
    $('body').css({'background-image': 'url("http://backgrounds4k.net/wp-content/uploads/2016/01/White-House-wallpaper.jpg")'});
  });
  $('.debate').on('click', function() {
    $('body').css({'background-image': 'url("http://static.politico.com/2d/e8/1076edab470f9707a8f87ae11614/emptydebatestage.jpg")'});
  });



// //make dancer interact with each other;
  $('.interact').on('click', function() {
    window.danceFunctions.forEach(function(dancer) {
        dancer.setPosition(0, 0);
        dancer.interact();
    });
 

  });

});