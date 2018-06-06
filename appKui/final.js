$(document).ready(function() {
    
// block right click
    window.oncontextmenu = function() { 
return false; 
};

// back button animation

$(window).on("load", function(){
    $(".backbutton").animate({"right": "-=50px"}, "fast");
});

// app code below 

    var audio = new Audio('dingsound.mp3');
    var buzz = new Audio('buzz.mp3');
    var music = new Audio('nyan3.mp3');
    var star = new Audio('star.mp3');
    var life = new Audio('life.mp3');
    var laugh = new Audio('laugh.mp3');
    music.volume=0.3;
    life.volume=0.5;
    
    $("#resetConfirm").css( "opacity", 0 );
    $("#levelUp").css( "opacity", 0 );
    $("#zoneUp").css( "opacity", 0 );
    $("#wrongArea").css( "opacity", 0 );
    
    var score = 0;
    var levelScore = 0;
    var gameStarted = 0;
    var musicCounter = 0;
    var soundCounter = 0;
    var lives = 3;
    var special = Math.floor(Math.random()*21);
    
    var gameLevel = 1;
    var zone = 1;
    var levelMult = 0;
    var levelTime = 30000;
    var multiplier = 1;
    var streak = 0;
    var numBlocks = 0;
    var blockList = "";
    
	$('#begin').click(function(){
        $(".blocks").css('z-index', 3);
        $('#startGame').html("<h1>Level " + gameLevel + ": Primary Colors</h1><div id='currentColors'><div id='s1'></div><div id='s2'></div><div id='s3'></div><div id='currentClear'></div></div><h2>Get Ready! Level " + gameLevel + " starting in</h2><br/><h4>3</h4>");
            setTimeout(function(){
                $('#startGame').html("<h1>Level " + gameLevel + ": Primary Colors</h1><div id='currentColors'><div id='s1'></div><div id='s2'></div><div id='s3'></div><div id='currentClear'></div></div><h2>Get Ready! Level " + gameLevel + " starting in</h2><br/><h4>2</h4>");
                setTimeout(function(){
                    $('#startGame').html("<h1>Level " + gameLevel + ": Primary Colors</h1><div id='currentColors'><div id='s1'></div><div id='s2'></div><div id='s3'></div><div id='currentClear'></div></div><h2>Get Ready! Level " + gameLevel + " starting in</h2><br/><h4>1</h4>");
                    setTimeout(function(){
                        $('#startGame').html("<h1>Level " + gameLevel + ": Primary Colors</h1><div id='currentColors'><div id='s1'></div><div id='s2'></div><div id='s3'></div><div id='currentClear'></div></div><h2></h2><br/><h3>Go!</h3>");
                        $("#startGame").fadeTo( 200, 0 );
                        setTimeout(function(){
                            $('#startGame').css("visibility", "hidden");
                            startBlocks();
                        }, 200);
                    }, 1000);
                }, 1000);
            }, 1000);
        
        //$('#levelUp').css("visibility", "hidden");
        
        
        return false;
	});
    
    $('#reset').click(function(){
        if (gameStarted > 0){
            $('#resetConfirm').css("visibility", "visible");
            $("#resetConfirm").fadeTo( 500, 1 );
        }
        return false;
	});
    
    $('#music').click(function(){
        if (musicCounter == 0){
            musicCounter++;
            music.pause();
            $('#music').text('MUSIC ON');
        } else {
            musicCounter--;
            music.play();
            $('#music').text('MUSIC OFF');
        }

        return false;
	});
    
    $('#sound').click(function(){
        if (soundCounter == 0){
            soundCounter++;

            audio.volume = 0.0;
            buzz.volume = 0.0;
            star.volume = 0.0;
            life.volume = 0.0;

            $('#sound').text('SOUND ON');
        } else {
            soundCounter--;
            audio.volume = 1.0;
            buzz.volume = 1.0;
            star.volume = 1.0;
            life.volume = 1.0;
            $('#sound').text('SOUND OFF');
        }

        return false;
	});
    
    $('#cancelReset').click(function(){
        $("#resetConfirm").fadeTo( 500, 0 );
        setTimeout(function(){
            $('#resetConfirm').css("visibility", "hidden");
        }, 500);
        return false;
	});

function createDummies(){
    //Create dummy colors at random
        var dummy = "";
        
        //PRIMARY
        if (gameLevel % 4 == 1){
            var rdm = Math.floor(Math.random()*12);
            switch (rdm){
                
                case 0:
                dummy = "#ffbf50 ";
                break;
                    
                case 1:
                dummy = "#f79338 ";
                break;
                    
                case 2:
                dummy = "#f3703c ";
                break;
                    
                case 3:
                dummy = "#9f0064 ";
                break;
                    
                case 4:
                dummy = "#892891 ";
                break;
                    
                case 5:
                dummy = "#5e6cb3 ";
                break;
                    
                case 6:
                dummy = "#009f8b ";
                break;
                    
                case 7:
                dummy = "#50b948 ";
                break;
                    
                case 8:
                dummy = "#bfd730 ";
                break;
                    
                case 9:
                dummy = "#000000";
                break;
                    
                case 10:
                dummy = "#ffffff";
                break;
                    
                case 11:
                dummy = "#777777";
                break;
            }
        }
        //SECONDARY
        if (gameLevel % 4 == 2){
            var rdm = Math.floor(Math.random()*12);
            switch (rdm){
                
                case 0:
                dummy = "#ffbf50 ";
                break;
                    
                case 1:
                dummy = "#ffff00 ";
                break;
                    
                case 2:
                dummy = "#f3703c ";
                break;
                    
                case 3:
                dummy = "#9f0064 ";
                break;
                    
                case 4:
                dummy = "#ff0000 ";
                break;
                    
                case 5:
                dummy = "#5e6cb3 ";
                break;
                    
                case 6:
                dummy = "#009f8b ";
                break;
                    
                case 7:
                dummy = "#0000ff ";
                break;
                    
                case 8:
                dummy = "#bfd730 ";
                break;
                    
                case 9:
                dummy = "#000000";
                break;
                    
                case 10:
                dummy = "#ffffff";
                break;
                    
                case 11:
                dummy = "#777777";
                break;
            }
        }
        //TERTIARY
        if (gameLevel % 4 == 3){
            var rdm = Math.floor(Math.random()*9);
            switch (rdm){
                
                case 0:
                dummy = "#ffff00 ";
                break;
                    
                case 1:
                dummy = "#f79338  ";
                break;
                    
                case 2:
                dummy = "#ed1c24  ";
                break;
                    
                case 3:
                dummy = "#892891  ";
                break;
                    
                case 4:
                dummy = "#0000ff ";
                break;
                    
                case 5:
                dummy = "#50b948  ";
                break;
                    
                case 6:
                dummy = "#000000";
                break;
                    
                case 7:
                dummy = "#ffffff";
                break;
                    
                case 8:
                dummy = "#777777";
                break;
            }
        }
        //BLACK AND WHITE
        if (gameLevel % 4 == 0){
            var rdm = Math.floor(Math.random()*10);
            switch (rdm){
                
                case 0:
                dummy = "#333333 ";
                break;
                    
                case 1:
                dummy = "#444444  ";
                break;
                    
                case 2:
                dummy = "#555555  ";
                break;
                    
                case 3:
                dummy = "#666666  ";
                break;
                    
                case 4:
                dummy = "#777777 ";
                break;
                    
                case 5:
                dummy = "#888888  ";
                break;
                    
                case 6:
                dummy = "#999999";
                break;
                    
                case 7:
                dummy = "#aaaaaa";
                break;
                    
                case 8:
                dummy = "#bbbbbb";
                break;
                    
                case 9:
                dummy = "#cccccc";
                break;
            }
        }
    return dummy;
}
    
function createBlock(){
    var block = Math.floor(Math.random()*3) + 1;
        var col = "";
        
        if (gameLevel % 4 == 1){ //PRIMARY
            if (block == 1){
                col = "#ff0000";
            }
            if (block == 2){
                col = "#ffff00";
            }
            if (block == 3){
                col = "#0000ff";
            }
        }
        if (gameLevel % 4 == 2){ //SECONDARY
            if (block == 1){
                col = "#f79338";
            }
            if (block == 2){
                col = "#892891";
            }
            if (block == 3){
                col = "#50b948";
            }
        }
        if (gameLevel % 4 == 3){ //TERTIARY
            var doubleBlock = Math.floor(Math.random()*6) + 1;
            if (doubleBlock == 1){
                col = "#ffbf50";
            }
            if (doubleBlock == 2){
                col = "#f3703c ";
            }
            if (doubleBlock == 3){
                col = "#9f0064";
            }
            if (doubleBlock == 4){
                col = "#5e6cb3";
            }
            if (doubleBlock == 5){
                col = "#009f8b";
            }
            if (doubleBlock == 6){
                col = "#bfd730";
            }
        }
        if (gameLevel % 4 == 0){ //BLACK AND WHITE
            var bwBlock = Math.floor(Math.random()*2) + 1;
            if (bwBlock == 1){
                col = "#000000";
            }
            if (bwBlock == 2){
                col = "#FFFFFF";
            }
        }
    return col;
}
    
function addCommas(score){
    var parts = score.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}
    
function startBlocks(){
    var specialCount = 0;
    var skullCount = 0;
    var skullActive = 0;
    if (musicCounter != 1){
        music.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
        }, false);
        music.play();
    }
    var numCorrect = 0;
    while (numBlocks < 15){
        //Generate block left position;
        var pos = Math.floor(Math.random()*701);
        var pos2 = Math.floor(Math.random()*701);
        var dummyPos = Math.floor(Math.random()*701);
        var dummyPos2 = Math.floor(Math.random()*701);
        var dummyPos3 = Math.floor(Math.random()*701);
        var specialPos = Math.floor(Math.random()*701);
        var skullPos = Math.floor(Math.random()*701);
        var topBlock = Math.floor(Math.random()*500) - 5800;
        var topBlock2 = Math.floor(Math.random()*500) - 6800;
        var topPos = Math.floor(Math.random()*500) - 6300;
        var topPos2 = Math.floor(Math.random()*500) - 6800;
        var topPos3 = Math.floor(Math.random()*1000) - 6800;
        var topSpecial = Math.floor(Math.random()*500) - 6300;
        var topSkull = Math.floor(Math.random()*300) - 5800;
        var d1=createDummies();
        var d2=createDummies();
        var col = createBlock();
        var col2 = createBlock();
        
        blockList = blockList + "<div class='blocks' style='position:relative; background:" + col2 + "; left:" + pos2 + "px; top: " + topBlock2 + "px;'></div><div class='dummies' style='position:relative; background:" + d1 + "; left: " + dummyPos2 + "px; top: " + topPos2 + "px;'></div><div class='dummies' style='position:relative; background:" + d2 + "; left: " + dummyPos + "px; top: " + topPos + "px;'></div><div class='blocks' style='position:relative; background:" + col + "; left:" + pos + "px; top: " + topBlock + "px;'></div>";
        
        //Special Block
        if ((25 - special) < 5 && specialCount < 1){
            specialCount++;
            blockList = blockList + "<div class='special' style='position:relative; left:" + specialPos + "px; top: " + topSpecial + "px;'><h3>+1</h3></div>";
            special = Math.floor(Math.random()*20);
        }
        
        if (zone >= 1 && numBlocks < 10){
            var skullChance = Math.floor(Math.random()*10/zone)+1;
            if (skullChance == 1 && skullCount < (zone*3+2)){
                blockList = blockList + "<div class='skull' style='position:relative; background-color:" + col + "; left:" + skullPos + "px; top: " + topSkull + "px;'></div>";
                skullCount++;
            }
        }
        
        $("#playArea").html(blockList);
        
        //Slide down correct blocks
        $(".blocks").animate({
            top: '800px',
            
            }, {easing: "linear",duration:levelTime}, function(){

        });
        
        var specialTime = levelTime / 1.5;
        
        if (levelTime < 12000) {
            specialTime = levelTime / 1.1;
        }
        
        if (specialCount > 0){
        //Slide down special blocks
        $(".special").animate({
            top: '800px',
            
            }, {easing: "linear",duration:(specialTime)}, function(){

        });
        }
        
        //Slide down dummy blocks
        $(".dummies").animate({
            top: '800px',
            }, {easing: "linear",duration:levelTime});
        
        //Slide down skull blocks
        $(".skull").animate({
            top: '800px',
            }, {easing: "linear",duration:levelTime});
        
        gameStarted++;
        numBlocks++;
    }
    
    //Click correct block
    $('.blocks').mousedown(function(){
        $(this).css("visibility", "hidden");
        
        //If correct block chosen, increase score
        audio.play();
        score = score + ((100 + levelMult)*multiplier);
        $("#scoreNum").text(addCommas(score));
        numCorrect++;
        streak++;
        if (streak % 15 == 0){
            multiplier++;
            star.play();
            $("#multiplier").text("BONUS x" + multiplier);
            $("#wrongArea").css("background-color", "#00ff00");
            $("#wrongArea").text("x" + multiplier);
            $("#wrongArea").fadeTo( 100, .4 );
                setTimeout(function(){
            $("#wrongArea").fadeTo( 100, 0 );
        }, 200);
        }
        
        $('#scoreNum').animate({
            color: "#4bea3f "
        }, 20);
        setTimeout(function(){
            $('#scoreNum').animate({
            color: "#000000"
        }, 100);
        }, 200);
        return false;
	});
    
    //Click special block
    $('.special').mousedown(function(){
        $(this).css("visibility", "hidden");
        
        //If correct block chosen, increase score
        life.play();
        score = score + ((100 + levelMult)*multiplier*5);
        $("#scoreNum").text(addCommas(score));
        lives++;
        $("#livesLeft").html("" + lives + " lives left");
        numCorrect++;
        streak++;
        if (streak % 10 == 0){
            multiplier++;
            star.play();
            $("#multiplier").text("BONUS x" + multiplier);
            $("#wrongArea").css("background-color", "#00ff00");
            $("#wrongArea").text("x" + multiplier);
            $("#wrongArea").fadeTo( 100, .4 );
                setTimeout(function(){
            $("#wrongArea").fadeTo( 100, 0 );
        }, 200);
        }
        
        $('#scoreNum').animate({
            color: "#4bea3f "
        }, 20);
        setTimeout(function(){
            $('#scoreNum').animate({
            color: "#000000"
        }, 100);
        }, 200);
        return false;
	});
    
    //click dummy blocks
    $('.dummies').mousedown(function(){
        $(this).css("visibility", "hidden");
        
        //If wrong block chosen, decrease score
        streak = 0;
        multiplier = 1;
        $("#multiplier").text(" ");
        buzz.play();
        score = score - 100 - levelMult;
        $("#scoreNum").text(addCommas(score));
        $("#wrongArea").css("background-color", "#ff0000");
        $("#wrongArea").text("OOPS!");
        $("#wrongArea").fadeTo( 100, .8 );
        if (skullActive != 1 ){
            setTimeout(function(){
                $("#wrongArea").fadeTo( 100, 0 );
            }, 200);
        } else {
            setTimeout(function(){
                $("#wrongArea").text("");
                $("#wrongArea").fadeTo( 100, 0.4 );
            }, 200);
        }
        $('#scoreNum').animate({
            color: "#ff0000"
        }, 20);
        setTimeout(function(){
            $('#scoreNum').animate({
            color: "#000000"
        }, 100);
        }, 200);
        return false;
	});
    
    //click skull blocks
    $('.skull').mousedown(function(){
        $(this).css("visibility", "hidden");
        
        //If wrong block chosen, decrease score
        streak = 0;
        multiplier = 1;
        $("#multiplier").text(" ");
        laugh.play();
        score = score - 100 - levelMult;
        $("#scoreNum").text(addCommas(score));
        $("#wrongArea").css("background-color", "#ff0000");
        $("#wrongArea").css("background-image", "url('images/skullbg.png')");
        $("#wrongArea").text("");
        $("#wrongArea").fadeTo( 100, .4 );
        skullActive++;
        $(".blocks").css("width", "60px");
        $(".blocks").css("height", "60px");
        $(".dummies").css("width", "60px");
        $(".dummies").css("height", "60px");
        
        setTimeout(function(){
            skullActive = skullActive - 1;
            if (skullActive == 0){
                $(".blocks").css("width", "90px");
                $(".blocks").css("height", "90px");
                $(".dummies").css("width", "90px");
                $(".dummies").css("height", "90px");
                $("#wrongArea").css("background-image", "none");
                $("#wrongArea").fadeTo( 100, 0 );
            }
        }, 8000);
        $('#scoreNum').animate({
            color: "#ff0000"
        }, 20);
        setTimeout(function(){
            $('#scoreNum').animate({
            color: "#000000"
        }, 100);
        }, 200);
        return false;
	});
    
    
    setTimeout(function(){
            resetBlocks(numCorrect);
    }, levelTime);
}
    
