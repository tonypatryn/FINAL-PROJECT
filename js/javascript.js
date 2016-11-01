var corpseTitle;
var corpseNumber;

// CREATE BUTTONS HOVER
$('.inkBlotButton3').on({
    'mouseover' : function() {
    	$(this).attr('src','images/pick3-orange.png');
    },
    mouseout : function() {
  		$(this).attr('src','images/pick3-black.png');
    },
});

$('.inkBlotButton4').on({
    'mouseover' : function() {
    	$(this).attr('src','images/pick4-orange.png');
    },
    mouseout : function() {
  		$(this).attr('src','images/pick4-black.png');
    }
});

$('.inkBlotButton5').on({
    'mouseover' : function() {
    	$(this).attr('src','images/pick5-orange.png');
    },
    mouseout : function() {
  		$(this).attr('src','images/pick5-black.png');
    }
});

$('.inkBlotButton3').on('click', function(){
    $(this).attr('src','images/pick3-orange.png');
    $('.inkBlotButton4').attr('src','images/pick4-grey.png');
    $('.inkBlotButton5').attr('src','images/pick5-grey.png');
    corpseNumber = 3;
});

$('.inkBlotButton4').on('click', function(){
    $(this).attr('src','images/pick4-orange.png');
    $('.inkBlotButton3').attr('src','images/pick3-grey.png');
    $('.inkBlotButton5').attr('src','images/pick5-grey.png');
    corpseNumber = 4;
});

$('.inkBlotButton5').on('click', function(){
    $(this).attr('src','images/pick5-orange.png');
    $('.inkBlotButton3').attr('src','images/pick3-grey.png');
    $('.inkBlotButton4').attr('src','images/pick4-grey.png');
    corpseNumber = 5;
});

$('#letsPlay').on('click', function( playClick ) {
	playClick.preventDefault();
		$('.inputCorpseBoxes').html('');
	for (var inputNumber = 0; inputNumber < corpseNumber; inputNumber++) {
		$('.inputCorpseBoxes').append('<center><input type="text" name="nameHere" placeholder="Type Your Line"><div class="submitButton"><a href="#">Submit</a></div></center>');
	}
});

$('.submitButton').on('click', function( submitClick ) {
	submitClick.preventDefault();
	// var corpseCopyInput1;
	// var corpseCopyInput2;
	// var corpseCopyInput3;
	// var corpseCopyInput4;
	// var corpseCopyInput5;
	// corpseCopyInput1 = $('input:nth-child(1)','value');
	// corpseCopyInput2 = $('input:nth-child(2)','value');
	// corpseCopyInput3 = $('input:nth-child(3)','value');
	// corpseCopyInput4 = $('input:nth-child(4)','value');
	// corpseCopyInput5 = $('input:nth-child(5)','value');
	console.log('i think this is working?');
});






