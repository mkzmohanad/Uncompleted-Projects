"use strict";
// main.html section
const btn = document.querySelectorAll(".btn")
// const trick = document.querySelector(".trick")

// import and export
// export {
//     theChosenProduct
// };
// import and export

btn.forEach(function(ele){
    ele.addEventListener("click", function(e){
        console.log(getIDNumber(ele.parentElement.id))
        let theChosenProduct = getIDNumber(ele.parentElement.id) - 1;
        console.log(theChosenProduct);
        window.localStorage.setItem("productID" , theChosenProduct);
        window.localStorage.get("productID");
    })
})

function getIDNumber (id) {
    let string = "";
    for (let loop = 0 ; loop < id.length ; loop++) {
        if (!isNaN(id[loop])) {
            string += id[loop];
        }
    }
    return string;
}
