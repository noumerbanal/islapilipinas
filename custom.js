$(document).ready(function(){

	// Prevent from orphaned & widowed paraghraph
	$('p').each(function(){
	    var string = $(this).html();
	    string = string.replace(/ ([^ ]*)$/,'&nbsp;$1');
	    $(this).html(string);
	});


});

