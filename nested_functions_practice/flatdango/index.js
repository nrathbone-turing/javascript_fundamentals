console.log("Welcome to flatdango!");

function getMovieDetails(movieTitle){
    const movie = {
        title: movieTitle
    };

    if(movie.title === "The Giant Gila Monster"){
        movie.runtime = "108 minutes";
        movie.showtime = "04:00PM";
        movie.description = "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.";
    }
    else if(movie.title === "Manos: The Hands Of Fate"){
        movie.runtime = "118 minutes";
        movie.showtime = "06:45PM";
        movie.description = "A family gets lost on the road and stumbles upon a hidden, underground, devil-worshiping cult led by the fearsome Master and his servant Torgo.";
    }
    else if(movie.title === "Time Chasers"){
        movie.runtime = "93 minutes";
        movie.showtime = "09:30PM";
        movie.description = "An inventor comes up with a time machine, but must prevent its abuse at the hands of an evil C.E.O.";
    }

    function getMovieMessage(){
        return `${movie.title} is ${movie.runtime} long and starts at ${movie.showtime}. Here is the movie description: ${movie.description}`;
    }

    return getMovieMessage();
}


const movieMessage = getMovieDetails(movieTitles[0]);