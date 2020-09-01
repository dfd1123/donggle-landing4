$(function(){
		$("#main_lnb ul li a").click(function(e){
			var posY = $($(this).attr("rel")).position();
			$("#main_lnb ul li a").removeClass("on");
			$(this).addClass("on");
			$("html,body").stop().animate({"scrollTop":posY.top -0},600);
			return false;
		}); 
	});
$(function(){
		$(".cbp-af-inner a").click(function(e){
			var posY = $($(this).attr("rel")).position();
			$(".cbp-af-inner a").removeClass("on");
			$(this).addClass("on");
			$("html,body").stop().animate({"scrollTop":posY.top -0},600);
			return false;
		}); 
	});



$(window).on("scroll", function(){
	var scrollTop = $(window).scrollTop();
	var $domMainHeader = $("#main_header,#main_header_black");

	if(scrollTop >= 906 && scrollTop <= 4800 ){
		if($domMainHeader.attr("id") != "main_header_black") $domMainHeader.attr("id", "main_header_black");
	} else {
		if($domMainHeader.attr("id") != "main_header") $domMainHeader.attr("id", "main_header");
	}
}).on("wheel mouse wheel DOMMouseScroll", function(e){
	var $domMainHeader = $("#main_header,#main_header_black");
	var e = e.originalEvent || window.event;
	var delta = e.deltaY || (-1 / 40 * e.wheelDelta);
	var scrollTop = $(window).scrollTop() + parseInt(delta);

	if(scrollTop >= 906 && scrollTop <= 4800){
		if($domMainHeader.attr("id") != "main_header_black") $domMainHeader.attr("id", "main_header_black");
	} else {
		if($domMainHeader.attr("id") != "main_header") $domMainHeader.attr("id", "main_header");
	}
});

$(function() {
			$("#top_btn").on("click", function() {
				$("html, body").animate({scrollTop:0}, '500');
				return false;
			});
		});