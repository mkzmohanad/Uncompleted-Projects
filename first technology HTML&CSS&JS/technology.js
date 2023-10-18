"use strict";
// variables start
const linksInsideIcon = document.querySelector(".links-inside-icon");
const createAvatar = document.querySelector(".create-avatar");
const createSection = document.querySelector(".create-area-outer");
const closeBtn = document.querySelector(".close-btn i");
const avatarImgs = document.querySelectorAll(".avatar-imgs");
const unknownLogo = document.getElementById("unknown-logo");
const avatarLogo = document.querySelector(".avatar-logo");
const avatarName = document.getElementById("avatar-name");
const avatarForm = document.querySelector(".avatar-form");
const creationForm = document.querySelector(".creation-form");
const userName = document.querySelector(".welcome span");
const slideImgs = document.querySelectorAll(".slide-imgs");
const nextArrow = document.getElementById("next-arrow");
const prevArrow = document.getElementById("prev-arrow");
const launchYearText = document.querySelector(".launch-year");
// const years = document.getElementById("years");
// const months = document.getElementById("months");
// const weeks = document.getElementById("weeks");
// const days = document.getElementById("days");
let avatarGender;
let counter = 0;
let timeCounter = new Date(2031, 0,25);
let currentTime = new Date();
// variables end

document.addEventListener("click",function(e){
    if (e.target.parentElement.classList.contains("responsiveLine")){
        linksInsideIcon.classList.toggle("hidden");
    }
    else {
        linksInsideIcon.classList.add("hidden")
    };
})

openCreateAvatar(createAvatar);
openCreateAvatar(unknownLogo);
openCreateAvatar(avatarLogo);

closeBtn.addEventListener("click",function(){
    createSection.classList.add("hidden");
    creationForm.classList.remove("avatar-form-transition");
    avatarImgs.forEach(function(imgs){
        imgs.classList.remove("scaleBig");
        imgs.classList.remove("scaleSmall");
    })
})

avatarImgs.forEach(function(img){  // => https://www.sololearn.com/compiler-playground/WsjkVOGcx1Oq/?ref=app
    img.addEventListener("click",function(){
        avatarImgs.forEach(function(otherImage){
            otherImage.classList.remove("scaleBig");
            otherImage.classList.add("scaleSmall");
        })
        img.classList.remove("scaleSmall");
        img.classList.add("scaleBig");
    })
})

avatarForm.addEventListener("submit",function(send){
    let stopExecution = false;
    window.localStorage.setItem("avatar-name",avatarName.value);
    avatarImgs.forEach(function(selectedImage){
        if (selectedImage.classList.contains("scaleBig")){
            // let avatarGender;
            unknownLogo.classList.add("hidden");
            avatarGender = selectedImage.id;
            avatarLogo.src = `/pics/logo-${avatarGender}.png`
            window.localStorage.setItem("avatar-icon", avatarGender);
            avatarLogo.classList.remove("hidden");
            stopExecution = true;
            // send.preventDefault();
        }
    })
})
//getting info from local storage for logo: 
if (window.localStorage.getItem("avatar-icon")) {
    avatarLogo.src = `/pics/logo-${window.localStorage.getItem("avatar-icon")}.png`;
    unknownLogo.classList.add("hidden");
    avatarLogo.classList.remove("hidden");
    console.log(avatarLogo.src)
}
//getting info from local storage for avatar name: 
if (window.localStorage.getItem("avatar-name")) {
    userName.textContent = window.localStorage.getItem("avatar-name");
}

// next arrow in slide images
nextArrow.addEventListener("click", function(){
    if (counter < slideImgs.length-1) {
        counter++ ;
        slideImages();
    }
    else {
        counter = 0;
        slideImages();
    }
});

// previous arrow in slide images
prevArrow.addEventListener("click", function(){
    if (counter <= 0) {
        counter = slideImgs.length -1;
        slideImages();;
    }
    else {
        counter-- ;
        slideImages();
    }
});

// date area
launchYearText.textContent = timeCounter.getFullYear();
// console.log(typeof timeCounter.getFullYear()); => number
// years.textContent = `Years left: \n${timeCounter.getFullYear() - currentTime.getFullYear()}`;
// months.textContent = `Months left: \n${timeCounter.getMonth() - currentTime.getMonth()}`;
// weeks.textContent = `Weeks left: \n${Math.floor(timeCounter.getDate() / currentTime.getDate())}`;
// days.textContent = `Days left: \n${Math.abs(timeCounter.get() - currentTime.getMonth())}`;

// date area
// functions:
function openCreateAvatar (openWay) {
    openWay.addEventListener("click", function(){
        createSection.classList.remove("hidden");
        setTimeout(avatarFormAppear,100);
    })
}

function avatarFormAppear(){
    creationForm.classList.add("avatar-form-transition");
}

function slideImages() {
    slideImgs.forEach(function(imgs){
        imgs.style.transform = `translateX(-${counter * 100}%)`
    })
}
// functions:

