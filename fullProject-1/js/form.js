"use strict";
// login file and signup file
const hideIcon = document.querySelector(".hide-icon");
const showIcon = document.querySelector(".show-icon");
const password = document.getElementById("password");

showIcon.addEventListener("click",function(){
    showIcon.classList.add("hidden");
    hideIcon.classList.remove("hidden");
    password.type = "text";
});

hideIcon.addEventListener("click",function(){
    hideIcon.classList.add("hidden");
    showIcon.classList.remove("hidden");
    password.type = "password";
});


// only sign up file

const dates = document.querySelectorAll(".date");
const form = document.getElementsByTagName("form");
// const checkBoxes = document.querySelectorAll(".check-box");

form[0].addEventListener("submit",function(e){
    dates.forEach(function(date){
        if (date.value === "year" || date.value === "month" || date.value === "day") {
            e.preventDefault();
        }
    })
})

// checkBoxes.forEach(function(box){
//     box.checked = false
//     console.log(box)
//     box.addEventListener("click",function(e){
//         e.target.checked = true;
//     })
// })
