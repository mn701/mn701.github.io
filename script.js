$(function(){
	var _window = $(window),
		_header = $('header'),
		picBottom;
	
	_window.on('scroll',function(){
		picBottom = $('.pic').height();
		if(_window.scrollTop() > picBottom){
			_header.addClass('transform');   
		}
		else{
			_header.removeClass('transform');   
		}
	});
	
	_window.trigger('scroll');	
});