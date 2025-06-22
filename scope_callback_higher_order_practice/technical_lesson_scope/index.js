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