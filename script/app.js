// Write your code here!
$(document).ready(function() {


    $("ul li img").on('click', function() {
        var $img = $(this);
        var src = $img.attr('src');
        var alt = $img.attr('alt');

        $("body").append("<div class='overlay'></div>");
        $(".overlay").append("<img src='" + src + "'>");
        $(".overlay").append("<p>'" + alt + "'</p>");
        
        
        $(".overlay").on("click", function() {
        $(".overlay").remove();

    });
    
    })
});