var corpseTitle = "";
var corpseNumber = 0;
var currentCorpse = 1;
var currentInput = "";
var fullStory = "";
var getLastThree = "";
var setLastThree = "";


$('#letsPlay').on('click', function( playClick ) {
    corpseNumber = $('.corpse-number').val();
    console.log(corpseNumber);
    $('.inputCorpseBoxes').css('display','block');
    $('#howDoesSection').css('display','none');
    $('.titleOfStory').css('display','none');
    corpseTitle = $('.corpse-title').val();
    $('.theStoryTitle').text(corpseTitle);
});

$('.submitButton').on('click', function( oneClick ) {
    oneClick.preventDefault();
    console.log(corpseNumber);
    console.log(currentCorpse);
    if ( currentCorpse < corpseNumber ) {
        fullStory = fullStory + " " + $('.inputStory').val();
        getLastThree = fullStory.split(" ");
        setLastThree = (getLastThree[getLastThree.length - 3]) + " " + (getLastThree[getLastThree.length - 2]) + " " + (getLastThree[getLastThree.length - 1]);
        $('.theStory').text(setLastThree);
    } else {
        fullStory = fullStory + " " + $('.inputStory').val();
        $('.theStory').text(fullStory);
        $('.inputStory').css('display','none');
        $('.submitButton').css('display','none');
    }
    $('.inputStory').val('');
    currentCorpse++
});
