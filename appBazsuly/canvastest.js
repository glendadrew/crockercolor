    $(function() {

// block right click
    window.oncontextmenu = function() { 
return false; 
};

// back button animation

$(window).on("load", function(){
    $(".backbutton").animate({"right": "-=50px"}, "fast");
});
    

// app code below 



 //styling range sliders - change fill before slider thumb on move 
          $('input[type="range"]').on('input', function() {
            var percent = Math.ceil(((this.value - this.min) / (
                this.max - this.min)) * 100);
            console.log(this.min);
            $(this).css('background',
                '-webkit-linear-gradient(left, white 0%, white ' +
                    percent + '%, #D9D9D9 ' + percent + '%)');
        });
        
        $(".questions").hide();
        $(".happy").hide();
        $(".sad").hide();
        $(".energetic").hide();
        $(".scary").hide();
        $(".galleryimgs").hide();
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        // Image Array
        var imageArray = new Array();
        imageArray[0] = "image1.png";
        imageArray[1] = "image2.png";
        imageArray[2] = "image3.png";
        imageArray[3] = "image4.png";
        imageArray[4] = "image5.png";
        imageArray[5] = "image6.png";
        imageArray[6] = "image7.png";
        imageArray[7] = "image8.png";
        imageArray[8] = "image9.png";
        // Caption Array
        var caption = new Array();
        caption[0] =
        "'The Iris Flowers of Horikiri' by Theodore Wores, c. Tokio 1893";
        caption[1] = "'The Garden' by Selden Connor Gile, 1919";
        caption[2] =
        "'Untitled (Tropical Landscape)' by Fortunato Arriola, c. 1866";
        caption[3] = "'The Arroyo Seco, Pasadena' by Franz Bischoff, c. 1918";
        caption[4] = "'In the Artist’s Studio' by Edouard-Antoine Marsal, c. 1889";
        caption[5] = "'Sleeping Beauty' by Roland Risse,  n.d";
        caption[6] = "'Vision of Saint Francis' by Arthur Mathews, c. 1911";
        caption[7] =
        "'Sunday Morning in the Mines' by Charles Christina Nahl, c. 1872";
        caption[8] =
        "' Thunderstorm on the Roman Campagna' by Albert Venue, c. 1868";
        // Choose Random Image and Put in Canvas, grab caption
        var num = Math.floor(Math.random() * 9);
        document.getElementById('caption').innerHTML = caption[num];
        var img = new Image();
        img.crossOrigin = '';
        img.src = imageArray[num];
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height);
            // Initial Grayscaling/Darkening
            Caman("#canvas", function() {
                this.hue(0).saturation(-100).brightness(-40).render();
            });
        }
        var $reset = $('#resetbtn');
        // Apply Filters on Slider Change
        $('input[type=range]').change(applyFilters);

        function applyFilters() {
            var hue = parseInt($('#hue').val());
            var sat = parseInt($('#saturation').val());
            var bright = parseInt($('#brightness').val());
            Caman('#canvas', img, function() {
                this.revert(false);
                this.hue(hue).saturation(sat).brightness(bright)
                .render(), { queue: false };
            });


            // change control and tab panels on hue-rotate, except on images
            $('.controlpanel').css(
             '-webkit-filter','hue-rotate(' + hue + 'deg)', { queue: false });

            $('label').css(
             '-webkit-filter','hue-rotate(' + hue + 'deg)', { queue: false });

            $('.tab').css(
             '-webkit-filter','hue-rotate(' + hue + 'deg)', { queue: false });


            $('img').css(
             '-webkit-filter','hue-rotate(' + -hue + 'deg)', { queue: false });
  

        }


          // Reset Image Back to Initial Grayscale //
          $reset.on('click', function(e) {
            $('input[type=range]').val(-100);
            Caman('#canvas', img, function() {
                this.revert(false);
                this.render();
                this.hue(0).saturation(-100).brightness(-40)
                .render();
                this.fade;
            });
        });



        // Download Image - save as artark(X).png and show Mood Questions
        function downloadCanvas(link, canvasId, filename) {
            link.href = document.getElementById(canvasId).toDataURL();
            link.download = filename;
        }
        $("#download").click(function() {
            var randomNum8 = Math.floor((Math.random() * 5) + 1);
            downloadCanvas(this, 'canvas', 'artark (' + randomNum8 +
                ').png');
            $(".partone").hide();
            // randomize mood order
            $(document).ready(function() {
                $('ul').each(function() {
                    // get current ul
                    var $ul = $(this);
                    // get array of list items in current ul
                    var $liArr = $ul.children('li');
                    // sort array of list items in current ul randomly
                    $liArr.sort(function(a, b) {
                            // Get a random number between 0 and 10
                            var temp = parseInt(
                                Math.random() *
                                10);
                            // Get 1 or 0, whether temp is odd or even
                            var isOddOrEven =
                            temp % 2;
                            // Get +1 or -1, whether temp greater or smaller than 5
                            var isPosOrNeg =
                            temp > 5 ? 1 :
                            -1;
                            // Return -1, 0, or +1
                            return (isOddOrEven *
                                isPosOrNeg);
                        })
                        // append list items to ul
                        .appendTo($ul);
                    });
});
    $(".questions").show();
});
        // Show happy paintings if happy button is clicked
        $("#button").click(function() {
            var randomNum8 = Math.floor((Math.random() * 5) + 1);
            downloadCanvas(this, 'canvas', 'happy (' + randomNum8 +
                ').png');
            $(".questions").hide();
            $(".happy").show();

            $(".controlpanel").animate({height: '325px'}, { queue: false });
            $(".tab").animate({bottom: '325px'}, { queue: false });

        });
        //show sad paintings
        $("#buttonsad").click(function() {
            var randomNum8 = Math.floor((Math.random() * 5) + 1);
            downloadCanvas(this, 'canvas', 'sad (' + randomNum8 +
                ').png');
            $(".questions").hide();
            $(".sad").show();

            $(".controlpanel").animate({height: '325px'}, { queue: false });
            $(".tab").animate({bottom: '325px'}, { queue: false });

        });
        //show energetic paintings
        $("#buttonenergetic").click(function() {
            var randomNum8 = Math.floor((Math.random() * 5) + 1);
            downloadCanvas(this, 'canvas', 'energetic (' + randomNum8 +
                ').png');
            $(".questions").hide();
            $(".energetic").show();

            $(".controlpanel").animate({height: '325px'}, { queue: false });
            $(".tab").animate({bottom: '325px'}, { queue: false });
        });
        // show scary paintings
        $("#buttonscary").click(function() {
            var randomNum8 = Math.floor((Math.random() * 5) + 1);
            downloadCanvas(this, 'canvas', 'scary (' + randomNum8 +
                ').png');
            $(".questions").hide();
            $(".scary").show();

            $(".controlpanel").animate({height: '325px'}, { queue: false });
            $(".tab").animate({bottom: '325px'}, { queue: false });
        });
        // return to start (refresh page)
        $('.returnhome').click(function() {
            location.reload();

        });

            // paint tab //
            $('.paint').click(function() {

                $(".controlpanel").animate({height: '300px'}, { queue: false });
                $(".tab").animate({bottom: '300px'}, { queue: false });
                $(".gallery").animate({height: '40px'}, { queue: false });
                $(".paint").animate({height: '50px'}, { queue: false });

                $(".galleryimgs").hide();
                $(".controls").show();

                $(".paint").css({background: '#948C75', 'color': '#D9CEB2'});
                $(".gallery").css({background: '#7A6A53', 'color': '#E0D5B9'});




            });

               // paint tab //
               $('.gallery').click(function() {

                $(".paint").animate({height: '40px'}, { queue: false });
                $(".gallery").animate({height: '50px'}, { queue: false });
                $(".controlpanel").animate({ height: '450px'}, { queue: false });
                $(".tab").animate({bottom: '450px'}, { queue: false });

                $(".galleryimgs").show();
                $(".controls").hide();
                $(".paint").css({background: '#7A6A53', 'color': '#E0D5B9'});
                $(".gallery").css({background: '#948C75', 'color': '#D9CEB2'});


            });
           });

    // redirect after time out

var timer;
window.onload=document.onmousemove=document.onkeypress= function(){
    clearTimeout(timer);
    timer=setTimeout(function(){location="../apphomepage.html"}, 180000)
}
