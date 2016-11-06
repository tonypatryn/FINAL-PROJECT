var corpseTitle = "";
var corpseNumber = 0;
var currentCorpse = 1;
var currentInput = "";
var fullStory = "";
var getLastThree = "";
var setLastThree = "";

$('#letsPlay').on('click', function( playClick ) {
    corpseNumber = $('.corpse-number').val();
    $('.inputCorpseBoxes').css('display','block');
    $('#howDoesSection').css('display','none');
    $('.titleOfStory').css('display','none');
    corpseTitle = $('.corpse-title').val();
    $('.theStoryTitle').text(corpseTitle);
});

$('.submitButton').on('click', function( oneClick ) {
    oneClick.preventDefault();
    if ( currentCorpse < corpseNumber ) {
        fullStory = fullStory + " " + $('.inputStory').val();
        getLastThree = fullStory.split(" ");
        setLastThree = (getLastThree[getLastThree.length - 3]) + " " + (getLastThree[getLastThree.length - 2]) + " " + (getLastThree[getLastThree.length - 1]);
        $('.theStory').text(setLastThree);
    } else {
        fullStory = fullStory + " " + $('.inputStory').val();
        $('.theStory').text(fullStory).hide().fadeIn(1000).css('padding-bottom','20px');
        $('.inputStory').css('display','none');
        $('.submitButton').css('display','none');
    }
    $('.inputStory').val('');
    currentCorpse++
});

$('.aboutImage').hide().fadeIn(1000);

$('.aboutText').hide().delay(400).fadeIn(1000);







