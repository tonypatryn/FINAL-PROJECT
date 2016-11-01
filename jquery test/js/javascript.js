var storyInputOne;
var storyInputTwo;
var storyInputThree;
var fullStory;


$('.buttonOne').on('click', function( oneClick ){
	oneClick.preventDefault();
	storyInputOne = $('#inputOne').val();
	var inputOneLast3;
	inputOneLast3 = storyInputOne.split(" ");
	$("#inputOne").prop('disabled', true);
	$('#inputOne').val( (inputOneLast3[inputOneLast3.length - 3]) + " " + (inputOneLast3[inputOneLast3.length - 2]) + " " + (inputOneLast3[inputOneLast3.length - 1]) );
});

$('.buttonTwo').on('click', function( TwoClick ){
	TwoClick.preventDefault();
	storyInputTwo = $('#inputTwo').val();
	var inputTwoLast3;
	inputTwoLast3 = storyInputTwo.split(" ");
	$("#inputTwo").prop('disabled', true);
	$('#inputTwo').val( (inputTwoLast3[inputTwoLast3.length - 3]) + " " + (inputTwoLast3[inputTwoLast3.length - 2]) + " " + (inputTwoLast3[inputTwoLast3.length - 1]) );
});

$('.buttonThree').on('click', function( threeClick ){
	threeClick.preventDefault();
	storyInputThree = $('#inputThree').val();
	var inputThreeLast3;
	inputThreeLast3 = storyInputThree.split(" ");
	$("#inputThree").prop('disabled', true);
	$('#inputThree').val( (inputThreeLast3[inputThreeLast3.length - 3]) + " " + (inputThreeLast3[inputThreeLast3.length - 2]) + " " + (inputThreeLast3[inputThreeLast3.length - 1]) );

	fullStory = storyInputOne + " " + storyInputTwo + " " + storyInputThree;
	$('.theStory').text(fullStory);
});



