var corpseTitle = "";
var corpseNumber = 0;
var currentCorpse = 1;
var currentInput = "";
var fullStory = "";
var getLastThree = "";
var setLastThree = "";
var navStatus = false;
var checkForThree = "";

//CREATE THE CORPSE
$('#letsPlay').on('click', function( playClick ) {

//IS CORPSE A NUMBER
    if ( $.isNumeric($('.corpse-number').val()) ) {
        $('input').removeClass('errorInput');
        corpseNumber = $('.corpse-number').val();
        $('#howDoesSection').fadeOut();
        $('.titleOfStory').fadeOut( function() {
            $('.inputCorpseBoxes').fadeIn();
            corpseTitle = $('.corpse-title').val();
            $('.theStoryTitle').text(corpseTitle).fadeIn();
        });
    } else {
        $('input').addClass('errorInput');
        alert('Please use a number for Players!');
    }    
});

//SUBMIT THE CORPSE
$('.submitButton').on('click', function( oneClick ) {
    oneClick.preventDefault();
    //SETTING A CORPSE 
    if ( currentCorpse < corpseNumber ) {
        checkForThree = $('.inputStory').val();
        checkForThree = checkForThree.split(" ");
        
        //CHECK IF THERE ARE AT LEAST THREE WORDS
        console.log(checkForThree);
        if (checkForThree.length < 3) {
            alert("Please use at least three words!");
        } else {
            fullStory = fullStory + " " + $('.inputStory').val();
            getLastThree = fullStory.split(" ");
            setLastThree = (getLastThree[getLastThree.length - 3]) + " " + (getLastThree[getLastThree.length - 2]) + " " + (getLastThree[getLastThree.length - 1]);
            $('.theStory').text(setLastThree);
            $('.inputStory').val('');
            currentCorpse++;
        }

    //CORPSE IS READY TO SHOW
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
        $('.inputStory').val('');
    }
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

//TEXT SLIDER

var quoteCounter = 1;
console.log(quoteCounter);

$('.quote2').css('display', 'none');
$('.quote3').css('display', 'none');

$('.nextQuote').on('click' , function () {
    if (quoteCounter === 1) {
        $('.quote1').fadeOut( function () {
            $('.quote2').fadeIn();
        });
        quoteCounter = 2;
        console.log(quoteCounter);
    } else if (quoteCounter === 2) {
        $('.quote2').fadeOut( function () {
            $('.quote3').fadeIn();
        });
        quoteCounter = 3;
        console.log(quoteCounter);
    } else if (quoteCounter === 3) {
        $('.quote3').fadeOut( function () {
            $('.quote1').fadeIn();
        });
        quoteCounter = 1;
        console.log(quoteCounter);        
    }
});

$('.prevQuote').on('click' , function () {
    if (quoteCounter === 1) {
        $('.quote1').fadeOut( function () {
            $('.quote3').fadeIn();
        });
        quoteCounter = 3;
        console.log(quoteCounter);
    } else if (quoteCounter === 2) {
        $('.quote2').fadeOut( function () {
            $('.quote1').fadeIn();
        });
        quoteCounter = 1;
        console.log(quoteCounter);
    } else if (quoteCounter === 3) {
        $('.quote3').fadeOut( function () {
            $('.quote2').fadeIn();
        });
        quoteCounter = 2;
        console.log(quoteCounter);
    }
});
