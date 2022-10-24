


var crash = new Audio('sounds/crash.mp3');

addEventListener("keydown", function (event) {
    if (event.keyCode == 87) {
        crash.currentTime = 0;
        crash.play();
    }
});

var kick = new Audio('sounds/kick-bass.mp3');

addEventListener("keydown", function (event) {
    if (event.keyCode == 65) {
        kick.currentTime = 0;
        kick.play();
    }

});

var snare = new Audio('sounds/snare.mp3');

addEventListener("keydown", function (event) {
    if (event.keyCode == 83) {
        snare.currentTime = 0;
        snare.play();
    }

});
var tom1 = new Audio('sounds/tom-1.mp3');

addEventListener("keydown", function (event) {
    if (event.keyCode == 68) {
        tom1.currentTime = 0;
        tom1.play();
    }

});
var tom2 = new Audio('sounds/tom-2.mp3');

addEventListener("keydown", function (event) {
    if (event.keyCode == 74) {
        tom2.currentTime = 0;
        tom2.play();
    }

});
var tom3 = new Audio('sounds/tom-3.mp3');

addEventListener("keydown", function (event) {
    if (event.keyCode == 75) {
        tom3.currentTime = 0;
        tom3.play();
    }
});
var tom4 = new Audio('sounds/tom-4.mp3');

addEventListener("keydown", function (event) {
    if (event.keyCode == 76) {
        tom4.currentTime = 0;
        tom4.play();
    }
});