$(document).on('click', '.nav-element', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});

$(document).ready(function(){
	var i=0;
    $("#hambtn").click(function(){
        /*if(($("#hambtn").attr("aria-expanded"))=== "true"){
        	$(".container1").css("padding-top","500px")
        };*/
        i++;
        if(i%2){
        $(".container1").css("padding-top","270px");
    	}
    	else{
    	$(".container1").css("padding-top","100px");
    	}
    });
    


    $("button#submitbtn").click(function(){

	var mail = $("form").find('input[name="mail"]').val();
	var name = $("form").find('input[name="name"]').val();
	var phone = $("form").find('input[name="number"]').val();
	
    $.post(  "./insert.php",
    { mailid: mail , username: name, number: phone }
    );

    });



});