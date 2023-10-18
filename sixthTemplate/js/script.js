"use strict";
const arr = [
    {
        text : "A microphone",
        image : "/pics/img-1.jpg"
    },
    {
        text : "A phone",
        image : "/pics/img-2.jpg"
    },
    {
        text : "A drone",
        image : "/pics/img-3.jpg"
    },
    {
        text : "Soundbox",
        image : "/pics/img-4.jpg"
    },
    {
        text : "A tablet",
        image : "/pics/img-5.jpg"
    },
    {
        text : "A camera",
        image : "/pics/img-6.jpg"
    },
    {
        text : "A typewriter",
        image : "/pics/img-7.jpg"
    },
    {
        text : "A tableturner",
        image : "/pics/img-8.jpg"
    },
];
const imgs = document.querySelectorAll(".image");
const showImg = document.querySelector(".show-img");
const showText = document.querySelector(".show-text");
const black = document.querySelector(".black");
const closeBtn = document.querySelector(".close-btn")

imgs.forEach(function (img , imgIndex) {
    img.addEventListener("click",function(){
        black.classList.remove("hidden");
        showImg.src =arr[imgIndex-1].image;
        console.log(img)
        showText.textContent =arr[imgIndex-1].text;
        showImg.classList.add("stop-hover");
    })
})

black.addEventListener("click",function(){
    black.classList.add("hidden");
})

closeBtn.addEventListener("click",function(){
    black.classList.add("hidden");
})