//http://www.onextrapixel.com/2010/02/23/how-to-use-jquery-to-make-slick-page-transitions/
//http://js.4design.tl/slick-page-transition-effet-de-transition-fading-entre-les-pages-dun-site-577
//http://blog.site-web-creation.net/jquery-loader/
//http://stackoverflow.com/questions/5577555/jquery-trigger-click-doesnt-work multiple event and link 
//http://blog.baltrinic.com/software-development/synchronous-or-sequential-animation-in-jquery
$().ready(function() {
	$('#slider-main').codaSlider({
		dynamicTabs : false,
		dynamicArrows : false,
		continuous : false,
		hashLinking: true,
		slideEaseFunction:"easeOutQuart"
	});
	$('#slider-left').codaSlider({
		dynamicTabs : false,
		dynamicArrows : false,
		continuous : false,
		hashLinking: true,
		slideEaseFunction:"easeOutQuart"
	});
	$('#slider-right').codaSlider({
		dynamicTabs : false,
		dynamicArrows : false,
		continuous : false,
		hashLinking: true,
		slideEaseFunction:"easeOutQuart"
	});
	$('#slider-grid').codaSlider({
		dynamicTabs : false,
		dynamicArrows : false,
		continuous : false,
		hashLinking: true,
		slideEaseFunction:"easeOutQuart"
	});

	jQuery('#main-left > a').click( function (e) {
		jQuery('#slider-right-wrapper').children(".coda-nav-left").click();
		jQuery('#slider-left-wrapper').children(".coda-nav-left").click();
	});
	jQuery('#main-right > a').click( function (e) {
		jQuery('#slider-right-wrapper').children(".coda-nav-right").click();
		jQuery('#slider-left-wrapper').children(".coda-nav-right").click();
	});	
	jQuery('#thumbNav > a').click(function (e){
		viewTransition();
	});

	
	hideAndShowNavInterface($('#slider-main'));
	hideAndShowNavInterface($('#slider-grid'));
});

function firstOffSecondOn(elem1,elem2){
	elem1.fadeOut("slow");
	elem2.fadeIn("slow");
}
function showArrows(elems){
	elems.fadeIn("slow");
}

function getHash(){

	var hash = document.location.hash.substring(1);
	if(document.location.hash == '')
	{
		hash=1;
	}
	return hash;
}

function checkDegrade(lastindex,index){
	$('#degradG').prop("href", "#"+(parseInt(index)-3));
	$('#degradD').prop("href", "#"+(parseInt(index)+3));
	if (index==4){
		$('#degradG').fadeOut("slow");
	}
	else if(index>4) $('#degradG').fadeIn("slow");
	if (lastindex-index==3){
		$('#degradD').fadeOut("slow");
	}
	else if(lastindex-index>3) $('#degradD').fadeIn("slow");
}

function hideAndShowNavInterface(slider){
	var arrow_left = slider.siblings(".coda-nav-left");
	var arrow_right = slider.siblings(".coda-nav-right");
	var lastIndex = slider.data('maxindex');
	arrow_right.click(function(){
		var hash = getHash();
		checkDegrade(lastIndex,hash);
		if(hash == lastIndex)
		{
			firstOffSecondOn(arrow_right,arrow_left);
		}
		else {showArrows(arrow_left.add(arrow_right));}
	});

	arrow_left.click(function(){
		var hash = getHash();
		checkDegrade(lastIndex,hash);
		if(hash==1)
		{

			firstOffSecondOn(arrow_left,arrow_right);
		}
		else {showArrows(arrow_left.add(arrow_right));}
	});

	$(".nav-link").click(function()
	{
		var hash_link = $(this).data('position');
		var hash = getHash();
		checkDegrade(lastIndex,hash);
		if(hash_link ==lastIndex || hash==1)
		{ 
			if(hash_link==lastIndex){

				firstOffSecondOn(arrow_right,arrow_left);
			}
			if(hash_link==1)
			{
				firstOffSecondOn(arrow_left,arrow_right);
			}

		}
		else 
		{
			showArrows(arrow_left.add(arrow_right));
		}
	});
	var hash = getHash();
	if(lastIndex==1 || lastIndex==0)//check if less or more than one panel, hide coda in that case
	{
		arrow_left.css("visibility","hidden");
		arrow_right.css("visibility","hidden");
	}
	else
	{
		if(hash==1 || hash=='')
		{
			arrow_left.css("display","none");
			//arrow_left.fadeOut("slow");
		}
		if(hash ==lastIndex)
		{
			arrow_left.css("display","none");
			//arrow_right.fadeOut("slow");
		}
	}
}


function transitionToGrid(){


	// If using jQuery 1.4, you don't need to do || [].  
	/**(function() {  
	$(elements[i++] || []).fadeOut('slow', arguments.callee);  
	})();
	var elementsappear=$('#grid'), i = 0;
	// If using jQuery 1.4, you don't need to do || [].  
	(function() {  
	$(elements[i++] || []).fadeIn('slow', arguments.callee);  
	})();**/
}

function viewTransition(){
	var transition = jQuery('#thumbNav > a').data('transition');
	if (transition == "grid")
	{
		$('#view').fadeOut("slow", function() {
			$('#grid').fadeIn("slow");
		});
		jQuery('#thumbNav > a').data('transition',"view");
		jQuery('#thumbNav > a').prop("href", "#1");
	}
	else
	{
		jQuery('#thumbNav > a').data('transition',"grid");
		
		$('#grid').fadeOut("slow", function() {
			$('#view').fadeIn("slow");
		});

	}
}