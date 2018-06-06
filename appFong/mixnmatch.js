//$(document).ready(function(){
//    $("div").mouseup(function(){
//        $(this).after("<p style='color:green;'>Mouse button released.</p>");
//    });
//    $("div").mousedown(function(){
//        $(this).after("<p style='color:purple;'>Mouse button pressed down.</p>");
//    });
//});


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





    function setColor(){

        // Get the slider values,
        // stick them together.
        var red = $("#red").val();
        var color = 'rgb(' +
            $("#red").val() + ',' +
            $("#green").val() + ',' +
            $("#blue").val() + ')';
        
        // Fill the color box.
        $("#match").css({
            background: color,
            color: color
        });
        
        //start
        
        if ($("#red").val() >= 110 && $("#red").val() <= 140 && $("#green").val() >= 110 && $("#green").val() <= 140 && $("#blue").val() >= 15 && $("#blue").val() <= 50) {

            //if ($("#blue").val()>255/2){
            console.log("corrrect!!!!!!!");
            alert("matched");
          
        }
        
        
        //end
        
        
    }