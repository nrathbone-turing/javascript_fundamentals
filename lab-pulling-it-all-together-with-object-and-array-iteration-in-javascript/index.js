function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

// functions to retrieve player information

// added a helper function to store the list of all player objects from both teams for later use

function allPlayers() {
    
    // const game = gameObject();

    // return { ...game.home.players, ...game.away.players };

    const game = gameObject();
    const homePlayers = game.home.players;
    const awayPlayers = game.away.players;

    // having version control issues with node or python or something, trying a manual merge of objects (internet research indicates that `Object.assign()` works on older node versions)
    return Object.assign({}, homePlayers, awayPlayers);
}

function numPointsScored(playerName) {
    const players = allPlayers();

    return players[playerName].points;
}

function shoeSize(playerName) {
    const players = allPlayers();

    return players[playerName].shoe;
}

// functions to retrieve team information

function teamColors(teamName) {
    const game = gameObject();

    // will refactor later to use the .forEach method on the array based on module 1 feedback
    for (let teamKey in game) {
        if (game[teamKey].teamName === teamName) {        
            return game[teamKey].colors;
        }
    }
}

function teamNames() {
    const game = gameObject();
    
    return Object.values(game).map(team => team.teamName);
}

// functions to retrieve player numbers and stats

function playerNumbers(teamName) {
    const game = gameObject();
    const team = Object.values(game).find(team => team.teamName === teamName);
    
    return Object.values(team.players).map(player => player.number);
}

function playerStats(playerName) {
    const players = allPlayers();

    return players[playerName];
}

// advanced challenge 

function bigShoeRebounds() {
    let maxShoe = 0;
    let rebounds = 0;
    const players = allPlayers();

    Object.values(players).forEach(player => {
        if (player.shoe > maxShoe) {
            maxShoe = player.shoe;
            rebounds = player.rebounds;
        }
    });

    return rebounds;
}

// bonus question

// mostPointsScored(): Determines which player scored the most points.
// winningTeam(): Identifies which team has the most total points.
// playerWithLongestName(): Finds the player with the longest name

// super bonus question

// doesLongNameStealATon(): Returns true if the player with the longest name has the most steals.

// exporting functions so ESLint recognizes them as being used
module.exports = {
  numPointsScored,
  shoeSize,
  teamColors,
  teamNames,
  playerNumbers,
  playerStats,
  bigShoeRebounds,
};
