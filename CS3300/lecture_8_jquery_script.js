// To change CSS styles by hovering over heading element and also alert by clicking a GamepadButton, much easier with jquery

$(document).ready(function() {
    $('#hidden').hover(function(){
        $(this).css("color", "black");
    },
    function() {
        $(this).hide();
        // another way:  $(this).css("display", "none");
    });
    // any button i click this function will run
    $("#button1").click(function() { 
        alert("I am alerting you")
    })
});