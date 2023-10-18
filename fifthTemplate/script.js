"use strict";
const foodMenu = [
    {
        name : "Bread Basket",
        info : "Assortment of fresh baked fruit breads and muffins 5.50",
    },
    {
        name : "Honey Almond Granola with Fruits",
        info : "Natural cereal of honey toasted oats, raisins, almonds and dates 7.00",
    },
    {
        name : "Belgian Waffle",
        info : "Vanilla flavored batter with malted flour 7.50",
    },
    {
        name : "Scrambled eggs",
        info : "Scrambled eggs, roasted red pepper and garlic, with green onions 7.50",
    },
    {
        name : "Blueberry Pancakes",
        info : "With syrup, butter and lots of berries 8.50",
    },
];
const drinkMenu = [
    {
        name : "Coffee",
        info : "Regular coffee 2.50",
    },
    {
        name : "Chocolato",
        info : "Chocolate espresso with milk 4.50",
    },
    {
        name : "Corretto",
        info : "Whiskey and coffee 5.00",
    },
    {
        name : "Iced tea",
        info : "Hot tea, except not hot 3.00",
    },
    {
        name : "Soda",
        info : "Coke, Sprite, Fanta, etc. 2.50",
    },
];
const eatBtn = document.querySelector(".eat");
const drinkBtn = document.querySelector(".drink");
const orderName = document.querySelectorAll(".orderName");
const orderInfo = document.querySelectorAll(".orderInfo");

printing(foodMenu);
drinkBtn.addEventListener("click",function(){
    drinkBtn.classList.add("chosenBtn");
    eatBtn.classList.remove("chosenBtn");
    printing(drinkMenu);
});

eatBtn.addEventListener("click",function(){
    eatBtn.classList.add("chosenBtn");
    drinkBtn.classList.remove("chosenBtn");
    printing(foodMenu);
});


// functions: 
function printing(arrayName){
    let counter = 0;
    orderName.forEach(function(order){
        order.textContent = arrayName[counter].name;
        counter ++;
    })
    counter = 0;
    orderInfo.forEach(function(order){
        order.textContent = arrayName[counter].info;
        counter ++;
    })
}