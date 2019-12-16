	(function($) {
		"use strict";
	
	

	$(function () {
	$('.percent').percentageLoader({
		valElement: 'p',
		strokeWidth:2,
		bgColor: 'rgba(0, 0, 0, 0.2)',
		ringColor: '#69ca21',
		textColor: '#101010',
		fontSize: '24px',
		fontWeight: 'normal'
	});

	});


	$(function () {
	$('.percent-2').percentageLoader({
		valElement: 'p',
		strokeWidth:5,
		bgColor: 'rgba(255, 255, 255, 0.1)',
		ringColor: '#69ca21',
		textColor: '#fff',
		fontSize: '24px',
		fontWeight: 'normal'
	});

	});


	$(function () {
	$('.percent-3').percentageLoader({
		valElement: 'p',
		strokeWidth:5,
		bgColor: 'rgba(0, 0, 0, 0.4)',
		ringColor: '#000',
		textColor: '#000',
		fontSize: '24px',
		fontWeight: 'normal'
	});

	});


$(function () {
	$('.percent-4').percentageLoader({
		valElement: 'p',
		strokeWidth:2,
		bgColor: 'rgba(0, 0, 0, 0.2)',
		ringColor: '#69ca21',
		textColor: '#101010',
		fontSize: '18px',
		fontWeight: 'normal'
	});

	});

	

	
	})(jQuery);