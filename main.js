'use strict';

$(document).ready(init); //document.ready is the event listener, init is the event handler 

function init() { //heres the handler, gets called more than once
	console.log('document ready');

	$('.number').on('click', buttonClicked);
	$('.number').click(buttonClicked);
}

function buttonClicked(event){ //may use or not use "event"

event.preventDefault();
//console.log('# button clicked!');
$('#screen').val('0');
}

var calcinput = $('#screen').val(); $('#screen').val(runningTotalArray);

var runningTotalArray= [];
var numberClicked = "";
var operator = "";
var decimal = "";
var decimalClicks = (0);
var currentString = $('#screen').text();



var valueClicked = $('.number').click(function(event){
	numberClicked = $(this).attr('id')*1;
	console.log(numberClicked + " clicked");
	runningTotalArray.push(numberClicked);
	var runningTotal = runningTotalArray.join("");
	$('#screen').text(runningTotal); 
	console.log(currentString + "currentstring");
});


var operatorClicked = $('.operator').click(function(){
	operator = $(this).attr('id');
	console.log(operator + " clicked");
	runningTotalArray.push(operator);
	runningTotalArray.join("");
	var runningTotal = runningTotalArray.join("");
	$('#screen').text(runningTotal);
	return; 
});

$('.floating').click(function(){ 

if (decimalClicks <= 0) 	{
	decimal = $(this).attr('id');
	console.log(decimal + " clicked");
	runningTotalArray.push(decimal);
	runningTotalArray.join("");
	var runningTotal = runningTotalArray.join("");
	$('#screen').text(runningTotal);
	++decimalClicks;
	console.log(decimalClicks);
	return; 
}
});
// $('this').click(console.log(id  + " after"));

var equalClicked = $('.equal').click(function(){
	operator = $(this).attr('id');
	var joinedArray = runningTotalArray.join("");
	console.log(joinedArray);
	var sum = eval(joinedArray);
	var newSum = sum.toString();
	runningTotalArray = [newSum];
	$('#screen').text(newSum);
	return; 
});



// var runningTotal = $('.number').click(function(event){
// event.preventDefault();
// return currentvalue ;
// }



// function titleCounter(event){
// 	console.log('count:', ++count);
// }