$(document).ready(function(){
    
    // Code to buff out scrolling
    $(".nav-link").on("click", function(event){
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
      
            // Store hash
            var hash = this.hash;
      
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 200, function(){
         
              // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
            });
          } // End if
    });

    // Submit and policy btn code
    $("#submit-btn").on("click", function(event){
        event.preventDefault();
        $("#customer-name").val("");
        $("#customer-email").val(""); 
        $("#customer-message").val("");
        $('#sent-message').modal('show');

    });

    $("#policy-link").on("click", function(event){
        event.preventDefault();
    });

    // social icon prevent default
    $(".social-icons").on("click", function(event){
        event.preventDefault();
    });
});