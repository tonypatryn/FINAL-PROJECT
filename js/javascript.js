var corpseTitle = "";
var corpseNumber = 0;
var currentCorpse = 1;
var currentInput = "";
var fullStory = "";
var getLastThree = "";
var setLastThree = "";
var navStatus = false;

//CREATE THE CORPSE
$('#letsPlay').on('click', function( playClick ) {
    corpseNumber = $('.corpse-number').val();
    $('.inputCorpseBoxes').css('display','block');
    $('#howDoesSection').css('display','none');
    $('.titleOfStory').css('display','none');
    corpseTitle = $('.corpse-title').val();
    $('.theStoryTitle').text(corpseTitle);
});

//SUBMIT THE CORPSE
$('.submitButton').on('click', function( oneClick ) {
    oneClick.preventDefault();
    if ( currentCorpse < corpseNumber ) {
        fullStory = fullStory + " " + $('.inputStory').val();
        getLastThree = fullStory.split(" ");
        setLastThree = (getLastThree[getLastThree.length - 3]) + " " + (getLastThree[getLastThree.length - 2]) + " " + (getLastThree[getLastThree.length - 1]);
        $('.theStory').text(setLastThree);
    } else {
        fullStory = fullStory + " " + $('.inputStory').val();
        $('.paper').addClass('paperOn');
        $('.theStory').html('<p>' + fullStory + '</p>').hide().fadeIn(1000).css({
            'padding-bottom':'20px',
            'height': '400px'
        });
        $('.inputStory').css('display','none');
        $('.submitButton').css('display','none');
        $('.theStory').append('<div id="letsPlay"><a href="create.html">Play Again?</a></div>');
    }
    $('.inputStory').val('');
    currentCorpse++
});

//ABOUT PAGE
$('.aboutImage').hide().fadeIn(1000);
$('.aboutText').hide().delay(400).fadeIn(1000);

//HAMBURGER MENU
$('.hamburger').on('click', function() {
    if (navStatus === false) {
        $('header').animate({ 
            height:'255px'
        }, 1000, function() {
        navStatus = true;
      });
    } else {
        $('header').animate({ 
            height:'90px'
        }, 1000, function() {
        navStatus = false;
      });
    }
});

$(window).on('resize', function() {
    $('header').css('height','90px');
    navStatus = false;
});

$('.theMap').addClass('scrolloff'); // set the pointer events to none on doc ready
$('#gMaps').on('click', function () {
    $('.theMap').removeClass('scrolloff'); // set the pointer events true on click
});
        // you want to disable pointer events when the mouse leave the canvas area;
$(".theMap").mouseleave(function () {
    $('.theMap').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
});




