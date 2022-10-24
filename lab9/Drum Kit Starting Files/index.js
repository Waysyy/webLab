var kick = new Audio('sounds/kick-bass.mp3');
var snare = new Audio('sounds/snare.mp3');
var tom1 = new Audio('sounds/tom-1.mp3');
var tom2 = new Audio('sounds/tom-2.mp3');
var tom3 = new Audio('sounds/tom-3.mp3');
var tom4 = new Audio('sounds/tom-4.mp3');
var crash = new Audio('sounds/crash.mp3');

const drums = document.querySelectorAll('.drum');
for (let i = 0; i < drums.length; ++i) {
    drums[i].addEventListener('click', ev => {
        const innerText = ev.target.innerText;
        switch (innerText) {
            case "w":
                crash.currentTime = 0;
                crash.play();
                break;
            case "a":
                kick.currentTime = 0;
                kick.play();
                break;
            case "s":
                snare.currentTime = 0;
                snare.play();
                break;
            case "d":
                tom1.currentTime = 0;
                tom1.play();
                break;
            case "j":
                tom2.currentTime = 0;
                tom2.play();
                break;
            case "k":
                tom3.currentTime = 0;
                tom3.play();
                break;
            case "l":
                tom4.currentTime = 0;
                tom4.play();
                break;
        }

    })
}

addEventListener("keydown", function(event) {
    switch (event.keyCode) {
        case 87:
            crash.currentTime = 0;
            crash.play();
            break;
        case 65:
            kick.currentTime = 0;
            kick.play();
            break;
        case 83:
            snare.currentTime = 0;
            snare.play();
            break;
        case 68:
            tom1.currentTime = 0;
            tom1.play();
            break;
        case 74:
            tom2.currentTime = 0;
            tom2.play();
            break;
        case 75:
            tom3.currentTime = 0;
            tom3.play();
            break;
        case 76:
            tom4.currentTime = 0;
            tom4.play();
            break;
    }
});