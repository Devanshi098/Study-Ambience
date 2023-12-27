
let coffeeBtn = document.querySelector("#coffee-btn");
let coffeeAudio = document.querySelector("#coffee-audio");
let water_fall= document.querySelector("#waterfall-btn");
let waterfall_audio=document.querySelector("#waterfall");
let peoplebtn = document.querySelector("#people-btn");
let people_audio = document.querySelector("#people-audio");
let naturebtn=document.querySelector("#nature-btn");
let nature_audio= document.querySelector("#nature-audio");
let lofibtn= document.querySelector("#lofi-btn");
let lofi_audio = document.querySelector("#lofi-audio");


coffeeBtn.addEventListener("click", () => {

  if (coffeeAudio.paused) {
    coffeeAudio.play();
  } else {
    coffeeAudio.pause();
  }
});

water_fall.addEventListener("click", () => {
 
    if (waterfall_audio.paused) {
      waterfall_audio.play();
    } else {
      waterfall_audio.pause();
    }
  });

peoplebtn.addEventListener("click", () => {
 
    if (people_audio.paused) {
     people_audio.play();
    } else {
     people_audio.pause();
    }
  });

  naturebtn.addEventListener("click", () => {
 
    if (nature_audio.paused) {
     nature_audio.play();
    } else {
     nature_audio.pause();
    }
  });

  lofibtn.addEventListener("click", () => {
 
    if (lofi_audio.paused) {
     lofi_audio.play();
    } else {
     lofi_audio.pause();
    }
  });

