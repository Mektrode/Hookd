//  TODO =>  create a highscores store
const highscores = {
    scores: [
        {
            targetScore: 310183,
            nameOfPlayer: "Johnny",
            finalScore: 203398,
            accuracy: null,
            timeTaken: 60,
            date: "Thu 04 Apr 2019",
        },
        {
            targetScore: 710183,
            nameOfPlayer: "Hakim",
            finalScore: 403398,
            accuracy: null,
            timeTaken: 60,
            date: "Thu 04 Apr 2019",
        },
    ]
}
/*
function refreshScores(){
    const newScore = highscores.scores.map(score => {
        
    })
}
*/

function addHighScore(arg){
    console.log("Before: Object recieved as Argument === Your username: " + state.username + " and your score is " + checkcurrent() + ". Thus your accuracy is: " +  checkAcc(checkcurrent()) + ". Time: " + duration(state.currentTime) + " seconds")
    
    /*
    newScore = {
        targetScore: state.target,
        nameOfPlayer: state.username,
        finalScore: state.currentNum,
        accuracy: checkAcc(checkcurrent()),
        timeTaken: duration(state.currentTime),
        date: new Date().toDateString(),
    }
    */

    console.log("The object is")
    console.log(arg.newScore)
    highscores.scores.push(arg.newScore)

    console.log("The total highscores objects are")
    console.log(highscores.scores)

    //clear the state

    addNewScoreToDOM(newScore)
}

function addNewScoreToDOM (arg) {
    var domFragment = document.createDocumentFragment();
    var newscoreRow = document.createElement("TR");
    domFragment.appendChild(newscoreRow)
    
    newscoreDataUsername = document.createElement("TD");
    newscoreDataUsernameInput = document.createTextNode(arg.nameOfPlayer);
    newscoreDataUsername.appendChild(newscoreDataUsernameInput);
    
    newscoreDataAcc = document.createElement("TD");
    newscoreDataAccInput = document.createTextNode(checkAcc(arg.finalScore))
    newscoreDataAcc.appendChild(newscoreDataAccInput)

    newscoreDataTime = document.createElement("TD");
    newscoreDataTimeInput = document.createTextNode(duration(arg.timeTaken))
    newscoreDataTime.appendChild(newscoreDataTimeInput)
    
    /*
    Add new TD for more comprehesive stuff
    */
    newscoreRow.appendChild(newscoreDataUsername) 
    newscoreRow.appendChild(newscoreDataAcc)
    newscoreRow.appendChild(newscoreDataTime)
    
    document.getElementById("scores").appendChild(newscoreRow);
}