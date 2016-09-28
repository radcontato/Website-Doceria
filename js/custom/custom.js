
/* Button Seguir para section */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });
   

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 20
        }
    })

    
    
    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });
    
    

})(jQuery); // End of use strict




/* Button Back to Top */

$(function() {
    // Back to top button
    var topBtn = $('.top');
    $(window).scroll(function() {
        if($(this).scrollTop() > 100)
            topBtn.css('visibility', 'visible');
        else
            topBtn.css('visibility', 'hidden');
    });
    topBtn.click(function() {
        $('body').animate({scrollTop: 0}, 1000);
    });
});

/* End Button Back to Top */


/* Tool Tip */

$(document).ready(function () {
  //Tooltip, activated by hover event
  $("body").tooltip({   
    selector: "[data-toggle='tooltip']",
    container: "body"
  });
});

/* End Tool Tip */



