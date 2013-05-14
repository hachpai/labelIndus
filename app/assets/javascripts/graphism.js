//http://www.onextrapixel.com/2010/02/23/how-to-use-jquery-to-make-slick-page-transitions/
//http://js.4design.tl/slick-page-transition-effet-de-transition-fading-entre-les-pages-dun-site-577
//http://blog.site-web-creation.net/jquery-loader/
//http://stackoverflow.com/questions/5577555/jquery-trigger-click-doesnt-work multiple event and link 

$().ready(function() {
	$('#slider-main').codaSlider({
	dynamicTabs : false,
	dynamicArrows : false,
	continuous : false,
	slideEaseFunction:"easeOutQuart"
	});
	$('#slider-left').codaSlider({
	dynamicTabs : false,
	dynamicArrows : false,
	continuous : false,
	slideEaseFunction:"easeOutQuart"
	});
	$('#slider-right').codaSlider({
	dynamicTabs : false,
	dynamicArrows : false,
	continuous : false,
	slideEaseFunction:"easeOutQuart"
	});
	jQuery('#main-left > a').click( function (e) {
		jQuery('#slider-left-wrapper').children(".coda-nav-left").click();
		jQuery('#slider-right-wrapper').children(".coda-nav-left").click();
	});
	jQuery('#main-right > a').click( function (e) {
		jQuery('#slider-left-wrapper').children(".coda-nav-right").click();
		jQuery('#slider-right-wrapper').children(".coda-nav-right").click();
	});
	
});



