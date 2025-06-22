function createLoginTracker(userInfo) {
  
    let attemptCount = 0; // Tracks how many times the user has attempted to log in

    // Return a nested function that will be used for a login attempt by the user
    return (passwordAttempt) => {

        attemptCount += 1; // Increment the number of login attempts by 1 with each input

        // Lock account if more than 3 attempts
        if (attemptCount > 3) {
            return "Account locked due to too many failed login attempts";
        }

        // Checking to see if the password is correct
        if (passwordAttempt === userInfo.password) {
            return "Login successful";
        } else {
            // Not a matching password, but still within 3 attempts
            return `Attempt ${attemptCount}: Login failed`;
        }
  };

}

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};