const themeParkRides = ["Flatacoaster", "Flata-Ferris Wheel", "Flatburger bumper cars"];

function selectThemeParkRide(){
    function displayRideDetails(rideName){
    if(!themeParkRides.includes(rideName)){
           console.log("Error: Invalid theme park ride!");
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

       console.log(`You selected the ${ride.name} ride! Here's the ride description: ${ride.description}`);

   readline.question("Please select a theme park ride:\n\n- Enter 'Flatacoaster' to select the Flatacoaster ride\n- Enter 'Flata-Ferris Wheel' to select the Flata-Ferris Wheel ride\n- Enter 'Flatburger bumper cars' to select the Flatburger bumper cars ride", displayRideDetails)
    }
}

console.log("Welcome to Flatironland!");

selectThemeParkRide();