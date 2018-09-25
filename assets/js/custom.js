$(document).ready(function(){

	// Prevent from orphaned & widowed paraghraph
	$('p').each(function(){
	    var string = $(this).html();
	    string = string.replace(/ ([^ ]*)$/,'&nbsp;$1');
	    $(this).html(string);
	});

	//Scroll Animation
    $('#toTop').click(function(){ 
        $('html,body').animate({ scrollTop: 0 }, 'slow');
        return false; 
    });

    // Display to Top Button

    if($(window).scrollTop() > 300) {
    		$('.btn-top').fadeIn();
	} else {
		$('.btn-top').fadeOut();
	}
	
    $(window).scroll(function(){
    	if($(window).scrollTop() > 300) {
    		$('.btn-top').fadeIn();
    	} else {
    		$('.btn-top').fadeOut();
    	}
	});
});