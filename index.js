var audio_1 = new Audio("./sounds/crash.mp3");
var audio_2 = new Audio("./sounds/kick-bass.mp3");
var audio_3 = new Audio("./sounds/snare.mp3");
var audio_4 = new Audio("./sounds/tom-1.mp3");
var audio_5 = new Audio("./sounds/tom-2.mp3");
var audio_6 = new Audio("./sounds/tom-3.mp3");
var audio_7 = new Audio("./sounds/tom-4.mp3");

function f1(a) {
  a.play();
}


onkeydown = function (event) {
  var key = event.key; 
  switch (key) {
    case 'w':
      audio_1.play();
      break;
    case 'a':
      audio_2.play();
      break;
    case 's':
      audio_3.play();
      break;
    case 'd':
      audio_4.play();
      break;
    case 'j':
      audio_5.play();
      break;
    case 'k':
      audio_6.play();
      break;
    case 'l':
      audio_7.play();
      break;
    default:
      break;
  }
};
