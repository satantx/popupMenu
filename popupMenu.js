$(document).ready(function() {

	$('.link').click(function(){
		var popup = $(this).parents('.popup');
		if (popup.is('.show')) {
			$('.popup').removeClass('show');
		} else {
			$('.popup').removeClass('show');
			popup.addClass('show');
		};
		
		return false;
	});

	$(document).click(function(e) {
		if( $(e.target).closest(".popup-win").length ) return;
      $('.popup').removeClass('show');
	});

});
