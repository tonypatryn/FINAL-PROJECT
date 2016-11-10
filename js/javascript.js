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
        $('.theStory').text(fullStory).hide().fadeIn(1000).css({
            'padding-bottom':'20px',
            'height': '400px'
        });
        $('.inputStory').css('display','none');
        $('.submitButton').css('display','none');
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




