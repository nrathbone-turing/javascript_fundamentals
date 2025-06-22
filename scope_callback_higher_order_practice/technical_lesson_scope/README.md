## Task 1: Define the Problem

Problem Context

Flatiron Supermarket wants a program that enables users to purchase items that can be delivered directly to them. This program must ensure that each user’s input data, such as item selection and quantity, remains private and inaccessible to other users.

Scope Requirements

To solve this, you’ll need to set up two types of scope:

Global Scope: For data shared across the application, such as the list of items available in the store.
Function Scope: For user-specific data, ensuring privacy by restricting access to within specific functions.


## Task 2: Determine the Design and Develop the Code

### Getting Started

In this step you will be creating a directory folder to and alert message. This will create the workplace for you to develop this code and have the program greet the user. 

Create a new directory (folder) called `flatironsupermarket`. The `flatironsupermarket` directory will contain the work for this technical lesson.

Create a file called `index.js` inside of the flatironsupermarket directory (folder). The `cd flatironsupermarket` terminal command allows you to change directory and move inside of the `flatironsupermarket` directory. The `touch index.js` terminal command allows you to create the `index.js` file.  The `index.js` file will contain our JavaScript code for the for this lesson.

Create a console message that will display within the console a message that will say “Welcome to FlatironSupermarket!” When `index.js` file is run. Copy and paste the following code into the `index.js` file:

```
console.log("Welcome to FlatironSupermarket!");
```

Make sure that your terminal commands output the proper welcome message. Run the `index.js` file in your terminal using `node index.js`. Your terminal should output “Welcome to FlatironSupermarket!”

### Variable Data

Purpose: Define globally accessible data that all functions will use, such as items available for purchase.

Declare a Global Variable: Create a `const` variable called `items` to store available supermarket items. An array will help keep your code organized and flexible. 

```
const items = ["apple", "banana", "pineapple"];

console.log("Welcome to FlatironSupermarket!");
```

### Function and Block

Purpose: Create functions to manage user-specific input, ensuring data privacy within the function scope.

In this step, you will be creating items and associated costs to for all customers; apple $1.99, banana .99, and pineapple $2.99 with associated costs. You will also set up a prompt for users for the specific quantity from items. Lastly, you will create an prompt that thanks the user for their selection. 

Declare Function:
* Declare the `purchaseItem()` function as a globally accessible function. 
* Declare variables like `itemToPurchase` and `quantity` with `const` to keep them private to the function. Using function scope will prevent access to their data from a scope that is outside of the `purchaseItem()` function. This gets added to `index.js`:

```
const items = ["apple", "banana", "pineapple"];

function purchaseItem(){
    const itemToPurchase = prompt("Please select an item to purchase:\n\n- Enter 'apple' to purchase apples\n- Enter 'banana' to purchase bananas\n- Enter 'pineapple' to purchase pineapples");

    if(!items.includes(itemToPurchase)){
        alert("Error: Invalid item! Unable to complete purchase!");
        return;
    }

    let price;

    if(itemToPurchase === "apple"){
        price = 1.99;
    }
    else if(itemToPurchase === "banana"){
        price = 0.99;
    }
    else if(itemToPurchase === "pineapple"){
        price = 2.99;
    }

    const quantity = Number.parseInt(prompt(`${itemToPurchase}s are $${price} each. How many ${itemToPurchase}s would you like to purchase?`));

    if(isNaN(quantity)){
        alert("Error: Invalid quantity! Unable to complete purchase!");
        return;
    }

    const totalPrice = price * quantity;
    alert(`Thanks for shopping! You purchased ${quantity} ${itemToPurchase}(s). The total price is $${totalPrice}`);
}

alert("Welcome to Flatiron Supermarket!");
purchaseItem();
```

### Variable Declaration and Intended Scope

Purpose: Add functionality for users to either make a purchase or add new items to the supermarket. This task demonstrates using global scope for shared data (items array) and function scope for user-specific input.

1. Create a Prompt:

Use `prompt()` to ask users to choose between purchasing an item or adding a new one. Store the user's response in a new variable called `option`, which will help determine the program's flow based on user input. 

