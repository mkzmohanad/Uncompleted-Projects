"use strict";
const imgsClick = document.querySelectorAll(".showImg");
const blackWindow = document.querySelector(".blackPage");
const classImg = document.querySelectorAll(".imgAndInfo");
let showImg;
let showImgInfo;
for (let loop = 0;loop<imgsClick.length;loop++) {
    imgsClick[loop].addEventListener("click",function(){
        classImg[loop].classList.add("details"); 
        classImg[loop].classList.remove("hidden");
        blackWindow.classList.remove("hidden");
        showImgInfo = classImg[loop];
    });
}

blackWindow.addEventListener("click",function(){
    blackWindow.classList.add("hidden")
    showImgInfo.classList.add("hidden");
    showImgInfo.classList.remove("details");
    
})