function resetBlocks(numCorrect){
    numblocks = 0;
    $(".blocks").css("top:-1550px;");
    numBlocks = 0;
    blockList = "";
    
    $("#wrongArea").fadeTo( 100, 0 );
    $("#wrongArea").text("");
    $("#wrongArea").css("background-image", "none");
    skullActive = 0;
    $(".blocks").css("width", "90px");
            $(".blocks").css("height", "90px");
            $(".dummies").css("width", "90px");
            $(".dummies").css("height", "90px");
            
    
    if (numCorrect >= 15 && score > levelScore){
        levelMult +=50;
        
        special = special + 3;
        
        if (numCorrect < 20){
            multiplier = 1;
            streak = 0;
            $("#multiplier").text(" ");
        }
        
        levelUpDialog();
        levelScore = score;
    } else {
        failDialog(numCorrect);
    }
    numCorrect = 0;
    
    return false;
}
    
function zoneUp(){
    if (levelTime < 21000){
        levelTime = (levelTime - 1500);
    } else {
        levelTime = (levelTime - 5000);
    }
    $('#zoneUp').css("visibility", "visible");
    $("#zoneUp").fadeTo( 100, 1 );
    $('#zoneUp').html('<h1>Zone ' + zone + ' Complete!</h1><h2>Get ready for Zone ' + (zone+1) + '!</h2>');
    $('#zoneUp').animate({
        backgroundColor: "red"
    });
        setTimeout(function(){
            $('#zoneUp').animate({
            backgroundColor: "yellow"
            }, 100);
            setTimeout(function(){
                $('#zoneUp').animate({
                backgroundColor: "blue"
                }, 100);
                setTimeout(function(){
                    $('#zoneUp').animate({
                    backgroundColor: "black"
                    }, 100);
                    setTimeout(function(){
                        $("#zoneUp").fadeTo( 500, 0);
                        setTimeout(function(){
                            $('#zoneUp').css("visibility", "hidden");
                        }, 500);
                    }, 4000);
                }, 1);
            }, 1);
        }, 1);
    zone++;
}
    
