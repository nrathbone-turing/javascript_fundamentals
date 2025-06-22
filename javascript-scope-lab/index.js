// Write your solution in this file!

// Global scope variables
const burgers = ["Hamburger", "Cheeseburger"]
let featuredDrink = "Strawberry Milkshake"

function addBurger() {

    // Function scope variables
    const newBurger = "Flatburger"
    burgers.push(newBurger)

    if(true) {
        // Block scope variables
        const anotherNewBurger = "Maple Bacon Burger"
        burgers.push(anotherNewBurger)
    }
}

function changeFeaturedDrink() {
    // Modify global variable
    featuredDrink = "The JavaShake"
}

// Comment out manual tests while running automated test suite

// // Drink Tests
// console.log("Before change:", featuredDrink); 
// // => "Strawberry Milkshake"

// changeFeaturedDrink(); // call the function to update the global variable

// console.log("After change:", featuredDrink);  
// // => "The JavaShake"


// // Burger Tests
// console.log("Before adding burgers:", burgers); 
// // => ["Hamburger", "Cheeseburger"]

// addBurger(); // call the function to push new burgers into the array

// console.log("After adding burgers:", burgers); 
// // => ["Hamburger", "Cheeseburger", "Flatburger", "Maple Bacon Burger"]