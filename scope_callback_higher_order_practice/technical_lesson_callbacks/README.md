## Task 1: Define the Problem

Problem Context

Flatiron Supermarket wants a program that enables users to purchase items that can be delivered directly to them. This program must ensure that each user’s input data, such as item selection and quantity, remains private and inaccessible to other users.

Scope Requirements

To solve this, you’ll need to set up two types of scope:

Global Scope: For data shared across the application, such as the list of items available in the store.
Function Scope: For user-specific data, ensuring privacy by restricting access to within specific functions.


## Task 2: Determine the Design and Develop the Code

### Step 1: Define the Parameter Function

Now, you’ll start by setting up a main function that can accept a callback, creating the foundation for the search feature.

1. Create the Ride Data Variable: Create a variable themeParkRides to store the names of the available rides. Use const to declare this variable, as the data will not be reassigned.

```
const themeParkRides;
``` 

**Explanation:** Declaring themeParkRides  with const has been declared in global scope to keep the data globally accessible. We will need to access to the data inside of the themeParkRides variable in various parts of our code. 

2. Assign an Array to the Variable: Assign an array to contain the information about the theme park ride items: Flatacoaster,  Flata-Ferris Wheel, and Flatburger bumper cars. 

```
const themeParkRides = ["Flatacoaster", "Flata-Ferris Wheel", "Flatburger bumper cars"];
```

**Explanation:** This array will hold the names of the available rides at Flatironland and make it easy to reference them later in the program.

3. Create the Main Function: Define a function named selectthemeParkRides that takes one parameter, displayRideDetails. This parameter sets up the function to accept a callback.

```
function selectThemeParkRide(displayRideDetails){
    // Code for selecting a ride will be added in later steps
}
```

**Explanation:** The parameter displayRideDetails acts as a placeholder for a callback function that will be passed in later. This function will handle displaying the details of the selected ride.

4. Check Your Code: At this point, your code should look like this: 

``` 
themeParkRides = ["Flatacoaster", "Flata-Ferris Wheel", "Flatburger bumper cars"];

function selectThemeParkRide(displayRideDetails){
    // Code for selecting a ride will be added in later steps
}

console.log("Welcome to Flatironland!");
```

**Explanation:** Verify that there are no errors, and make sure themeParkRides is properly declared and initialized with the array of ride names.

### Step 2: Implement Argument Passing

This step introduces the callback function as an argument to selectThemeParkRide and sets it up to handle ride details. 

1. Call the Main Function: Invoke the selectThemeParkRide function in your code. Pass an anonymous function as the argument.

```
selectThemeParkRide((ride) => {
    // Callback logic will go here
});
```

**Explanation:** By passing an anonymous function, you allow selectThemeParkRide to execute it as callback later.

2. Define the Callback Logic: Inside the anonymous function, use the alert() function to call the reference keys inside of the anonymous function (i.e. ride.name and ride.description).

```
selectThemeParkRide((ride) => {
    alert(`You selected the ${ride.name} ride! Here's the ride description: ${ride.description}`);
});
```

**Explanation:** This callback displays a custom message with the selected ride's name and description.

3. Check Your Code: 

At this point, your code should look like this:  

```
const themeParkRides = ["Flatacoaster", "Flata-Ferris Wheel", "Flatburger bumper cars"];

function selectThemeParkRide(displayRideDetails){
    // This function has no code inside its block for now, but we will add code here in Steps 3 and 4
}

selectThemeParkRide((ride) => {
    alert(`You selected the ${ride.name} ride! Here's the ride description: ${ride.description}`);
});

console.log("Welcome to Flatironland!");
```

**Explanation:** Test that the callback function is properly passed and can display a placeholder message when executed. 

### Step 3: Variable Declaration and Intended Scope

This step completes the logic inside the selectThemeParkRides() function, prompting the user for input and displaying relevant ride details. 

1. Prompt the User for Input: Use the prompt() method to ask the user to select a ride. Store the user's input in a variable named rideName. 

```
function selectThemeParkRide(displayRideDetails){
    const rideName = prompt("Please select a theme park ride:\n\n- Enter 'Flatacoaster' to select the Flatacoaster ride\n- Enter 'Flata-Ferris Wheel' to select the Flata-Ferris Wheel ride\n- Enter 'Flatburger bumper cars' to select the Flatburger bumper cars ride");
}
```

**Explanation:** The prompt() method collects the ride name from the user, which will be used to fetch the ride details. 

2. Validate the User's Input: Check if the entered rideName exists in themeParkRides. If not, display an error message and exit the function.

```
if(!themeParkRides.includes(rideName)){
        alert("Error: Invalid theme park ride!");
        return;
    }
