require('datejs'); // import `datejs` module

function combineUsers(...args) {
    // initialize return object
    const combinedObject = {
        users: []
    };

    // use spread operator to merge all user arrays into the `users` array
    for (const userArray of args) {
        combinedObject.users.push(...userArray);
    }

    // add merge_date in M/d/yyyy format
    combinedObject.merge_date = Date.today().toString("M/d/yyyy");

    // return the final object
    return combinedObject;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};