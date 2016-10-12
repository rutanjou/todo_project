$(document).ready(function(){
$("button").click(function(){
	var recoveredInput = $("input").val();
	$(".faiteVotrelisteici").append('<li><input type="checkbox" class="checked"/>'+recoveredInput+'</li>');



	var checked = $('.checked').is(":checked");
	$(".checked").click(function(){
		if (checked =! checked){
			$(this).parent().addClass("tachefaite");
		}else{ 
			$(this).parent().removeClass();
		}; 
	}); 
});	
});

