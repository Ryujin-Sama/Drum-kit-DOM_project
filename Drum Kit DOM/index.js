// Detecting letter press
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonInnerHTML = this.innerHTML;

    makesound(buttonInnerHTML);

    buttonanimation(buttonInnerHTML);

  });
}
//Detecting keyboard press
document.addEventListener("keydown", function(event){
  makesound(event.key);

  buttonanimation(event.key);
});

function makesound(key){
  switch (key) {

      case "a":
      var tom1=new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

      case "s":
      var tom2=new Audio('sounds/tom-2.mp3');
      // Here was a typo before ^ (space)
      tom2.play();
      break;

      case "d":
      var tom3=new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

      case "f":
      var tom4=new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

      case "j":
      var snare=new Audio('sounds/snare.mp3');
      snare.play();
      break;

      case "k":
      var crash=new Audio('sounds/crash.mp3');
      crash.play();
      break;

      case "l":
      var kickbass=new Audio('sounds/kick-bass.mp3');
      kickbass.play(); // variable names shouldn't contain a dash (-)
      break;

      default: console.log(key);
  }
}

function buttonanimation(currentKey){
  var actionbut = document.querySelector("."+currentKey);
  actionbut.classList.add("pressed");

  setTimeout(function(){
    actionbut.classList.remove("pressed");
  },100);

}
