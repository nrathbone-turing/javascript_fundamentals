function fetchRecipeDetails(recipe, callback) {
    setTimeout(() => {
        const data = `Recipe: ${recipe}, Ingredients: Flour, Sugar, Cocoa Powder`;
        callback(null, data);
    }, 1000);
}

test("fetchRecipeDetails returns correct data", done => {
    fetchRecipeDetails("Cake", (err, data) => {
        expect(err).toBeNull();
        expect(data).toContain("Cake");
        done();
    });
});

// expected output
// PASS  src/fetchRecipeDetails.test.js
// ✓ fetchRecipeDetails returns correct data (X ms)