function levelUpDialog(){
    $('#keepGoing').css("visibility", "visible");
    streak = 0;
    gameLevel++;
    music.pause();
    
    
    if (gameLevel % 4 == 1){ // PRIMARY
        zoneUp();
        $("nextColors").css("width", 300);
    $('#levelUp').html('<h1>Level ' + gameLevel + ': Primary Colors</h1><div id="nextColors"><div id="l1" style="background:#ff0000"></div><div id="l2" style="background:#ffff00 "></div><div id="l3" style="background:rgb(0, 0, 255); width:90px; height:90px; border:none;"></div><div id="nextClear"></div></div><h2 id="levelText" style="margin-bottom:30px;"></h2><a id="keepGoing" href="">START LEVEL ' + gameLevel + '!</a>');
            $("#levelText").html("Congratulations! You've completed level " + (gameLevel-1) + " with a score of " + addCommas(score) + "!<br/>Now choose these colors as you see them fall!");
        $("#active1").css("background-color", "#ff0000");
        $("#active2").css("background-color", "#ffff00");
        $("#active3").css("background-color", "#0000ff");
        $("#active3").css({"border-color": "#000", 
             "border-width":"0px", 
             "border-style":"none"});
        $("#active4").css("background-color", "#ffffff");
        $("#active5").css("background-color", "#ffffff");
        $("#active6").css("background-color", "#ffffff");
    } if (gameLevel % 4 == 2){ //SECONDARY
        $("nextColors").css("width", 300);
    $('#levelUp').html('<h1>Level ' + gameLevel + ': Secondary Colors</h1><div id="nextColors"><div id="l1" style="background:#f79338"></div><div id="l2" style="background:#50b948"></div><div id="l3" style="background:#892891"></div><div id="nextClear"></div></div><h2 id="levelText" style="margin-bottom:30px;"></h2><a id="keepGoing" href="">START LEVEL ' + gameLevel + '!</a>');
            $("#levelText").html("Congratulations! You've completed level " + (gameLevel-1) + " with a score of " + addCommas(score) + "!<br/>Combining two of the primary colors creates a secondary color!");
        $("#active1").css("background-color", "#f79338");
        $("#active2").css("background-color", "#50b948");
        $("#active3").css("background-color", "#892891");
        $("#active3").css({"border-color": "#000", 
             "border-width":"0px", 
             "border-style":"none"});
        $("#active4").css("background-color", "#ffffff");
        $("#active5").css("background-color", "#ffffff");
        $("#active6").css("background-color", "#ffffff");
    } if (gameLevel % 4 == 3){ // TERTIARY
    $('#levelUp').html('<h1>Level ' + gameLevel + ': Tertiary Colors</h1><div id="nextColors" style="width:620px; margin: 0 auto;"><div id="l1" style="background:#ffbf50"></div><div id="l2" style="background:#f3703c"></div><div id="l3" style="background:#9f0064;"></div><div id="l4" style="background:#5e6cb3"></div><div id="l5" style="background:#009f8b"></div><div id="l6" style="background:#bfd730"></div><div id="nextClear"></div></div><h2 id="levelText" style="margin-bottom:30px;"></h2><a id="keepGoing" href="">START LEVEL ' + gameLevel + '!</a>');
            $("#levelText").html("Congratulations! You've completed level " + (gameLevel-1) + " with a score of " + addCommas(score) + "!<br/>Combining a primary color and a secondary<br/>color makes these tertiary colors!");
        $("#active1").css("background-color", "#ffbf50");
        $("#active2").css("background-color", "#f3703c");
        $("#active3").css("background-color", "#9f0064");
        $("#active3").css({"border-color": "#000", 
             "border-width":"0px", 
             "border-style":"none"});
        $("#active4").css("background-color", "#5e6cb3");
        $("#active5").css("background-color", "#009f8b");
        $("#active6").css("background-color", "#bfd730");
    } if (gameLevel % 4 == 0) { //BLACK AND WHITE
        $('#levelUp').html('<h1>Level ' + gameLevel + ': Black and White</h1><div id="nextColors"><div id="l1" style="background:#000 "></div><div id="l2" style="background:rgba(0,0,0,0);"></div><div id="l3" style="background:#ffffff; border:1px solid #000000; width:88px; height:88px;"></div><div id="nextClear"></div></div><h2 id="levelText" style="margin-bottom:30px;"></h2><a id="keepGoing" href="">START LEVEL ' + gameLevel + '!</a>');
            $("#levelText").html("Congratulations! You've completed level " + (gameLevel-1) + " with a score of " + addCommas(score) + "!<br/>Different mixes of black and white create gray.<br/>Don't choose the gray blocks!");
        $("#active1").css("background-color", "#000");
        $("#active2").css("background-color", "#ffffff");
        $("#active3").css("background-color", "#ffffff");
        $("#active3").css({"border-color": "#000", 
             "border-width":"1px", 
             "border-style":"solid"});
        $("#active4").css("background-color", "#ffffff");
        $("#active5").css("background-color", "#ffffff");
        $("#active6").css("background-color", "#ffffff");
    }
    
    $('#levelUp').css("visibility", "visible");
    $("#levelUp").fadeTo( 500, 1 );
    
    //Keep going with game
    $('#keepGoing').click(function(){
        $('#keepGoing').css("visibility", "hidden");
        $('#levelText').html("Get Ready! Level " + gameLevel + " starting in<br/><h4>3</h4>");
            setTimeout(function(){
                $('#levelText').html("Get Ready! Level " + gameLevel + " starting in<br/><h4>2</h4>");
                setTimeout(function(){
                    $('#levelText').html("Get Ready! Level " + gameLevel + " starting in<br/><h4>1</h4>");
                    setTimeout(function(){
                        $('#levelText').html("<h2></h2><br/><h3>Go!</h3>");
                        $("#levelUp").fadeTo( 200, 0 );
                        setTimeout(function(){
                            $('#levelUp').css("visibility", "hidden");
                            startBlocks();
                        }, 200);
                    }, 1000);
                }, 1000);
            }, 1000);
        return false;
	});
    return false;
}
    
