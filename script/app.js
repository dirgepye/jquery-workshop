// Write your code here!

$(document).ready(function() {
    $('.announcement').append("<button class='close'>X</button>");

    $('.close').click(function() {

        console.log($(this));

        if ($(this).text() === "X") {
            // console.log("x");
            $(this).parent().find("p").toggle();
            $(this).text("show announcment");

        }
        else {
            $(this).text("X");
            $(this).parent().find("p").toggle();
        }
    });
});
