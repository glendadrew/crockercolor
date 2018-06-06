//$(document).ready(function(){
//    $("div").mouseup(function(){
//        $(this).after("<p style='color:green;'>Mouse button released.</p>");
//    });
//    $("div").mousedown(function(){
//        $(this).after("<p style='color:purple;'>Mouse button pressed down.</p>");
//    });
//});
$(document).ready(function() {
    




    console.log("ready");
    // block right click
    window.oncontextmenu = function() {
        return false;
    };
    // app code below 
    //    document.body.style.backgrou  ndColor = "black";
    var swatchColor;
    var swatchR = Math.floor((Math.random() * 255) + 1);
    var swatchG = Math.floor((Math.random() * 255) + 1);
    var swatchB = Math.floor((Math.random() * 255) + 1);
    swatchColor = 'rgb(' + swatchR + ',' + swatchG + ',' + swatchB + ')';
    document.getElementById("swatch").style.background = swatchColor;
    //setup tooltip
    $("#slider-tooltip").noUiSlider({
        start: [40, 50],
        range: {
            'min': 30,
            '30%': 40,
            'max': 50
        }
    });

// room for error
    var swatchRhigh = swatchR + 20 ;
    var swatchRlow = swatchR - 20;

    var swatchGhigh = swatchG + 30 ;
    var swatchGlow = swatchG - 30;

    var swatchBhigh = swatchB + 20 ;
    var swatchBlow = swatchB - 20;









    // When no HTML is provided, noUiSlider creates an empty <div>
    $("#slider-tooltip").Link('lower').to('-inline-');
    //end tooltip setup
    $('.sliders').noUiSlider({
        start: 0,
        connect: "upper",
        orientation: "vertical",
        direction: "rtl",
        range: {
            'min': 0,
            'max': 255
        },
        format: wNumb({
            decimals: 0
        })
    });
    // Bind the color changing function
    // to the slide event.
    $('.sliders').on('slide', setColor);
    // Set the text to black.
    //    $("p").css("color", "black");




   


    function setColor() {

        console.log("setting color");

        color = 'rgb(' + 
        $("#red").val() + ',' + 
        $("#green").val() + ',' + 
        $("#blue").val() + ')';

        // Fill the color box.
        console.log("color set:" + color);
        $("#match").css({backgroundColor: color,});

       // works, just difficult since there's no room for error
       // if ($("#red").val() == swatchR &&
       // $("#green").val() == swatchG && 
       // $("#blue").val() == swatchB){


     if ($("#red").val() >= swatchRlow && 
            $("#red").val() <= swatchRhigh &&
            $("#green").val() >= swatchGlow && 
            $("#green").val() <= swatchGhigh &&
            $("#blue").val() >= swatchBlow && 
            $("#blue").val() <= swatchBhigh ) {

        console.log("everything matches");
        $(".win").show();

        }
    }


// You Win! background color animation
 colors = ['#BF0C43', '#F98615', '#F9BA15', '#8EAC00', '#127A97' ]
    var i = 0;
    animate_loop = function() {
            $('.win').animate({backgroundColor:colors[(i++)%colors.length]
            }, 500, function(){
                        animate_loop();
            });
    }
    animate_loop();



});