// ♫ LET'S GROOVE ♫
// ♫ feat DJ KLAVN ♫


// block right click
    window.oncontextmenu = function() { 
return false; 
};

// back button animation

$(window).on("load", function(){
    $(".backbutton").animate({"right": "-=50px"}, "fast");
});
    


// app code below 



// initialize global variables

var limit = 6;
var counter = limit; // counting down for colorblocks
var colors = ['blue', 'yellow', 'red', 'orange', 'green', 'purple']; // colors of color blocks

// sounds

var sound_aww = new Audio("assets/sounds/aww.mp3");
var sound_blending = new Audio("assets/sounds/blending.mp3");
var sound_letsgroove = new Audio("assets/sounds/letsgroove.mp3");
var sound_tada = new Audio("assets/sounds/tada.mp3");

var yayArray = [new Audio("assets/sounds/yay.mp3"),
                new Audio("assets/sounds/yay2.mp3"),
                new Audio("assets/sounds/yay3.mp3")]

// select random array
function getRandomYay() {
  return yayArray[Math.floor(yayArray.length * Math.random())];
}


// map of hex values associated with colors
// key = a string
// value = wutever
var colorMap = {
        "blue": "#0f45a7",
        "red": "#bf2d23",
        "yellow": "#fccb00",
        "orange": "#ee7e00",
        "green": "#3b7d21",
        "purple": "#751da9"
    };

// stores color of correctly-colored fruit dragged into cup
var colorMapResult = [];


var colorBlocks = document.querySelectorAll('.colorBlock'); // setting color block color

var groovy = false;


// randomize Gameplay variables

function getRandomColor() {
  return colors[Math.floor(colors.length * Math.random())];
}

function getNewCount(counter) {
  return 1 + Math.floor(Math.random() * counter * .5);
}

function switchRandomColor(currentColor) {
  var newcolor = getRandomColor();

  while (newcolor == currentColor) newcolor = getRandomColor();

  return newcolor;
}


// initializing Gameplay variables

var instructions = document.getElementById('instructions');
var fruitNumber = document.getElementById('fruitNumber');
var fruitColor = document.getElementById('fruitColor');
var fruitWord = document.getElementById('fruitWord');
var count = document.getElementById('count');


// Let's Groove sounds

document.getElementById('next-button').addEventListener('click', function() {
    sound_letsgroove.load();
    sound_letsgroove.play();
    setTimeout(function() {
        document.getElementById('intro').dispatchEvent(new Event("playGame"));
    }, 800);
});



// update Gameplay text

function updateText() {
  var instructionsAreHidden = instructions.classList.contains("hidden");
  instructions.className = "message " + currentColor + (instructionsAreHidden ? " hidden" : "");
  fruitNumber.innerHTML = currentCount.toString();
  fruitColor.innerHTML = currentColor;
  fruitWord.innerHTML = (currentCount == 1) ? "item" : "items";
  count.innerHTML = limit - counter;
}


// initializing color + number of fruit

var currentColor = getRandomColor();
var currentCount = getNewCount(counter);
updateText();


//--------------------------------------- dispatch shunt event --> gameplay --> transition screen

var transitionFrame = document.getElementById('transition');




// array of facts
var facts = ['Dark green veggies have more<br>Vitamin C than light green ones!',
             'The color \'orange\' was named<br>after the fruit!',
             'Red fruits and veggies<br>keep your heart healthy!',
             'Orange & yellow fruits and veggies<br>keep your eyes strong!',
             'Blue & purple fruits and veggies<br>can improve your memory!'];

// return random fact from array of facts
function getRandomFact() {
  return facts[Math.floor(facts.length * Math.random())];
}


// displaying the fact
var fact = document.getElementById('fact');

function displayFact() {
    fact.innerHTML = getRandomFact();
}

 // set color in smoothie
var colorResult = document.getElementById('colorResult');
console.log(colorResult);

function blend() {
  if (groovy) {

      // saved resulting color
      result_color = Color_mixer.mix(colorMapResult).toHexString();
      console.log(result_color);
      document.getElementById('game').dispatchEvent(new Event('shunt'));

      // chk chk chk
      sound_blending.load();
      sound_blending.play();

      colorResult.style.backgroundColor = result_color;

      // return random fact
      displayFact();


      // triggers gameplay --> transition --> result
      setTimeout(function(){
        console.log("transitioning");
        transitionFrame.dispatchEvent(new Event('shunt'));
      }, 5000);

      setTimeout(function(){
        console.log("transitioning")
        // add tada sound
        sound_tada.load();
        sound_tada.play();

      }, 5400);

  } else {
  }
}

// don't display yay / aww message until appropriately-colored fruit is placed in cup

document.getElementById('yay').classList.add('hidden');
document.getElementById('aww').classList.add('hidden');


// drag + drop fruits

Sortable.create(test, { /* options */ });

function fruitdrag(e, colors) {
  e.dataTransfer.setData("colors", JSON.stringify(colors));
}

function fruitdrop(e) {
  e.preventDefault();

  c = JSON.parse(e.dataTransfer.getData("colors"));
  console.log(c);

    // check if correctly-colored fruit added

  if ((c.indexOf(currentColor) != -1) && (!groovy)) {
    --currentCount;
    --counter;


    // add yay sound
    var soundYay = getRandomYay();
    soundYay.load();
      soundYay.play();

    // sets color of corresonding color block
    cb = colorBlocks[counter];
    cb.classList.remove('clear');
      cb.classList.add(currentColor);

    colorMapResult.push($.Color(colorMap[currentColor]));

    // yay message
 document.getElementById('yay').classList.remove('hidden');

    // hide yay message
      setTimeout(function(){
      console.log("yay");
          document.getElementById('yay').classList.add('hidden');
      }, 1000);


    // check if all 6 fruits have been placed in cup

    if (counter == 0) {
        document.getElementById('blendButton').classList.remove('inactive');
        document.getElementById('congrats').classList.remove('hidden');
        document.getElementById('instructions').classList.add('hidden');
        groovy = true;
    }


    // update new colors + number of fruits

    if (currentCount == 0) {
      currentColor = switchRandomColor(currentColor);
      currentCount = getNewCount(counter);
    }

    updateText();

  } else if (!groovy) {

      // add aww sound
    sound_aww.load();
    sound_aww.play();

    // aww message
    document.getElementById('aww').classList.remove('hidden');

    // hide aww message
      setTimeout(function(){
      console.log("yay");
          document.getElementById('aww').classList.add('hidden');
      }, 1200);

  }
}


// we got this
function fruitallowdrop(e) {
  e.preventDefault();
}


// resetting the GAME
var blendButton = document.getElementById('blendButton');
var congrats = document.getElementById('congrats');
var instructions = document.getElementById('instructions');

document.getElementById('blendAnother').addEventListener('click', function() {
    for (var i = colorBlocks.length-1; i >= 0; --i) {
        cb = colorBlocks[i];
        cb.className = "colorBlock clear";
    }

    colorMapResult = [];

    counter = limit;
    groovy = false;
    currentColor = getRandomColor();
    currentCount= getNewCount(counter);
    updateText();
    blendButton.classList.add('inactive');
    congrats.classList.add('hidden');
    instructions.classList.remove('hidden');
});


// redirect after time out

var timer;
window.onload=document.onmousemove=document.onkeypress= function(){
    clearTimeout(timer);
    timer=setTimeout(function(){location="../apphomepage.html"}, 180000)
}
