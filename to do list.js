$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

$("ul").on("click",".delete",function(event){
		$(this).parent().fadeOut(1000,function(){
				$(this).remove();
			});
		event.stopPropagation();
});

$("input").on("keypress",function(event){
	if(event.which===13)
	{
		var t=$(this).val();
		$(this).val("");
		var y=$("ul").html();
		$("ul").html(y+"<li><span class=\"delete\">X</span>"+t+"</li>");
	}
});

$("i").on("click",function(){
	$("input").fadeToggle();
});