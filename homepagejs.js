$(document).ready(function() {
// block right click
    window.oncontextmenu = function() { 
return false; 
};

// app code below 



$(".first").hide();

$(".creditdiv").hide();

$(".creditsName_active").hide();
$(".credittext").hide();
function shake(div){   
                                                                                                                                                                                       
    var interval = 100;                                                                                                 
    var distance = 10;                                                                                                  
    var times = 4;                                                                                                      

    $(div).css('position','relative');                                                                                  

    for(var iter=0;iter<(times+1);iter++){                                                                              
        $(div).animate({ 
            left:((iter%2===0 ? distance : distance*-1))
            },interval);                                   
    }//for                                                                                                              

    $(div).animate({ left: 0},interval);                                                                                

}//shake  



//blinking backgrounds
        (function Forever(){
           
                function blinker() {
                $('.one').addClass('oneactive');
                shake('.a');
                setTimeout(function(){
                $('.one').removeClass('oneactive');}, 1000);
                }
                setTimeout(blinker, 1000);

                function blinkerb() {
                $('.two').addClass('twoactive');
                shake('.b');
                setTimeout(function(){
                $('.two').removeClass('twoactive');}, 1000);
                }
                setTimeout(blinkerb, 2000);

                function blinkerc() {
                $('.three').addClass('threeactive');
                shake('.c');
                setTimeout(function(){
                $('.three').removeClass('threeactive');}, 1000);
                }
                setTimeout(blinkerc, 3000);

                function blinkerd() {
                $('.four').addClass('fouractive');
                shake('.d');
                setTimeout(function(){
                $('.four').removeClass('fouractive');}, 1000);
                }
                setTimeout(blinkerd, 4000);

                function blinkere() {
                $('.five').addClass('fiveactive');
                shake('.e');
                setTimeout(function(){
                $('.five').removeClass('fiveactive');}, 1000);
                }
                setTimeout(blinkere, 5000);

                function blinkerf() {
                $('.six').addClass('sixactive');
                shake('.f');
                setTimeout(function(){
                $('.six').removeClass('sixactive');}, 1000);
                }
                setTimeout(blinkerf, 6000);
            setTimeout(Forever,10000);
        })();

    $('.container').toggleClass("visible");

    $('.link').click(function(event) {
        $('.appIconName').css({'display': 'none'});
        var clone = $('div',this).clone().addClass('active');
        var parent = $('div',this).parent();
        var pos = $('div',this).position();
        
        $('div',this).append(clone);
        
        console.log(pos);

        clone.css({'position' : 'absolute', left: pos.left + 'px', top: pos.top + 'px'}).animate({
            width: '100%', 
            height : '100%',
            top: 0,
            left: 0
        },300);


        // Over-rides the link
        event.preventDefault();
        // Sets the new destination to the href of the link
        newLocation = this.href;
        color = $(this).data("color");
        $('body').css('background-color', color );
        $('.container').css('opacity','0' );
        // Delays action
        window.setTimeout(function() {
            // Redirects to new destination
                window.location = newLocation;
        }, 350);
    });


$('.credits').click(function() {

    $(".one").toggleClass('newbga')
    $(".two").toggleClass('newbgb')
    $(".three").toggleClass('newbgc')
    $(".four").toggleClass('newbgd')
    $(".five").toggleClass('newbge')
    $(".six").toggleClass('newbgf')


    $("img").toggleClass('img', 250).toggleClass('faded', 250);

    $(".appName").toggleClass('appName_active', 250);

    $(".first").fadeToggle(250);

    $(".creditdiv").fadeToggle(250);


    $(".creditsName_active").fadeToggle(100);

    $(".creditsName").fadeToggle(100);
    $(".credittext").fadeToggle(100);

});





});