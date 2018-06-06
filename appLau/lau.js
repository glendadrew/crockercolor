//Javascript

$(document).ready(function() {
    console.log("The javascript is in.");


// back button animation

$(window).on("load", function(){
    $(".backbutton").animate({"right": "-=50px"}, "fast");
});


// block right click
    window.oncontextmenu = function() { 
return false; 
};
    


//randomize colors for useless boxes
function randomizeColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

$(function() {
    $(".wrong").each(function() {
        $(this).css("background-color", randomizeColor());
    });
});
    
//hide things
closeTip();
    
//closable start screen, start timer on button
$( "#go" ).click(function() {
    $( this ).parent().slideUp("slow");
});

//set global variable score
var score = 0;
    
//makes glass draggable...
$("#glass").draggable();

//...and droppable on only the right fish
$("#fish1").droppable({
    accept: "#glass",
    drop: function(event, ui) {
        $("#congrats").slideDown('fast');
        score++;
        $('#scoreValue').text(score);
    }
});
    
//blink the tooltip
function blinker(){
    $('.popup').fadeOut(500);
    $('.popup').fadeIn(500);
}
    
setInterval(blinker, 500);


//change seek colors on #reset click
var colorSeek = ['#80a355', "#802355", "#77613b", "#ff8000"];

//change lens color on #reset click. must mix with fishOne
var glassColor = ["#ffff00", '#ffff00', "#ff0000", "#00a651"];
    
//change fish colors on #reset click. fishOne is the only one to worry about.
var fishOne = ['#ff0000','#0047aa','#0047aa','#ee1c24'];

//change wanted poster text on #reset click
var wantedColor = ["ORANGE", "GREEN", "VIOLET", "BROWN"];
//flair text below wanted poster
var wantedFlair = ["red and yellow make orange, which is another secondary color","yellow and blue make green, which is another secondary color.","red and blue make violet, which is another secondary color.","green and red make brown because they are complementary colors."];

$seek = $('#seek');
    
    
$seek.css({"background-color":"#ff8000"});    
ln = colorSeek.length;

$('.reset').on("click",function() {
        var i = $seek.data("index");
            ++i;
        if (i >= ln) i = 0;
            $seek.css({'background-color': colorSeek[i]});
            $seek.data("index", i);
            $('#glass').animate({top:"0px", left: "0px"});
        closeTip(1, false);
    });

//change wanted poster
var j = 0

$('.reset').click(function(){
    console.log('working');
    ++j;
    j = j % wantedColor.length;
    
    $('#wanted1').text(wantedColor[ j ]);
    $('#congrats2').text(wantedFlair[ j ]);
    $('#glass').css({'background-color': glassColor[ j ]});
    $('#fish1').css({'background-color': fishOne [ j ]});
});

//randomize div order
$('.reset').click(function(){
    var container = $('#sky');
    var nodes = container.children();
    for (var i = 1; i< nodes.length; i++) {
        container.append(nodes.eq(Math.floor(Math.random()*nodes.length)));
    }
});

$('#finished').click(function(){
    location.reload();
});

//close the tips function
function closeTip() {
    $('.popup, #congrats, #tip1').hide();
}
   
});


// redirect after time out

var timer;
window.onload=document.onmousemove=document.onkeypress= function(){
    clearTimeout(timer);
    timer=setTimeout(function(){location="../apphomepage.html"}, 180000)
}
