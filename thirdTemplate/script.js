"use strict";
const hideMainDiv = document.querySelector(".hide");
const hides = document.querySelectorAll(".allHides");
const imgs = document.querySelectorAll(".imgs");

function looping(loopAt) {
    for (let looping = 0; looping < loopAt.length; looping++) {
        loopAt[looping].addEventListener("click", function(){
            hides[looping].classList.toggle("hidden");
        });
    }
}

// for (let looping = 0 ; looping < imgs.length ; looping++) {
//     imgs[looping].addEventListener("click",function(){
//         hides[looping].classList.remove("hidden");
//     })
// }

looping(imgs);

looping(hides)

// for (let loop = 0; loop < hides.length ; loop++) {
//     hides[loop].addEventListener("click",function(){
//         hides[loop].classList.add("hidden");
//     });
// }

