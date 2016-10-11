$("button").click(function(){

   var recoveredInput = $("input").val(); 

	$(".faiteVotrelisteici").append("<li>"+recoveredInput+"</li>");
	console.log(recoveredInput);    
   
   $("ul").toggleClass("Fait");
   console.log(recoveredInput);
});
	

