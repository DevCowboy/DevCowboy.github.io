$(document).ready(function() {
	
    // your stuff here
    // ...


    // Registration Page
    $("#showEmailReg").click(function(){
        $("#registerEmail").removeClass("hidden");
        // $("#registrationOptions").addClass("faded");
    });

    $(window).on("click", ".faded", function(){
        $("#registrationOptions").removeClass("faded");
        // $("#registerEmail").addClass("hidden");
    });
});

$(document).on("click", ".table-editRows td", function(ev){
    ev.preventDefault();
    if(!$(ev.target).hasClass("confirmDelete")) {
        var targetLink = $(ev.target).parent("tr").attr("data-editLink");
        window.location.href = targetLink;
    }
});