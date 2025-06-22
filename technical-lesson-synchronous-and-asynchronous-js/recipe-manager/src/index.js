// main synchronous functionality
function displayRecipes() {
    console.log("Fetching recipe list...");
    console.log("Recipe 1: Chocolate Cake");
    console.log("Recipe 2: Vanilla Ice Cream");
    console.log("Done fetching recipes.");
}

displayRecipes();
console.log("Program Complete.");
// expected output

// Fetching recipe list...  
// Recipe 1: Chocolate Cake  
// Recipe 2: Vanilla Ice Cream  
// Done fetching recipes.  
// Program Complete.

// asynchronous functionality
const { fetchRecipeDetails } = require('./fetchRecipeDetails');

fetchRecipeDetails("Chocolate Cake", (err, data) => {
    if (err) {
        console.error("Error fetching recipe details");
    } else {
        console.log(data);
    }
});

console.log("Waiting for recipe details...");

// expected output

// Fetching details for: Chocolate Cake
// Waiting for recipe details…
// Recipe: Chocolate Cake, Ingredients: Flour, Sugar, Cocoa Powder

// error handling
function fetchRecipeDetailsWithError(recipe, callback) {
    console.log(`Fetching details for: ${recipe}`);
    setTimeout(() => {
        const error = Math.random() > 0.8; // Simulate occasional failure
        if (error) {
            callback("Error fetching recipe details", null);
        } else {
            const data = `Recipe: ${recipe}, Ingredients: Flour, Sugar, Cocoa Powder`;
            callback(null, data);
        }
    }, 2000);
}

fetchRecipeDetailsWithError("Vanilla Cake", (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});

// expected resuls for a success

// Fetching details for: Vanilla Cake  
// Recipe: Vanilla Cake, Ingredients: Flour, Sugar, Cocoa Powder

// expected results for a failure

// Fetching details for: Vanilla Cake  
// Error fetching recipe details