```
const option = prompt("What would you like to do?\n\n- Enter '1' to purchase an item from the supermarket\n- Enter '2' to add an item to the supermarket");
```

2. Declare the `addItem` Function:

Define a function named `addItem()` that will handle adding new items outside any other functions to give it a global scope so it is accessible from anywhere in the program. Use `push()` to add new items to the global `items` array.

```
function addItem(){
    const newItem = prompt("Please enter the name of the new item:");
    items.push(newItem);
    alert(`${newItem} successfully added to the supermarket!`);
}
```

3. Write a Conditional Statement:

Use an `if` statement to check the value of `option`. If the user entered '1', the program should call `purchaseItem()`. If the user entered '2', it should call `addItem()` and print the updated `items` array to the console.

Here is the full code in the index.js: 

```
const items = ["apple", "banana", "pineapple"];

function purchaseItem(){
    const itemToPurchase = prompt("Please select an item to purchase:\n\n- Enter 'apple' to purchase apples\n- Enter 'banana' to purchase bananas\n- Enter 'pineapple' to purchase pineapples");

    if(!items.includes(itemToPurchase)){
        alert("Error: Invalid item! Unable to complete purchase!");
        return;
    }

    let price;

    if(itemToPurchase === "apple"){
        price = 1.99;
    }
    else if(itemToPurchase === "banana"){
        price = 0.99;
    }
    else if(itemToPurchase === "pineapple"){
        price = 2.99;
    }

    const quantity = Number.parseInt(prompt(`${itemToPurchase}s are $${price} each. How many ${itemToPurchase}s would you like to purchase?`));

    if(isNaN(quantity)){
        alert("Error: Invalid quantity! Unable to complete purchase!");
        return;
    }

    const totalPrice = price * quantity;
    alert(`Thanks for shopping! You purchased ${quantity} ${itemToPurchase}(s). The total price is $${totalPrice}`);
}

function addItem(){
    const newItem = prompt("Please enter the name of the new item:");
    items.push(newItem);
    alert(`${newItem} successfully added to the supermarket!`);
}

alert("Welcome to Flatiron Supermarket!");

const option = prompt("What would you like to do?\n\n- Enter '1' to purchase an item from the supermarket\n- Enter '2' to add an item to the supermarket");

if(option === '1'){
    purchaseItem();
}
else if(option === '2'){
    addItem();
    console.log(items);
}
else{
    alert("Error: Invalid option!");
}
```

## Task 3: Test and Refine

Objective: Test the program in the terminal or browser console to verify that each function works as intended. 

*** Use Browser Developer Tools:** Use Chrome DevTools(or another browser's developer tools) to inspect variables, check scope chains, * and debug your code in real-time.
*** Verify Scope Control:** Check that global variables are accessible to all functions, while function-scoped variables remain private.

## Task 4: Document and Maintain

**Version Control:** Use version control to track changes. This allows for easy updates, collaborative editing, and the ability to revert to previous versions if necessary. If using GitHub, commit changes to your repository after each major update to track progress.
**Regular Updates and Reviews:** Schedule regular reviews and updates for code to ensure content remains relevant, accurate, and aligned with the latest Javascript developments and industry practices.
**Documentation and Examples Repository:** Maintain a centralized repository containing all lab documents, example code, and solutions. Document each function's purpose and scope. 


## Considerations

**Code Logic for Input Validation and Access Control:** We used the following code in our Flatiron Supermarket example where we needed to use an if statement, strict inequality (!==) operators, and logical AND (&&) operators to check multiple conditions. These concepts allow you to set precise conditions within functions, ensuring that user inputs are validated correctly and that the program responds accurately to different scenarios and help to manage accessibility. 

**Global Scope vs. Function Scope:** Recognize when to use global scope (e.g., shared settings) versus function scope (e.g., user input) to optimize code organization and data privacy.

**Maintainable Code Structure:** As new items are added to the supermarket, ensure the code remains efficient and avoids redundancy by leveraging the items array and methods like includes().