function failDialog(numCorrect){
    music.pause();
    lives = lives - 1;
    
    $("#livesLeft").html("" + lives + " lives left");
    if (lives == 1){
        $("#livesLeft").html("" + lives + " life left");
    }
    
    if (lives > 0){
    
    //Display Fail Dialog
    score = levelScore;
    $("#scoreNum").text(score);
        
    if (gameLevel % 4 == 1){ // PRIMARY
        $("nextColors").css("width", 300);
    $('#levelUp').html('<h1>Level ' + gameLevel + ': Primary Colors</h1><div id="nextColors"><div id="l1" style="background:#ff0000"></div><div id="l2" style="background:#ffff00 "></div><div id="l3" style="background:rgb(0, 0, 255); width:90px; height:90px; border:none;"></div><div id="nextClear"></div></div><h2 id="levelText" style="margin-bottom:30px;"></h2><a id="keepGoing" href="">RETRY LEVEL ' + gameLevel + '!</a>');
            $("#levelText").html("Oh no! You didn't earn enough points to advance to level " + (gameLevel+1) + ".<br/>You have " + lives + " lives left.");
    if (lives == 1 ){
        $("#levelText").html("Oh no! You didn't earn enough points to advance to level " + (gameLevel+1) + ".<br/>You have " + lives + " life left.");
    }
        $("#active1").css("background-color", "#ff0000");
        $("#active2").css("background-color", "#ffff00");
        $("#active3").css("background-color", "#0000ff");
        $("#active3").css({"border-color": "#000", 
             "border-width":"0px", 
             "border-style":"none"});
        $("#active4").css("background-color", "#ffffff");
        $("#active5").css("background-color", "#ffffff");
        $("#active6").css("background-color", "#ffffff");
    } if (gameLevel % 4 == 2){ //SECONDARY
        $("nextColors").css("width", 300);
    $('#levelUp').html('<h1>Level ' + gameLevel + ': Secondary Colors</h1><div id="nextColors"><div id="l1" style="background:#ff9934 "></div><div id="l2" style="background:#019934"></div><div id="l3" style="background:#cc66cc "></div><div id="nextClear"></div></div><h2 id="levelText" style="margin-bottom:30px;"></h2><a id="keepGoing" href="">RETRY LEVEL ' + gameLevel + '!</a>');
            $("#levelText").html("Oh no! You didn't earn enough points to advance to level " + (gameLevel+1) + ".<br/>You have " + lives + " lives left.");
    if (lives == 1 ){
        $("#levelText").html("Oh no! You didn't earn enough points to advance to level " + (gameLevel+1) + ".<br/>You have " + lives + " life left.");
    }
        $("#active1").css("background-color", "#ff9934");
        $("#active2").css("background-color", "#019934");
        $("#active3").css("background-color", "#892891");
        $("#active3").css({"border-color": "#000", 
             "border-width":"0px", 
             "border-style":"none"});
        $("#active4").css("background-color", "#ffffff");
        $("#active5").css("background-color", "#ffffff");
        $("#active6").css("background-color", "#ffffff");
    } if (gameLevel % 4 == 3){ // TERTIARY
    $('#levelUp').html('<h1>Level ' + gameLevel + ': Tertiary Colors</h1><div id="nextColors" style="width:620px; margin: 0 auto;"><div id="l1" style="background:#ffbf50 "></div><div id="l2" style="background:#f3703c"></div><div id="l3" style="background:#9f0064;"></div><div id="l4" style="background:#5e6cb3"></div><div id="l5" style="background:#009f8b"></div><div id="l6" style="background:#bfd730"></div><div id="nextClear"></div></div><h2 id="levelText" style="margin-bottom:30px;"></h2><a id="keepGoing" href="">RETRY LEVEL ' + gameLevel + '!</a>');
            $("#levelText").html("Oh no! You didn't earn enough points to advance to level " + (gameLevel+1) + ".<br/>You have " + lives + " lives left.");
    if (lives == 1 ){
        $("#levelText").html("Oh no! You didn't earn enough points to advance to level " + (gameLevel+1) + ".<br/>You have " + lives + " life left.");
    }
        $("#active1").css("background-color", "#ffbf50");
        $("#active2").css("background-color", "#f3703c");
        $("#active3").css("background-color", "#9f0064");
        $("#active3").css({"border-color": "#000", 
             "border-width":"0px", 
             "border-style":"none"});
        $("#active4").css("background-color", "#5e6cb3");
        $("#active5").css("background-color", "#009f8b");
        $("#active6").css("background-color", "#bfd730");
    } if (gameLevel % 4 == 0) { //BLACK AND WHITE
        $('#levelUp').html('<h1>Level ' + gameLevel + ': Black and White</h1><div id="nextColors"><div id="l1" style="background:#000 "></div><div id="l2" style="background:rgba(0,0,0,0);"></div><div id="l3" style="background:#ffffff; border:1px solid #000000; width:88px; height:88px;"></div><div id="nextClear"></div></div><h2 id="levelText" style="margin-bottom:30px;"></h2><a id="keepGoing" href="">RETRY LEVEL ' + gameLevel + '!</a>');
            $("#levelText").html("Oh no! You didn't earn enough points to advance to level " + (gameLevel+1) + ".<br/>You have " + lives + " lives left.");
    if (lives == 1 ){
        $("#levelText").html("Oh no! You didn't earn enough points to advance to level " + (gameLevel+1) + ".<br/>You have " + lives + " life left.");
    }
        $("#active1").css("background-color", "#000");
        $("#active2").css("background-color", "#ffffff");
        $("#active3").css("background-color", "#ffffff");
        $("#active3").css({"border-color": "#000", 
             "border-width":"1px", 
             "border-style":"solid"});
        $("#active4").css("background-color", "#ffffff");
        $("#active5").css("background-color", "#ffffff");
        $("#active6").css("background-color", "#ffffff");
    }
    
         $('#levelUp').css("visibility", "visible");
    $("#levelUp").fadeTo( 500, 1 );
        
    //Keep going with game
    $('#keepGoing').click(function(){
        $('#keepGoing').css("visibility", "hidden");
        $('#levelText').html("Get Ready! Level " + gameLevel + " starting in<br/><h4>3</h4>");
            setTimeout(function(){
                $('#levelText').html("Get Ready! Level " + gameLevel + " starting in<br/><h4>2</h4>");
                setTimeout(function(){
                    $('#levelText').html("Get Ready! Level " + gameLevel + " starting in<br/><h4>1</h4>");
                    setTimeout(function(){
                        $('#levelText').html("<h2></h2><br/><h3>Go!</h3>");
                        $("#levelUp").fadeTo( 200, 0 );
                        setTimeout(function(){
                            $('#levelUp').css("visibility", "hidden");
                            startBlocks();
                        }, 200);
                    }, 1000);
                }, 1000);
            }, 1000);
        return false;
	});
        
    } else {
        score = levelScore;
        $('#levelUp').html('<h1>Your score: ' + addCommas(score) + '</h1><h2 id="levelText" style="margin-bottom:30px;"></h2><a id="startOver" href="">START OVER</a>');
        $("#scoreNum").text(score);
        $("#levelText").html("Too bad, you're out of lives! Want to try again?");
        $('#levelUp').css("visibility", "visible");
        $("#levelUp").fadeTo( 500, 1 )
        
        
    }
    return false;
}
});

// redirect after time out

var timer;
window.onload=document.onmousemove=document.onkeypress= function(){
    clearTimeout(timer);
    timer=setTimeout(function(){location="../apphomepage.html"}, 180000)
}
