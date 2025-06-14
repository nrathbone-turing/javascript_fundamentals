function fetchRecipeDetails(recipe, callback) {
    console.log(`Fetching details for: ${recipe}`);
    setTimeout(() => {
        const data = `Recipe: ${recipe}, Ingredients: Flour, Sugar, Cocoa Powder`;
        callback(null, data);
    }, 2000);
}

module.exports = { fetchRecipeDetails };