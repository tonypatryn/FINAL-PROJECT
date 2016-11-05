var corpseNumber = 3;
var currentCorpse = 1;
var currentInput = "";
var fullStory = "";
var getLastThree = "";
var setLastThree = "";

$('.button').on('click', function( oneClick ) {
	oneClick.preventDefault();
	if ( currentCorpse !== corpseNumber ) {
		fullStory = fullStory + " " + $('#inputStory').val();
		getLastThree = fullStory.split(" ");
		setLastThree = (getLastThree[getLastThree.length - 3]) + " " + (getLastThree[getLastThree.length - 2]) + " " + (getLastThree[getLastThree.length - 1]);
		$('.theStory').text(setLastThree);
	} else {
		fullStory = fullStory + " " + $('#inputStory').val();
		$('.theStory').text(fullStory);
		$('#inputStory').css('display','none');
		$('.button').css('display','none');
	}
	$('#inputStory').val('');
	currentCorpse++
});