```

**Explanation:** This step ensures that only valid ride names are processed.

3. Create the Ride Object: Declare a ride object and assign the selected ride name to its name property.

``` 
const ride = {
        name: rideName
    };
```

**Explanation:** The ride object will store the name and description of the selected ride.

4. Assign the Ride Description: Use if-else  statements to assign a description to the ride object based on its name.

```
if(ride.name === "Flatacoaster"){
        ride.description = "Flatacoaster is the tallest and quickest roller coaster in the world! It's Flatironland's signature ride! It's so fast, you'll be screaming 'FLATIRON!' in no time!"
    }
    else if(ride.name === "Flata-Ferris Wheel"){
        ride.description = "Roller Coasters too scary for you? Enjoy a relaxing ride and some lovely views on the Flata-Ferris Wheel!"
    }
    else if(ride.name === "Flatburger bumper cars"){
        ride.description = "Ride in our Flatburger bumper cars designed in the shape of burgers! You even get a free burger for riding!"
    }
```

**Explanation:** This step matched the selected ride to its description, making it available for display. 

5. Execute the Callback: Pass the ride object to the callback function (displayRideDetails) to display its details. 

**Explanation:** The callback is invoked with the ride object, allowing it to handle displaying the details.

### The code should now look like this:

```
const themeParkRides = ["Flatacoaster", "Flata-Ferris Wheel", "Flatburger bumper cars"];

function selectThemeParkRide(displayRideDetails){
    const rideName = prompt("Please select a theme park ride:\n\n- Enter 'Flatacoaster' to select the Flatacoaster ride\n- Enter 'Flata-Ferris Wheel' to select the Flata-Ferris Wheel ride\n- Enter 'Flatburger bumper cars' to select the Flatburger bumper cars ride");

    if(!themeParkRides.includes(rideName)){
        alert("Error: Invalid theme park ride!");
        return;
    }

    const ride = {
        name: rideName
    };

    if(ride.name === "Flatacoaster"){
        ride.description = "Flatacoaster is the tallest and quickest roller coaster in the world! It's Flatironland's signature ride! It's so fast, you'll be screaming 'FLATIRON!' in no time!"
    }
    else if(ride.name === "Flata-Ferris Wheel"){
        ride.description = "Roller Coasters too scary for you? Enjoy a relaxing ride and some lovely views on the Flata-Ferris Wheel!"
    }
    else if(ride.name === "Flatburger bumper cars"){
        ride.description = "Ride in our Flatburger bumper cars designed in the shape of burgers! You even get a free burger for riding!"
    }

    displayRideDetails(ride);
}

selectThemeParkRide((ride) => {
    alert(`You selected the ${ride.name} ride! Here's the ride description: ${ride.description}`);
});

console.log("Welcome to Flatironland!");
```

## Task 3: Test and Refine

Leverage Browser Developer Tools

* **Method:** Use developer tools in your browser or code editor (like Chrome DevTools) to step through code, inspect scopes, and view variables in real-time.
* **Purpose:** Allows for real-time debugging, checking the visibility of variables, and understanding the scope chain and functions.

Refine the Code: 

* Fix any errors and ensure that all edge cases (i.e., invalid input) are handled properly.

## Task 4: Document and Maintain

**Version Control:** Use version control to track changes. This allows for easy updates, collaborative editing, and the ability to revert to previous versions if necessary.

**Regular Updates and Reviews:** Schedule regular reviews and updates for code to ensure content remains relevant, accurate, and aligned with the latest Javascript developments and industry practices.

**Documentation and Examples Repository:** Maintain a centralized repository containing all lab documents, example code, and solutions.