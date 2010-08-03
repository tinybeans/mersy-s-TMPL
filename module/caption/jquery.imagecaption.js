/*
image caption 
*/
$.fn.imagecaption = function(){
	$(this).each(function(){
	hoge = $("img",this).attr("width");
	hoge = hoge +"px";
	$(".caption",this).css("width",hoge);
	})
	return this;
}