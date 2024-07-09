var audio_1 = new Audio("./sounds/crash.mp3");
var audio_2 = new Audio("./sounds/kick-bass.mp3");
var audio_3 = new Audio("./sounds/snare.mp3");
var audio_4 = new Audio("./sounds/tom-1.mp3");
var audio_5 = new Audio("./sounds/tom-2.mp3");
var audio_6 = new Audio("./sounds/tom-3.mp3");
var audio_7 = new Audio("./sounds/tom-4.mp3");

for(i=0;i<=6;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       playSound(this.innerHTML);
       buttonPress(this.innerHTML);
    })
}

document.addEventListener("keypress",function(event){
    playSound(event.key);
    buttonPress(event.key);
})


 function playSound (key) {
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

function buttonPress (key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){
    document.querySelector("."+key).classList.remove("pressed");
    },20);
}
